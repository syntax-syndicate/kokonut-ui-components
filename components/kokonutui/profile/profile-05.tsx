"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Users,
    Mail,
    Plus,
    MoreHorizontal,
    Shield,
    Star,
} from "lucide-react";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    email: string;
    status: "active" | "inactive";
    permissions: "admin" | "editor" | "viewer";
}

interface Profile05Props {
    teamName?: string;
    description?: string;
    members?: TeamMember[];
}

const defaultProfile = {
    teamName: "Design Team",
    description: "Core design team responsible for product design and user experience",
    members: [
        {
            id: "1",
            name: "Sarah Chen",
            role: "Lead Designer",
            email: "sarah@example.com",
            status: "active",
            permissions: "admin",
        },
        {
            id: "2",
            name: "Mike Wilson",
            role: "UI Designer",
            email: "mike@example.com",
            status: "active",
            permissions: "editor",
        },
        {
            id: "3",
            name: "Emma Davis",
            role: "UX Researcher",
            email: "emma@example.com",
            status: "inactive",
            permissions: "viewer",
        },
    ],
} satisfies Required<Profile05Props>;

export default function Profile05({
    teamName = defaultProfile.teamName,
    description = defaultProfile.description,
    members = defaultProfile.members,
}: Partial<Profile05Props> = defaultProfile) {
    const [activeMembers, setActiveMembers] = useState(members);

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800/50 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                {teamName}
                            </h2>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                {description}
                            </p>
                        </div>
                        <Button variant="outline" size="sm">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Member
                        </Button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                        <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {members.length} members
                        </div>
                        <div className="flex items-center gap-1">
                            <Shield className="w-4 h-4" />
                            {members.filter(m => m.permissions === "admin").length} admins
                        </div>
                    </div>
                </div>

                {/* Member List */}
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {activeMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900"
                        >
                            <div className="flex-1 min-w-0 mr-4">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                        {member.name}
                                    </h3>
                                    <Badge
                                        variant="secondary"
                                        className={`${
                                            member.status === "active"
                                                ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                        }`}
                                    >
                                        {member.status}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-4 mt-1">
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {member.role}
                                    </p>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1"
                                    >
                                        <Mail className="w-3 h-3" />
                                        {member.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge
                                    variant="outline"
                                    className="border-zinc-200 dark:border-zinc-800"
                                >
                                    {member.permissions}
                                </Badge>
                                <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
