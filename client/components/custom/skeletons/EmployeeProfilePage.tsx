"use client";

import { motion } from "framer-motion";

export default function EmployeeProfilePageSkeleton() {
    const shimmer = {
        animate: { opacity: [0.5, 1, 0.5] },
        transition: { duration: 1.2, repeat: Infinity },
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6 gap-6">
            {/* Header Skeleton */}
            <motion.div
                className="w-full max-w-7xl bg-white rounded-2xl p-8 flex justify-between items-center gap-6 shadow-sm"
                {...shimmer}
            >
                <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-2xl bg-gray-300" />
                    <div className="flex flex-col gap-4">
                        <div className="w-48 h-6 bg-gray-300 rounded" />
                        <div className="w-32 h-4 bg-gray-200 rounded" />
                    </div>
                </div>
                <div className="w-32 h-10 bg-gray-300 rounded" />
            </motion.div>

            {/* Main Content Grid Skeleton */}
            <div className="grid grid-cols-3 gap-6 w-full max-w-7xl">
                {/* Left Column */}
                <div className="col-span-2 flex flex-col gap-6">
                    {/* Personal Info Skeleton */}
                    <motion.div className="bg-white rounded-2xl p-6 shadow-sm" {...shimmer}>
                        <div className="grid grid-cols-2 gap-4">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-full h-4 bg-gray-300 rounded" />
                            ))}
                        </div>
                    </motion.div>

                    {/* Emergency Contacts Skeleton */}
                    <motion.div className="bg-white rounded-2xl p-6 shadow-sm" {...shimmer}>
                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-full h-4 bg-gray-300 rounded" />
                            ))}
                        </div>
                        <div className="mt-4 grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-full h-4 bg-gray-300 rounded" />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                    {/* Employment Details Skeleton */}
                    <motion.div className="bg-white rounded-2xl p-6 shadow-sm" {...shimmer}>
                        <div className="flex flex-col gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-full h-4 bg-gray-300 rounded" />
                            ))}
                        </div>
                    </motion.div>

                    {/* Bio Skeleton */}
                    <motion.div className="bg-white rounded-2xl p-6 shadow-sm" {...shimmer}>
                        <div className="w-full h-32 bg-gray-300 rounded" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}