"use client";

import { motion } from "framer-motion";

export default function TodoSkeleton() {

    return (
        <div className="w-full p-8">
            {/* Header Skeleton */}
            <div className="flex items-start justify-between mb-8">
                <motion.div
                    className="h-10 w-64 bg-gray-300 rounded mb-2"
                />
                <motion.div
                    className="h-10 w-40 bg-gray-300 rounded"
                />
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-sm p-6"
                    >
                        <motion.div
                            className="h-6 w-3/4 bg-gray-300 rounded mb-3"
                        />
                        <motion.div
                            className="h-4 w-full bg-gray-300 rounded mb-2"
                        />
                        <motion.div
                            className="h-4 w-5/6 bg-gray-300 rounded mb-4"
                        />
                        <motion.div
                            className="h-5 w-1/4 bg-gray-300 rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}