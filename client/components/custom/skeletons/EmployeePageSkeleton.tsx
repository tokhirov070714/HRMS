"use client";

import { motion } from "framer-motion";
import { MdGroups } from "react-icons/md";
import { BsFillPersonPlusFill, BsSearch } from "react-icons/bs";

export default function EmployeePageSkeleton() {
    return (
        <div className="w-full max-w-5xl mx-auto animate-pulse">

            {/* Header */}
            <div className="mb-6">
                <div className="h-8 w-64 bg-gray-300 rounded-md" />
            </div>

            {/* Top cards */}
            <div className="grid grid-cols-3 gap-8 mb-10">
                {/* Workforce Split */}
                <div className="p-6 col-span-2 rounded-xl border border-gray-200 bg-white shadow-sm flex gap-8">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="h-6 w-48 bg-gray-300 rounded-md" />
                        <div className="flex justify-between">
                            <div className="flex flex-col items-center gap-4 w-full">
                                <div className="h-32 w-32 bg-gray-200 rounded-full" />
                                <div className="h-6 w-24 bg-gray-300 rounded-md" />
                                <div className="h-4 w-32 bg-gray-200 rounded-md" />
                            </div>
                            <div className="flex flex-col items-center gap-4 w-full">
                                <div className="h-32 w-32 bg-gray-200 rounded-full" />
                                <div className="h-6 w-24 bg-gray-300 rounded-md" />
                                <div className="h-4 w-32 bg-gray-200 rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total Headcount */}
                <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col items-center gap-4">
                    <div className="h-12 w-12 bg-gray-200 rounded-xl flex items-center justify-center">
                        <MdGroups size={35} className="text-gray-300" />
                    </div>
                    <div className="h-4 w-32 bg-gray-300 rounded-md" />
                    <div className="h-10 w-24 bg-gray-300 rounded-md" />
                </div>
            </div>

            {/* Department Distribution */}
            <div className="p-6 rounded-xl border border-gray-300 bg-white shadow-sm mb-10">
                <div className="h-6 w-64 bg-gray-300 rounded-md mb-6" />

                <div className="flex gap-10">
                    {/* Donut chart placeholder */}
                    <div className="h-80 w-80 bg-gray-200 rounded-full relative" />

                    {/* Table placeholder */}
                    <div className="flex-1">
                        <div className="h-10 bg-gray-200 rounded-md mb-2" />
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="flex justify-between gap-4 mb-2">
                                <div className="h-6 w-1/3 bg-gray-300 rounded-md" />
                                <div className="h-6 w-1/6 bg-gray-300 rounded-md" />
                                <div className="h-6 w-1/6 bg-gray-300 rounded-md" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Search and Add */}
            <div className="flex items-center justify-between gap-4 mb-5">
                <div className="relative w-80 h-10 bg-gray-200 rounded-md" />
                <div className="h-12 w-48 bg-gray-200 rounded-lg flex items-center justify-center gap-2" />
            </div>

            {/* Employee table skeleton */}
            <div className="overflow-hidden rounded-xl border border-gray-300">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex justify-between px-8 py-6 gap-4">
                        <div className="flex gap-4 items-center">
                            <div className="h-10 w-10 bg-gray-200 rounded-full" />
                            <div className="flex flex-col gap-2">
                                <div className="h-4 w-32 bg-gray-300 rounded-md" />
                                <div className="h-3 w-40 bg-gray-200 rounded-md" />
                            </div>
                        </div>
                        <div className="h-4 w-32 bg-gray-200 rounded-md" />
                        <div className="flex gap-2">
                            <div className="h-6 w-6 bg-gray-200 rounded-md" />
                            <div className="h-6 w-6 bg-gray-200 rounded-md" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
