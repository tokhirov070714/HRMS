'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FiUsers } from "react-icons/fi";
import { MdOutlineAssignment } from "react-icons/md";

interface SchoolProps {
    id: string;
    schoolName: string;
    icon: string;
    schoolHead: { user: { firstName: string; lastName: string, profilePictureUrl?: string | null } | null } | null;
    _count: { users: number };
}

export default function SchoolTable({ schools }: { schools: SchoolProps[] }) {

    const searchParams = useSearchParams()
    const query = searchParams.get('query') || ""
    const router = useRouter()

    const filtered = query.trim()
        ? schools.filter((school) =>
            school.schoolName.toLowerCase().includes(query.toLowerCase())
        )
        : schools

    return (

        <Table className="w-full">

            <TableHeader className="bg-gray-50">
                <TableRow className="h-16">
                    <TableHead className="text-lg font-semibold px-8 py-4">School</TableHead>
                    <TableHead className="text-lg font-semibold px-8 py-4">Head</TableHead>
                    <TableHead className="text-lg font-semibold px-8 py-4 text-center">Employees</TableHead>
                    <TableHead className="text-right text-lg font-semibold px-8 py-4">Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody className="bg-white">
                {filtered.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan={4} className="text-center py-16">
                            <div className="flex flex-col items-center gap-2 text-gray-400">
                                <MdOutlineAssignment size={40} />
                                <p className="text-lg font-medium text-gray-600">No schools found</p>
                                <p className="text-sm">No results for "<span className="font-semibold text-gray-700">{query}</span>"</p>
                            </div>
                        </TableCell>
                    </TableRow>
                ) : (
                    filtered.map((school: SchoolProps) => (
                        <TableRow key={school.id} className="h-16 relative group hover:bg-gray-50">

                            {/* School Name - contains the link */}
                            <TableCell className="px-8 py-6">
                                <Link
                                    href={`/admin/schools/${school.id}`}
                                    className="absolute inset-0 z-0"
                                >
                                    <span className="sr-only">View {school.schoolName}</span>
                                </Link>
                                <div className="flex items-center gap-3 relative z-10 pointer-events-none">
                                    <span className="text-2xl">{school.icon}</span>
                                    <span className="text-base font-semibold text-gray-900">{school.schoolName}</span>
                                </div>
                            </TableCell>

                            {/* Head */}
                            <TableCell className="px-8 py-6">
                                <div className="flex items-center gap-3 relative z-10 pointer-events-none">
                                    {school.schoolHead?.user ? (
                                        <>
                                            {school.schoolHead.user.profilePictureUrl ? (
                                                <img
                                                    src={school.schoolHead.user.profilePictureUrl}
                                                    alt={`${school.schoolHead.user.firstName} ${school.schoolHead.user.lastName}`}
                                                    className="w-8 h-8 rounded-full object-cover shrink-0"
                                                />
                                            ) : (
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-semibold text-slate-600 shrink-0">
                                                    {school.schoolHead.user.firstName[0]}{school.schoolHead.user.lastName[0]}
                                                </div>
                                            )}
                                            <span className="text-base text-gray-700">
                                                {school.schoolHead.user.firstName} {school.schoolHead.user.lastName}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-gray-400 text-sm italic">Unassigned</span>
                                    )}
                                </div>
                            </TableCell>

                            {/* Employee Count */}
                            <TableCell className="px-8 py-6 text-center">
                                <span className="inline-flex items-center gap-1.5 text-base font-medium text-gray-800 relative z-10 pointer-events-none">
                                    <FiUsers size={15} className="text-gray-400" />
                                    {school._count.users}
                                </span>
                            </TableCell>

                            {/* Actions */}
                            <TableCell className="px-8 py-6 text-right">
                                <div className="flex items-center justify-end gap-2 relative z-20">
                                    <button
                                        className="p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors pointer-events-auto"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // handle edit
                                        }}
                                    >
                                        <Pencil size={18} />
                                    </button>
                                    <button
                                        className="p-2 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors pointer-events-auto"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // handle delete
                                        }}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </TableCell>

                        </TableRow>
                    ))
                )}
            </TableBody>

        </Table>

    )
}