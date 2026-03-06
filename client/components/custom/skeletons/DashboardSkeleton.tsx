import { Skeleton } from "./Skeleton";

export function DashboardSkeleton() {
    return (
        <div className="w-full">
            <div className="max-w-350 mx-auto">

                {/* Top Cards */}
                <div className="grid grid-cols-3 gap-5">

                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="p-6 rounded-xl border border-gray-300 bg-white shadow-sm flex flex-col gap-4"
                        >
                            <div className="flex justify-between items-center">
                                <Skeleton className="h-5 w-32" />
                                <Skeleton className="h-10 w-10 rounded-lg" />
                            </div>

                            <Skeleton className="h-10 w-20 mt-4" />

                            <div className="border-t border-gray-200 my-2" />

                            <div className="flex justify-between">
                                <Skeleton className="h-5 w-16" />
                                <Skeleton className="h-5 w-16" />
                            </div>
                        </div>
                    ))}

                </div>

                {/* Bottom Grid */}
                <div className="grid grid-cols-2 gap-5 mt-10">

                    {/* Departments */}
                    <div className="border border-gray-300 bg-white shadow-sm flex flex-col rounded-xl">
                        <div className="border-b border-gray-300 p-6">
                            <Skeleton className="h-6 w-40" />
                        </div>

                        <div className="p-6 flex flex-col gap-3">
                            {[1, 2, 3].map((item) => (
                                <Skeleton key={item} className="h-14 w-full rounded-lg" />
                            ))}
                        </div>

                        <div className="px-6 pb-5">
                            <Skeleton className="h-12 w-full rounded-lg" />
                        </div>
                    </div>

                    {/* Employees Table */}
                    <div className="p-6 rounded-xl border border-gray-300 bg-white shadow-sm">
                        <Skeleton className="h-6 w-32 mb-6" />

                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <Skeleton className="h-10 w-10 rounded-full" />
                                    <div className="flex flex-col gap-2">
                                        <Skeleton className="h-4 w-28" />
                                        <Skeleton className="h-3 w-20" />
                                    </div>
                                </div>

                                <Skeleton className="h-6 w-20 rounded-md" />
                            </div>
                        ))}

                        <Skeleton className="h-12 w-full mt-5 rounded-lg" />
                    </div>

                </div>
            </div>
        </div>
    )
}
