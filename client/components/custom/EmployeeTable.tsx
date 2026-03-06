'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2 } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { FiUsers } from "react-icons/fi"

interface EmployeeStatsProps {

    department: { departmentName: string },
    email: string,
    firstName: string,
    id: string,
    lastName: string,
    profilePictureUrl: string,
    status: string

}


export default function EmployeeTable({ employees }: { employees: EmployeeStatsProps[] }) {

    const searchParams = useSearchParams()
    const query = searchParams.get('query') || ""

    const filtered = query.trim()
        ? employees.filter((emp) =>
            `${emp.firstName} ${emp.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase())
        )
        : employees   // ← show all when query is empty

    return (
        <Table className="w-full">
            <TableHeader className="bg-gray-50">
                <TableRow className="h-16">
                    <TableHead className="text-lg font-semibold px-8 py-4">Name</TableHead>
                    <TableHead className="text-lg font-semibold px-8 py-4">Department</TableHead>
                    <TableHead className="text-right text-lg font-semibold px-8 py-4">Actions</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody className="bg-white">
                {filtered.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan={3} className="text-center py-16">
                            <div className="flex flex-col items-center gap-2 text-gray-400">
                                <FiUsers size={40} />
                                <p className="text-lg font-medium text-gray-600">No employees found</p>
                                <p className="text-sm">No results for "<span className="font-semibold text-gray-700">{query}</span>"</p>
                            </div>
                        </TableCell>
                    </TableRow>
                ) : (
                    filtered.map((emp) => (
                        <TableRow key={emp.id} className="relative group hover:bg-gray-50">

                            {/* Name - contains the link */}
                            <TableCell className="px-8 py-6">
                                <Link
                                    href={`/admin/employees/${emp.id}`}
                                    className="absolute inset-0 z-0"
                                >
                                    <span className="sr-only">View {emp.firstName} {emp.lastName}</span>
                                </Link>
                                <div className="flex items-center gap-4 relative z-10 pointer-events-none">
                                    {emp.profilePictureUrl ? (
                                        <img
                                            src={emp.profilePictureUrl}
                                            alt={`${emp.firstName} ${emp.lastName}`}
                                            className="w-10 h-10 rounded-full object-cover shrink-0"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center text-sm font-semibold text-slate-600 shrink-0">
                                            {emp.firstName[0]}{emp.lastName[0]}
                                        </div>
                                    )}
                                    <div>
                                        <p className="text-base font-medium text-gray-900">{emp.firstName} {emp.lastName}</p>
                                        <p className="text-sm text-gray-400">{emp.email}</p>
                                    </div>
                                </div>
                            </TableCell>

                            {/* Department */}
                            <TableCell className="px-8 py-6">
                                <span className="text-base text-gray-700 relative z-10 pointer-events-none">
                                    {emp.department?.departmentName ?? "Not Assigned"}
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