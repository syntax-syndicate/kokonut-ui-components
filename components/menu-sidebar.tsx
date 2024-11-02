import { motion } from "framer-motion";

interface MenuSidebarProps {
    position: "left" | "right";
    isOpen: boolean;
    components: Array<{
        id: number;
        title: string;
    }>;
}

export function MenuSidebar({
    position,
    isOpen,
    components,
}: MenuSidebarProps) {
    // Filter components based on position (even/odd indices)
    const filteredComponents = components.filter((_, index) =>
        position === "left" ? index % 2 === 0 : index % 2 === 1
    );

    return (
        <motion.div
            className={`
                w-48 h-screen fixed ${position}-0 top-0 
                bg-white dark:bg-zinc-900 
                border-${
                    position === "left" ? "r" : "l"
                } border-zinc-200 dark:border-zinc-800 
                z-40
            `}
            initial={{ x: position === "left" ? -176 : 176, opacity: 0 }}
            animate={{
                x: isOpen ? 0 : position === "left" ? -176 : 176,
                opacity: isOpen ? 1 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
            }}
        >
            <div className="h-full flex flex-col p-4">
                <nav className="flex-1 flex flex-col justify-center space-y-1">
                    {filteredComponents.map((item) => (
                        <div
                            key={item.id}
                            className="space-y-1 p-2 rounded-lg transition-all duration-200"
                        >
                            <div className="text-xs uppercase tracking-wider font-medium text-zinc-400 dark:text-zinc-500">
                                {(item.id + 1).toString().padStart(2, "0")}
                            </div>

                            <motion.a
                                href={`#component-${item.id}`}
                                onClick={(
                                    e: React.MouseEvent<HTMLAnchorElement>
                                ) => {
                                    e.preventDefault();
                                    document
                                        .getElementById(`component-${item.id}`)
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                }}
                                className="
                                    flex items-center gap-1.5 px-1.5 py-0.5
                                    rounded-md text-sm
                                    transition-colors duration-200
                                    hover:bg-zinc-100 dark:hover:bg-zinc-800/50
                                    text-zinc-600 dark:text-zinc-400
                                "
                                whileHover={{ x: 2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="font-medium truncate">
                                    {item.title}
                                </span>
                            </motion.a>
                        </div>
                    ))}
                </nav>
            </div>
        </motion.div>
    );
}
