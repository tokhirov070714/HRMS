import { motion } from "framer-motion"

const shimmer = {
    initial: { opacity: 0.5 },
    animate: {
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    }
}

export default function SchoolPageSkeleton() {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Header */}
                <div className="mb-8">
                    <motion.div
                        variants={shimmer}
                        initial="initial"
                        animate="animate"
                        className="h-10 w-96 bg-gray-200 rounded mb-2"
                    />
                    <motion.div
                        variants={shimmer}
                        initial="initial"
                        animate="animate"
                        className="h-5 w-72 bg-gray-200 rounded"
                    />
                </div>

                {/* Leadership Section */}
                <div className="grid grid-cols-[320px_1fr] gap-6 mb-10">

                    {/* Photo */}
                    <motion.div
                        variants={shimmer}
                        initial="initial"
                        animate="animate"
                        className="h-85 rounded-2xl bg-gray-200"
                    />

                    {/* Leadership Card */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col">

                        {/* Name */}
                        <motion.div
                            variants={shimmer}
                            initial="initial"
                            animate="animate"
                            className="h-8 w-72 bg-gray-200 rounded mb-3"
                        />

                        {/* Title */}
                        <motion.div
                            variants={shimmer}
                            initial="initial"
                            animate="animate"
                            className="h-6 w-64 bg-gray-200 rounded mb-6"
                        />

                        {/* Contact lines */}
                        <div className="space-y-3 mb-6">
                            <motion.div
                                variants={shimmer}
                                initial="initial"
                                animate="animate"
                                className="h-5 w-80 bg-gray-200 rounded"
                            />
                            <motion.div
                                variants={shimmer}
                                initial="initial"
                                animate="animate"
                                className="h-5 w-56 bg-gray-200 rounded"
                            />
                        </div>

                        {/* Button */}
                        <motion.div
                            variants={shimmer}
                            initial="initial"
                            animate="animate"
                            className="mt-auto h-12 w-full bg-gray-200 rounded"
                        />
                    </div>
                </div>

                {/* Departments Header */}
                <div className="mb-6 flex items-center justify-between">
                    <motion.div
                        variants={shimmer}
                        initial="initial"
                        animate="animate"
                        className="h-8 w-64 bg-gray-200 rounded"
                    />
                    <motion.div
                        variants={shimmer}
                        initial="initial"
                        animate="animate"
                        className="h-10 w-80 bg-gray-200 rounded"
                    />
                </div>

                {/* Department Cards Grid */}
                <div className="grid grid-cols-4 gap-5">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                            key={i}
                            variants={shimmer}
                            initial="initial"
                            animate="animate"
                            className="h-45 bg-gray-200 rounded-xl"
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}