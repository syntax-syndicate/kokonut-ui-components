import { Calendar, Clock, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Skill {
    name: string;
    level: number;
}

interface Card02Props {
    name?: string;
    role?: string;
    image?: string;
    availability?: string;
    rating?: number;
    skills?: Skill[];
}

const defaultProfile = {
    name: "Sarah Anderson",
    role: "Senior Product",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png",
    availability: "Available in 2 weeks",
    rating: 4.9,
    skills: [
        { name: "UI", level: 2 },
        { name: "UX", level: 4 },
        { name: "Dev", level: 5 },
        { name: "Design", level: 4 },
    ],
} satisfies Required<Card02Props>;

export default function Card02({
    name = defaultProfile.name,
    role = defaultProfile.role,
    image = defaultProfile.image,
    availability = defaultProfile.availability,
    rating = defaultProfile.rating,
    skills = defaultProfile.skills,
}: Card02Props = defaultProfile) {
    return (
        <div className="relative w-full max-w-lg mx-auto">
            <div
                className="relative overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 
                bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl"
            >
                <div className="p-8 pb-0">
                    <div className="flex items-start gap-6">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-zinc-100 dark:ring-zinc-800">
                                {image && (
                                    <Image
                                        src={image}
                                        alt={name}
                                        width={96}
                                        height={96}
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <div
                                className="absolute -bottom-1 -right-1 p-1.5 rounded-lg 
                                bg-emerald-50 dark:bg-emerald-900/50 
                                text-emerald-600 dark:text-emerald-400
                                ring-2 ring-white dark:ring-zinc-900"
                            >
                                <Clock className="w-3.5 h-3.5" />
                            </div>
                        </div>

                        <div className="flex-1 pt-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                        {name}
                                    </h3>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {role}
                                    </p>
                                </div>
                                <div
                                    className="flex items-center gap-1 px-2.5 py-1 rounded-full 
                                    bg-zinc-100 dark:bg-zinc-800"
                                >
                                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {rating}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>{availability}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                        Skills & Expertise
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                        {skills?.map((skill) => (
                            <div
                                key={skill.name}
                                className="space-y-2 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-zinc-600 dark:text-zinc-400">
                                        {skill.name}
                                    </span>
                                    <span className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-1.5 h-1.5 rounded-full mx-0.5 
                                                    ${
                                                        i < skill.level
                                                            ? "bg-blue-500 dark:bg-blue-400"
                                                            : "bg-zinc-200 dark:bg-zinc-700"
                                                    }`}
                                            />
                                        ))}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-8 pt-4 flex justify-end items-end gap-2 w-fit ml-auto">
                    <Button
                        variant="default"
                        className="flex-1 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700
                            text-zinc-900 dark:text-zinc-100 border-none"
                    >
                        <Send className="w-4 h-4" />
                        Contact Designer
                    </Button>
                </div>
            </div>
        </div>
    );
}
