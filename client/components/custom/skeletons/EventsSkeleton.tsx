"use client";

import { motion } from "framer-motion";

export default function EventsSkeleton() {
    const shimmer = {
        animate: { opacity: [0.5, 1, 0.5] },
        transition: { duration: 1, repeat: Infinity },
    };

    return (
        <div className="w-full p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Skeleton */}
                <div className="flex items-center justify-between mb-8">
                    <motion.div
                        className="h-10 w-64 bg-gray-300 rounded mb-2"
                    />
                    <motion.div
                        className="h-10 w-40 bg-gray-300 rounded"
                    />
                </div>

                {/* Events List Skeleton */}
                <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex gap-4"
                        >
                            {/* Date Badge Skeleton */}
                            <motion.div
                                className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-3 min-w-[80px] gap-1"
                                {...shimmer}
                            >
                                <div className="h-3 w-12 bg-gray-300 rounded" />
                                <div className="h-6 w-6 bg-gray-300 rounded" />
                                <div className="h-3 w-10 bg-gray-300 rounded" />
                            </motion.div>

                            {/* Event Details Skeleton */}
                            <div className="flex-1 space-y-2">
                                <motion.div className="h-5 w-3/4 bg-gray-300 rounded" />
                                <motion.div className="h-4 w-full bg-gray-300 rounded" />
                                <motion.div className="h-4 w-5/6 bg-gray-300 rounded" />
                                <div className="flex gap-4 mt-1">
                                    <motion.div className="h-3 w-16 bg-gray-300 rounded" />
                                    <motion.div className="h-3 w-24 bg-gray-300 rounded" />
                                </div>
                            </div>

                            {/* Delete Button Skeleton */}
                            <motion.div className="h-8 w-8 bg-gray-300 rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}