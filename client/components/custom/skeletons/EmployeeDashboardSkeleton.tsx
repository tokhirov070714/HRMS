"use client";

import { motion } from "framer-motion";

export default function EmployeeDashboardSkeleton() {
    // Shimmer animation for skeleton elements
    const shimmer = {
        opacity: [0.5, 1, 0.5],
    };


    return (
        <div className="w-full p-6">
            {/* Header Skeleton */}
            <div className="mb-8">
                <motion.div
                    className="h-9 bg-gray-200 rounded-lg w-64 mb-2"
                    animate={shimmer}
                />
                <motion.div
                    className="h-6 bg-gray-200 rounded-lg w-96"
                    animate={shimmer}
                />
            </div>

            {/* Main Grid Layout */}
            <div className="w-full">
                <div className="grid grid-cols-4 gap-6">
                    {/* Profile Card Skeleton */}
                    <div className="grid grid-cols-[300px_1fr] col-span-3 gap-6 bg-white rounded-2xl shadow-sm p-8">
                        {/* Photo Skeleton */}
                        <motion.div
                            className="h-80 bg-gray-200 rounded-2xl"
                            animate={shimmer}
                        />

                        {/* Profile Info Skeleton */}
                        <div className="flex flex-col">
                            {/* Name */}
                            <div className="mb-6">
                                <motion.div
                                    className="h-8 bg-gray-200 rounded-lg w-48 mb-2"
                                    animate={shimmer}
                                />
                                <motion.div
                                    className="h-6 bg-gray-200 rounded-lg w-40"
                                    animate={shimmer}
                                />
                            </div>

                            {/* Contact Info Skeleton */}
                            <div className="space-y-3 mb-6">
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center gap-3"
                                        animate={shimmer}
                                    >
                                        <div className="w-5 h-5 bg-gray-200 rounded" />
                                        <div className="h-5 bg-gray-200 rounded w-48" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Button Skeleton */}
                            <motion.div
                                className="mt-auto h-14 bg-gray-200 rounded-lg w-full"
                                animate={shimmer}
                            />
                        </div>
                    </div>

                    {/* Upcoming Events Card Skeleton */}
                    <div className="bg-white rounded-2xl shadow-sm px-10 py-6">
                        <motion.div
                            className="h-6 bg-gray-200 rounded-lg w-32 mb-6"
                            animate={shimmer}
                        />

                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div className="flex gap-4" key={i}>
                                    <motion.div
                                        className="flex flex-col items-center gap-1"
                                        animate={shimmer}
                                    >
                                        <div className="w-10 h-3 bg-gray-200 rounded" />
                                        <div className="w-10 h-8 bg-gray-200 rounded" />
                                    </motion.div>
                                    <div className="flex-1">
                                        <motion.div
                                            className="h-5 bg-gray-200 rounded w-full mb-2"
                                            animate={shimmer}
                                        />
                                        <motion.div
                                            className="h-4 bg-gray-200 rounded w-3/4"
                                            animate={shimmer}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                    {/* Calendar Card Skeleton */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <motion.div
                                className="w-10 h-10 bg-gray-200 rounded-lg"
                                animate={shimmer}
                            />
                            <motion.div
                                className="h-6 bg-gray-200 rounded-lg w-32"
                                animate={shimmer}
                            />
                        </div>

                        <motion.div
                            className="h-80 bg-gray-200 rounded-xl"
                            animate={shimmer}
                        />
                    </div>

                    {/* To-Do List Card Skeleton */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <motion.div
                            className="h-6 bg-gray-200 rounded-lg w-24 mb-4"
                            animate={shimmer}
                        />

                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-3 p-3"
                                    animate={shimmer}
                                >
                                    <div className="w-5 h-5 bg-gray-200 rounded mt-1" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-5 bg-gray-200 rounded w-full" />
                                        <div className="h-4 bg-gray-200 rounded w-3/4" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="h-10 bg-gray-200 rounded-lg w-full mt-4"
                            animate={shimmer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
