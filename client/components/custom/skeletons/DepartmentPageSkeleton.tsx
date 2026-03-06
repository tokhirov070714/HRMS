"use client"

import { motion } from "framer-motion"

export default function DepartmentPageSkeleton() {
    return (
        <div className="w-full">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <motion.div
                    className="h-8 w-64 bg-gray-200 rounded mb-6"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                />

                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-8 mb-10">
                    {[1, 2, 3].map(i => (
                        <motion.div
                            key={i}
                            className="p-6 rounded-xl border bg-white shadow-sm flex items-center gap-4"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                        >
                            <div className="w-14 h-14 bg-gray-200 rounded-xl" />
                            <div className="flex-1 space-y-2">
                                <div className="h-3 bg-gray-200 rounded w-32" />
                                <div className="h-6 bg-gray-200 rounded w-20" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Search + Button */}
                <div className="flex justify-between items-center mb-6">
                    <motion.div
                        className="h-10 w-80 bg-gray-200 rounded"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                    />
                    <motion.div
                        className="h-12 w-56 bg-gray-200 rounded-lg"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                    />
                </div>

                {/* Table skeleton */}
                <div className="rounded-xl border overflow-hidden">
                    {[1, 2, 3, 4].map(i => (
                        <motion.div
                            key={i}
                            className="h-16 bg-gray-200 border-b"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}
