"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Search, X, SlidersHorizontal, Check, Calendar } from "lucide-react";
import { useClickOutside } from "@/hooks/use-click-outside";

interface FilterOption {
    id: string;
    label: string;
    type: "select" | "date" | "boolean";
    options?: { value: string; label: string }[];
}

interface SearchInputProps {
    placeholder?: string;
    filters?: FilterOption[];
}

const defaultFilters: FilterOption[] = [
    {
        id: "status",
        label: "Status",
        type: "select",
        options: [
            { value: "active", label: "Active" },
            { value: "archived", label: "Archived" },
            { value: "draft", label: "Draft" },
        ],
    },
    {
        id: "date",
        label: "Created Date",
        type: "date",
    },
    {
        id: "verified",
        label: "Verified Only",
        type: "boolean",
    },
];

export default function Input_07({ filters = defaultFilters }: SearchInputProps) {
    const [showFilters, setShowFilters] = useState(false);
    const [activeFilters, setActiveFilters] = useState<Record<string, any>>({
        verified: true,
    });
    const filterRef = useRef<HTMLDivElement>(null);

    useClickOutside(filterRef, () => setShowFilters(false));

    const updateFilter = (id: string, value: any) => {
        setActiveFilters((prev) => {
            if (value === undefined || value === "") {
                const newFilters = { ...prev };
                delete newFilters[id];
                return newFilters;
            }
            return { ...prev, [id]: value };
        });
    };

    const getActiveFilterCount = () => {
        return Object.keys(activeFilters).length;
    };

    return (
        <div className="w-full max-w-2xl relative z-0">
            <div className="relative">
                <div className="relative flex items-center">
                    <Search className="absolute left-3 w-4 h-4 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="Search with filters"
                        className={cn(
                            "w-full pl-10 pr-20 py-2",
                            "rounded-lg border border-zinc-200 dark:border-zinc-800",
                            "bg-white dark:bg-zinc-900",
                            "focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
                            "placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                        )}
                    />
                    <div className="absolute right-2 flex items-center gap-1">
                        <button
                            type="button"
                            onClick={() => setShowFilters(!showFilters)}
                            className={cn(
                                "p-1.5 rounded flex items-center gap-1",
                                "text-sm font-medium",
                                showFilters
                                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                                    : "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                            )}
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            {getActiveFilterCount() > 0 && (
                                <span className="min-w-[20px] px-1 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-xs">
                                    {getActiveFilterCount()}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {showFilters && (
                    <div
                        ref={filterRef}
                        className={cn(
                            "absolute right-0 bottom-full mb-2 w-72 p-4",
                            "bg-white dark:bg-zinc-900",
                            "border border-zinc-200 dark:border-zinc-800",
                            "rounded-lg shadow-lg"
                        )}
                    >
                        <fieldset>
                            <div className="flex items-center justify-between">
                                <legend className="font-medium">Filters</legend>
                                {getActiveFilterCount() > 0 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveFilters({ verified: true })
                                        }
                                        className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>

                            <div className="space-y-3 mt-4">
                                {filters.map((filter) => (
                                    <div key={filter.id} className="space-y-1">
                                        {filter.type === "select" && (
                                            <div className="relative">
                                                <label
                                                    htmlFor={`filter-${filter.id}`}
                                                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                                                >
                                                    {filter.label}
                                                </label>
                                                <select
                                                    id={`filter-${filter.id}`}
                                                    value={
                                                        activeFilters[
                                                            filter.id
                                                        ] || ""
                                                    }
                                                    onChange={(e) =>
                                                        updateFilter(
                                                            filter.id,
                                                            e.target.value
                                                        )
                                                    }
                                                    className={cn(
                                                        "w-full pl-3 pr-8 py-1.5",
                                                        "rounded-md border border-zinc-200 dark:border-zinc-800",
                                                        "bg-white dark:bg-zinc-900",
                                                        "text-sm text-zinc-900 dark:text-zinc-100",
                                                        "focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                                    )}
                                                >
                                                    <option value="">
                                                        Any
                                                    </option>
                                                    {filter.options?.map(
                                                        (option) => (
                                                            <option
                                                                key={
                                                                    option.value
                                                                }
                                                                value={
                                                                    option.value
                                                                }
                                                            >
                                                                {option.label}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        )}

                                        {filter.type === "date" && (
                                            <div className="relative">
                                                <label
                                                    htmlFor={`filter-${filter.id}`}
                                                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                                                >
                                                    {filter.label}
                                                </label>
                                                <input
                                                    id={`filter-${filter.id}`}
                                                    type="date"
                                                    value={
                                                        activeFilters[
                                                            filter.id
                                                        ] || ""
                                                    }
                                                    onChange={(e) =>
                                                        updateFilter(
                                                            filter.id,
                                                            e.target.value
                                                        )
                                                    }
                                                    className={cn(
                                                        "w-full pl-3 pr-8 py-1.5",
                                                        "rounded-md border border-zinc-200 dark:border-zinc-800",
                                                        "bg-white dark:bg-zinc-900",
                                                        "text-sm text-zinc-900 dark:text-zinc-100",
                                                        "focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                                    )}
                                                />
                                                <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                            </div>
                                        )}

                                        {filter.type === "boolean" && (
                                            <fieldset>
                                                <span
                                                    id={`filter-${filter.id}-label`}
                                                    className="sr-only"
                                                >
                                                    {filter.label}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateFilter(
                                                            filter.id,
                                                            !activeFilters[
                                                                filter.id
                                                            ]
                                                        )
                                                    }
                                                    className={cn(
                                                        "flex items-center gap-2 px-3 py-1.5 w-full",
                                                        "rounded-md border text-sm",
                                                        "transition-colors duration-150",
                                                        activeFilters[filter.id]
                                                            ? "border-indigo-500 bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                                                            : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                                                    )}
                                                    aria-pressed={
                                                        activeFilters[filter.id]
                                                    }
                                                >
                                                    {activeFilters[
                                                        filter.id
                                                    ] && (
                                                        <Check className="w-4 h-4" />
                                                    )}
                                                    {filter.label}
                                                </button>
                                            </fieldset>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                )}
            </div>

            {getActiveFilterCount() > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                    {Object.entries(activeFilters).map(([key, value]) => {
                        const filter = filters.find((f) => f.id === key);
                        let label = "";
                        if (filter?.type === "select") {
                            label =
                                filter.options?.find((o) => o.value === value)
                                    ?.label || value;
                        } else if (filter?.type === "boolean") {
                            label = filter.label;
                        } else {
                            label = `${filter?.label}: ${value}`;
                        }

                        return (
                            <span
                                key={key}
                                className={cn(
                                    "inline-flex items-center gap-1 px-2 py-1",
                                    "rounded-md text-sm",
                                    "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400"
                                )}
                            >
                                {label}
                                <button
                                    type="button"
                                    onClick={() => updateFilter(key, undefined)}
                                    className="hover:text-indigo-900 dark:hover:text-indigo-200"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
