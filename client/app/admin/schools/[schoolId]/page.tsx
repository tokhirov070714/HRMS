"use client";

import { useEffect, useState } from "react";
import { FiDownload, FiEdit2, FiMail, FiPhone, FiMapPin, FiCalendar, FiUser, FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import SchoolPageSkeleton from "@/components/custom/skeletons/SchoolPageSkeleton";
import Link from "next/link";

interface DepartmentCardProps {
    departmentName: string;
    icon: string;
    description: string | null;
    _count: { users: number };
}

interface SchoolHeadData {
    user: {
        id: string,
        profilePictureUrl: string | null;
        firstName: string;
        lastName: string;
        email: string;
        phoneLocal: string | null,
        phoneForeign: string | null
    };
}

interface SchoolData {
    schoolName: { schoolName: string };
    schoolHead: SchoolHeadData | null;
    departments: DepartmentCardProps[];
}


function DepartmentCard({ departmentName, icon, description, _count }: DepartmentCardProps) {
    return (
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">{departmentName}</h3>
                </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-4 line-clamp-2 min-h-10">
                {description || "No description available"}
            </p>

            {/* Staff Count */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">Staff Members</span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                    <FiUser size={14} />
                    {_count.users}
                </span>
            </div>
        </div>
    );
}

export default function page() {

    const params = useParams();
    const schoolId = params.schoolId as string

    const [loading, setLoading] = useState(true);
    const [schoolData, setSchoolData] = useState<SchoolData | null>(null)

    const [searchQuery, setSearchQuery] = useState("");

    const filteredDepartments = schoolData?.departments.filter((dept) =>
        dept.departmentName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {

        async function getDepartments() {

            const res = await fetch(`http://localhost:5500/api/admin/schools/${schoolId}`)
            const data = await res.json()

            console.log(data)
            setSchoolData(data)
            setLoading(false)

        }

        getDepartments()

    }, [])

    if (loading || !schoolData) {
        return (
            <SchoolPageSkeleton />
        );
    }

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-1">
                                {schoolData.schoolName.schoolName}
                            </h1>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="gap-2 px-5 py-2.5">
                                <FiEdit2 size={16} />
                                Edit School
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Leadership Section */}
                {schoolData.schoolHead ? (
                    <div className="grid grid-cols-[320px_1fr] gap-6 mb-10">

                        {/* Photo */}
                        <div className="relative h-85 bg-linear-to-br from-blue-400 to-sky-300 rounded-2xl overflow-hidden">
                            {schoolData.schoolHead.user.profilePictureUrl ? (
                                <img
                                    src={schoolData.schoolHead.user.profilePictureUrl}
                                    alt={`${schoolData.schoolHead.user.firstName} ${schoolData.schoolHead.user.lastName}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-36 h-36 rounded-full bg-white/20 flex items-center justify-center text-7xl font-bold text-white">
                                        {schoolData.schoolHead.user.firstName[0]}
                                        {schoolData.schoolHead.user.lastName[0]}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Leadership Card */}
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col">

                            {/* Name + Title */}
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    Dr. {schoolData.schoolHead.user.firstName} {schoolData.schoolHead.user.lastName}
                                </h2>

                                <p className="text-xl text-blue-600 font-semibold">
                                    Dean of {schoolData.schoolName.schoolName}
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-6">

                                <div className="flex items-center gap-3 text-gray-700 text-base">
                                    <FiMail size={18} className="text-blue-600 shrink-0" />
                                    <span>{schoolData.schoolHead.user.email}</span>
                                </div>

                                {schoolData.schoolHead.user.phoneLocal && (
                                    <div className="flex items-center gap-3 text-gray-700 text-base">
                                        <FiPhone size={18} className="text-blue-600 shrink-0" />
                                        <span><span className="font-bold">Local phone number </span>{schoolData.schoolHead.user.phoneLocal}</span>
                                    </div>
                                )}

                                {schoolData.schoolHead.user.phoneForeign && (
                                    <div className="flex items-center gap-3 text-gray-700 text-base">
                                        <FiPhone size={18} className="text-blue-600 shrink-0" />
                                        <span><span className="font-bold">Foreign phone number </span>{schoolData.schoolHead.user.phoneForeign}</span>
                                    </div>
                                )}

                            </div>

                            {/* Action Button (only profile) */}
                            <Link href={`/admin/employees/${schoolData.schoolHead.user.id}`}>

                                <div className="mt-10">
                                    <Button
                                        variant="outline"
                                        className="w-full gap-2 py-6 text-base border-gray-300 cursor-pointer"
                                    >
                                        <FiUser size={18} />
                                        View Profile
                                    </Button>
                                </div>

                            </Link>

                        </div>
                    </div>
                ) : (
                    <div className="mb-10 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚠️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                No School Head Assigned
                            </h3>
                            <p className="text-gray-500">
                                This school currently has no dean assigned.
                            </p>
                        </div>
                    </div>
                )}

                {/* Departments Section */}
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                        <h2 className="text-3xl font-bold text-gray-900">Departments</h2>
                        <span className="text-gray-400 text-lg">{schoolData.departments.length} Departments</span>
                    </div>
                    <div className="relative w-80">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                            placeholder="Search departments..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 py-2 border-gray-300 bg-white"
                        />
                    </div>
                </div>

                {/* Department Cards Grid */}
                <div className="grid grid-cols-4 gap-5">
                    {filteredDepartments?.map((dept, i) => (
                        <DepartmentCard key={i} {...dept} />
                    ))}

                    {/* Add New Department Card */}
                    <Link href={`/admin/schools/${schoolId}/create`} className="p-6 bg-white rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer flex flex-col items-center justify-center min-h-45">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                            <span className="text-2xl text-gray-400">+</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-700">Add Department</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}