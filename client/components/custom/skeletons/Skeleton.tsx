"use client"

import { motion } from "framer-motion"

export function Skeleton({ className }: { className?: string }) {
    return (
        <motion.div
            className={`relative overflow-hidden bg-gray-200 rounded-md ${className}`}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
            }}
        />
    )
}
