"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, User, Sparkles, Wand2, ArrowRight, Star, Shield, Zap, Brain, Network } from "lucide-react";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: string;
    tokens: number;
    sentiment: number; // -1 to 1
    confidence: number; // 0 to 1
    type: "text" | "code" | "image";
    codeLanguage?: string;
}

interface Node {
    id: string;
    x: number;
    y: number;
    connections: string[];
    pulse: boolean;
    size: number;
    velocity: { x: number; y: number };
}

interface Particle {
    id: string;
    fromNode: string;
    toNode: string;
    progress: number;
    size: number;
}

const sampleMessages: Message[] = [
    {
        id: "1",
        role: "user",
        content: "Can you help me optimize this React component?",
        timestamp: "2 min ago",
        tokens: 12,
        sentiment: 0.6,
        confidence: 0.95,
        type: "text"
    },
    {
        id: "2",
        role: "assistant",
        content: "Here's an optimized version using useMemo and proper event handling:",
        timestamp: "1 min ago",
        tokens: 45,
        sentiment: 0.8,
        confidence: 0.98,
        type: "code",
        codeLanguage: "typescript"
    },
    {
        id: "3",
        role: "user",
        content: "Could you explain the performance benefits?",
        timestamp: "1 min ago",
        tokens: 8,
        sentiment: 0.4,
        confidence: 0.92,
        type: "text"
    },
    {
        id: "4",
        role: "assistant",
        content: "The key benefits come from reduced re-renders and memoization...",
        timestamp: "Just now",
        tokens: 65,
        sentiment: 0.7,
        confidence: 0.96,
        type: "text"
    }
];

function MessageCard({ message, index }: { message: Message; index: number }) {
    const isAI = message.role === "assistant";
    const sentimentColor = message.sentiment > 0 
        ? `rgba(${120 + message.sentiment * 135}, 255, ${120 + message.sentiment * 135})`
        : `rgba(255, ${255 + message.sentiment * 255}, ${255 + message.sentiment * 255})`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, x: isAI ? 20 : -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex gap-4 ${isAI ? 'flex-row' : 'flex-row-reverse'} items-start`}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="relative"
            >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                    ${isAI ? 'bg-violet-500/20' : 'bg-blue-500/20'}`}>
                    {isAI ? <Bot className="w-5 h-5 text-violet-500" /> : 
                           <User className="w-5 h-5 text-blue-500" />}
                </div>
                <motion.div
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full"
                    style={{ backgroundColor: sentimentColor }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>

            <motion.div 
                className={`flex-1 space-y-2 max-w-xl ${isAI ? 'pr-12' : 'pl-12'}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.1 }}
            >
                <Card className={`p-4 relative overflow-hidden
                    ${isAI ? 'bg-zinc-900/50' : 'bg-zinc-800/50'}`}>
                    <div className="relative z-10">
                        <div className="text-sm text-zinc-300">
                            {message.content}
                        </div>
                        
                        {message.type === "code" && (
                            <div className="mt-3 p-3 bg-black/30 rounded-lg">
                                <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                                    <span>{message.codeLanguage}</span>
                                    <button className="hover:text-zinc-300">Copy</button>
                                </div>
                                <pre className="text-xs text-zinc-300 overflow-x-auto">
                                    <code>{message.content}</code>
                                </pre>
                            </div>
                        )}
                    </div>

                    <motion.div
                        className="absolute inset-0 opacity-20"
                        style={{
                            background: `radial-gradient(circle at 50% 50%, 
                                ${isAI ? 'rgb(139, 92, 246)' : 'rgb(59, 130, 246)'}, 
                                transparent)`
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                </Card>

                <div className="flex items-center justify-between text-xs text-zinc-500">
                    <div className="flex items-center gap-3">
                        <span>{message.timestamp}</span>
                        <span>{message.tokens} tokens</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3" />
                        <span>{Math.round(message.confidence * 100)}% confidence</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function generateNodes(count: number): Node[] {
    const nodes: Node[] = [];
    for (let i = 0; i < count; i++) {
        nodes.push({
            id: `node-${i}`,
            x: Math.random() * 100,
            y: Math.random() * 100,
            connections: [],
            pulse: false,
            size: Math.random() * 2 + 1,
            velocity: {
                x: (Math.random() - 0.5) * 0.1,
                y: (Math.random() - 0.5) * 0.1
            }
        });
    }
    
    // Create more dense connections
    nodes.forEach(node => {
        nodes.forEach(target => {
            if (node.id !== target.id) {
                const distance = Math.hypot(target.x - node.x, target.y - node.y);
                if (distance < 30 && !node.connections.includes(target.id)) {
                    node.connections.push(target.id);
                }
            }
        });
    });

    return nodes;
}

function NeuralNetwork() {
    const [nodes, setNodes] = useState<Node[]>(generateNodes(20));
    const [particles, setParticles] = useState<Particle[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeNode, setActiveNode] = useState<string | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setNodes(prev => prev.map(node => ({
                ...node,
                pulse: Math.random() > 0.85
            })));

            setParticles(prev => {
                const newParticles = nodes
                    .filter(node => node.pulse)
                    .flatMap(node => 
                        node.connections.map(targetId => ({
                            id: `particle-${Math.random()}`,
                            fromNode: node.id,
                            toNode: targetId,
                            progress: 0,
                            size: Math.random() * 2 + 1
                        }))
                    );
                return [...prev, ...newParticles].filter(p => p.progress < 1);
            });
        }, 800);

        return () => clearInterval(interval);
    }, [nodes]);

    useEffect(() => {
        const animateParticles = () => {
            setParticles(prev => 
                prev.map(p => ({
                    ...p,
                    progress: p.progress + 0.02
                })).filter(p => p.progress < 1)
            );
            requestAnimationFrame(animateParticles);
        };
        requestAnimationFrame(animateParticles);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });

        // Find closest node
        const closestNode = nodes.reduce((closest, node) => {
            const distance = Math.hypot(node.x - x, node.y - y);
            return distance < 10 ? node.id : closest;
        }, null as string | null);

        setActiveNode(closestNode);
    };

    return (
        <div 
            ref={containerRef}
            className="relative w-full h-screen"
            onMouseMove={handleMouseMove}
        >
            <svg className="w-full h-full">
                <defs>
                    <radialGradient id="nodeGradient">
                        <stop offset="0%" stopColor="rgb(139, 92, 246)" />
                        <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                    </radialGradient>
                </defs>

                {/* Connections */}
                {nodes.map(node => 
                    node.connections.map(targetId => {
                        const target = nodes.find(n => n.id === targetId);
                        if (!target) return null;
                        const isActive = node.id === activeNode || targetId === activeNode;
                        
                        return (
                            <motion.line
                                key={`${node.id}-${targetId}`}
                                x1={`${node.x}%`}
                                y1={`${node.y}%`}
                                x2={`${target.x}%`}
                                y2={`${target.y}%`}
                                stroke="rgb(139, 92, 246)"
                                strokeWidth={isActive ? "2" : "1"}
                                strokeOpacity={isActive ? "0.4" : "0.15"}
                                initial={false}
                                animate={{
                                    strokeOpacity: isActive ? 0.4 : 0.15,
                                    strokeWidth: isActive ? 2 : 1
                                }}
                            />
                        );
                    })
                )}

                {/* Particles */}
                {particles.map(particle => {
                    const fromNode = nodes.find(n => n.id === particle.fromNode);
                    const toNode = nodes.find(n => n.id === particle.toNode);
                    if (!fromNode || !toNode) return null;

                    const x = fromNode.x + (toNode.x - fromNode.x) * particle.progress;
                    const y = fromNode.y + (toNode.y - fromNode.y) * particle.progress;

                    return (
                        <motion.circle
                            key={particle.id}
                            cx={`${x}%`}
                            cy={`${y}%`}
                            r={particle.size}
                            fill="rgb(139, 92, 246)"
                            opacity={1 - particle.progress}
                        />
                    );
                })}

                {/* Nodes */}
                {nodes.map(node => {
                    const isActive = node.id === activeNode;
                    
                    return (
                        <g key={node.id}>
                            <motion.circle
                                cx={`${node.x}%`}
                                cy={`${node.y}%`}
                                r={node.size}
                                fill="rgb(139, 92, 246)"
                                opacity={isActive ? 0.8 : 0.5}
                                initial={false}
                                animate={{
                                    r: isActive ? node.size * 1.5 : node.size,
                                    opacity: isActive ? 0.8 : 0.5
                                }}
                            />
                            {node.pulse && (
                                <circle
                                    cx={`${node.x}%`}
                                    cy={`${node.y}%`}
                                    r={node.size}
                                    fill="none"
                                    stroke="rgb(139, 92, 246)"
                                    strokeWidth="2"
                                >
                                    <animate
                                        attributeName="r"
                                        from={node.size}
                                        to={node.size * 10}
                                        dur="1s"
                                        begin="0s"
                                        repeatCount="1"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        from="0.5"
                                        to="0"
                                        dur="1s"
                                        begin="0s"
                                        repeatCount="1"
                                    />
                                </circle>
                            )}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}

function FeatureSpotlight() {
    const [nodes, setNodes] = useState<Node[]>(generateNodes(40)); // Increased node count
    const [particles, setParticles] = useState<Particle[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeNode, setActiveNode] = useState<string | null>(null);

    // Add node movement
    useEffect(() => {
        const moveNodes = () => {
            setNodes(prev => prev.map(node => {
                let newX = node.x + node.velocity.x;
                let newY = node.y + node.velocity.y;

                // Bounce off edges
                if (newX < 0 || newX > 100) node.velocity.x *= -1;
                if (newY < 0 || newY > 100) node.velocity.y *= -1;

                return {
                    ...node,
                    x: Math.max(0, Math.min(100, newX)),
                    y: Math.max(0, Math.min(100, newY))
                };
            }));
        };

        const interval = setInterval(moveNodes, 50);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const animateParticles = () => {
            setParticles(prev => 
                prev.map(p => ({
                    ...p,
                    progress: p.progress + 0.02
                })).filter(p => p.progress < 1)
            );
            requestAnimationFrame(animateParticles);
        };
        requestAnimationFrame(animateParticles);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });

        // Find closest node
        const closestNode = nodes.reduce((closest, node) => {
            const distance = Math.hypot(node.x - x, node.y - y);
            return distance < 10 ? node.id : closest;
        }, null as string | null);

        setActiveNode(closestNode);
    };

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            {/* Neural Network Background */}
            <div 
                ref={containerRef}
                className="absolute inset-0 w-full h-full"
                onMouseMove={handleMouseMove}
            >
                <svg className="w-full h-full">
                    <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
                            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
                            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
                        </linearGradient>
                    </defs>

                    {/* Connections with gradient */}
                    {nodes.map(node => 
                        node.connections.map(targetId => {
                            const target = nodes.find(n => n.id === targetId);
                            if (!target) return null;
                            const isActive = node.id === activeNode || targetId === activeNode;
                            
                            return (
                                <motion.line
                                    key={`${node.id}-${targetId}`}
                                    x1={`${node.x}%`}
                                    y1={`${node.y}%`}
                                    x2={`${target.x}%`}
                                    y2={`${target.y}%`}
                                    stroke="url(#connectionGradient)"
                                    strokeWidth={isActive ? "2" : "1"}
                                    strokeOpacity={isActive ? "0.8" : "0.4"}
                                    initial={false}
                                    animate={{
                                        strokeOpacity: isActive ? 0.8 : 0.4,
                                        strokeWidth: isActive ? 2 : 1
                                    }}
                                />
                            );
                        })
                    )}

                    {/* Enhanced particles */}
                    {particles.map(particle => {
                        const fromNode = nodes.find(n => n.id === particle.fromNode);
                        const toNode = nodes.find(n => n.id === particle.toNode);
                        if (!fromNode || !toNode) return null;

                        const x = fromNode.x + (toNode.x - fromNode.x) * particle.progress;
                        const y = fromNode.y + (toNode.y - fromNode.y) * particle.progress;

                        return (
                            <motion.circle
                                key={particle.id}
                                cx={`${x}%`}
                                cy={`${y}%`}
                                r={particle.size}
                                fill="rgb(139, 92, 246)"
                                opacity={1 - particle.progress}
                                filter="blur(1px)"
                            />
                        );
                    })}

                    {/* Enhanced nodes */}
                    {nodes.map(node => {
                        const isActive = node.id === activeNode;
                        
                        return (
                            <g key={node.id}>
                                <motion.circle
                                    cx={`${node.x}%`}
                                    cy={`${node.y}%`}
                                    r={node.size}
                                    fill="rgb(139, 92, 246)"
                                    opacity={isActive ? 1 : 0.7}
                                    filter="blur(0.5px)"
                                    initial={false}
                                    animate={{
                                        r: isActive ? node.size * 2 : node.size,
                                        opacity: isActive ? 1 : 0.7
                                    }}
                                />
                                {node.pulse && (
                                    <circle
                                        cx={`${node.x}%`}
                                        cy={`${node.y}%`}
                                        r={node.size}
                                        fill="none"
                                        stroke="rgb(139, 92, 246)"
                                        strokeWidth="2"
                                    >
                                        <animate
                                            attributeName="r"
                                            from={node.size}
                                            to={node.size * 15}
                                            dur="1.5s"
                                            begin="0s"
                                            repeatCount="1"
                                        />
                                        <animate
                                            attributeName="opacity"
                                            from="0.7"
                                            to="0"
                                            dur="1.5s"
                                            begin="0s"
                                            repeatCount="1"
                                        />
                                    </circle>
                                )}
                            </g>
                        );
                    })}
                </svg>
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
            </div>

            {/* Minimal Content */}
            <div className="relative z-10">
                <div className="container mx-auto px-6 min-h-screen flex items-center">
                    <div className="max-w-2xl space-y-10">
                        {/* Simple, elegant badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                                bg-white/5 border border-white/10"
                        >
                            <span className="w-1 h-1 rounded-full bg-violet-500" />
                            <span className="text-xs text-zinc-400 tracking-wide">AI-POWERED SYSTEM</span>
                        </motion.div>

                        {/* Clean typography */}
                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white"
                            >
                                Next generation{' '}
                                <span className="text-violet-400">neural</span>{' '}
                                <span className="text-violet-400">network</span>
                            </motion.h1>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-zinc-400 leading-relaxed"
                            >
                                Experience the future of AI computing with our advanced neural architecture 
                                and quantum processing capabilities.
                            </motion.p>
                        </div>

                        {/* Minimal CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4"
                        >
                            <Button 
                                className="h-12 px-8 bg-white hover:bg-white/90 text-black"
                            >
                                Get Started
                            </Button>
                            <Button 
                                variant="ghost"
                                className="h-12 px-8 text-white hover:bg-white/5"
                            >
                                Documentation →
                            </Button>
                        </motion.div>

                        {/* Simple metrics */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-8 pt-4"
                        >
                            {[
                                { value: "100ms", label: "Latency" },
                                { value: "99.9%", label: "Accuracy" },
                                { value: "24/7", label: "Support" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-2xl font-light text-white">{stat.value}</div>
                                    <div className="text-sm text-zinc-500">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Add this to your global CSS
const styles = `
    @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    
    .animate-gradient {
        background-size: 200% auto;
        animation: gradient 8s linear infinite;
    }
`;

export default FeatureSpotlight; 