"use client";

import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { FiTrendingUp, FiBarChart2 } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Search from "@/components/custom/Search";
import { usePathname, useRouter } from "next/navigation";
import DepartmentTable from "@/components/custom/SchoolTable";
import DepartmentPageSkeleton from "@/components/custom/skeletons/DepartmentPageSkeleton";
import SchoolTable from "@/components/custom/SchoolTable";
import Link from "next/link";

interface SchoolProps {
    id: string;
    schoolName: string;
    icon: string;
    schoolHead: { user: { firstName: string; lastName: string, profilePictureUrl?: string | null } | null }
    _count: { users: number };
}

export default function Page() {

    const [loading, setLoading] = useState<boolean>(true)

    const router = useRouter()
    const pathname = usePathname()

    const [schools, setSchools] = useState<SchoolProps[] | null>(null)
    const [totalSchools, setTotalSchools] = useState<number>(0)
    const [largestSchool, setLargestSchool] = useState<SchoolProps | null>(null)
    const [avgSize, setAvgSize] = useState<number>(0)


    useEffect(() => {

        async function getDepartmentData() {

            const res = await fetch("http://localhost:5500/api/admin/schools")
            const data = await res.json()

            console.log(data)

            setSchools(data.schools)
            setTotalSchools(data.totalSchools)
            setLargestSchool(data.largestSchool)
            setAvgSize(data.avgSize)

            setLoading(false)

        }

        getDepartmentData()

    }, [])

    useEffect(() => {

        router.replace(pathname)

    }, [])

    if (loading) {
        return (

            <DepartmentPageSkeleton />

        );
    }

    return (
        <div className="w-full">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900">School Management</h1>
                </div>

                {/* ── Top 3 stat cards ── */}
                <div className="grid grid-cols-3 gap-8">

                    {/* Total Departments */}
                    <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex justify-around items-center">

                        <div className="p-4 flex items-center justify-center bg-[#e0e6fc] rounded-xl">
                            <MdOutlineAssignment size={30} color="blue" />
                        </div>

                        <div>

                            <h2 className="text-sm font-semibold text-gray-500 tracking-wide">TOTAL SCHOOLS</h2>
                            <p className="font-bold text-3xl text-gray-900">{totalSchools}</p>

                        </div>

                    </div>

                    {/* Largest Department */}
                    <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex justify-around items-center">

                        <div className="p-4 flex items-center justify-center bg-emerald-100 rounded-xl">
                            <FiTrendingUp size={30} color="#059669" />
                        </div>

                        <div className="">

                            <h2 className="text-sm font-semibold text-gray-500 tracking-wide">LARGEST SCHOOL</h2>
                            <p className="font-bold text-xl text-gray-900">
                                {largestSchool && <span>{largestSchool.schoolName}</span>}
                            </p>
                            {largestSchool && (
                                <p className="text-gray-400 text-sm">{largestSchool._count.users} employees</p>
                            )}

                        </div>

                    </div>

                    {/* Average Department Size */}
                    <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex justify-around items-center">
                        <div className="p-4 flex items-center justify-center bg-amber-100 rounded-xl">
                            <FiBarChart2 size={30} color="#d97706" />
                        </div>

                        <div>

                            <h2 className="text-sm font-semibold text-gray-500 tracking-wide">AVERAGE SCHOOL SIZE</h2>
                            <p className="font-bold text-3xl text-gray-900">{avgSize}</p>

                        </div>

                    </div>

                </div>

                {/* ── Search + Add button ── */}
                <div className="mt-10 flex items-center justify-between">

                    <div className="relative w-80 bg-white rounded-sm">
                        <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Search placeholder="Search by school name" />
                    </div>

                    <Button className="bg-[#135BDD] cursor-pointer hover:bg-[#387dff] transition duration-150 py-6 px-8 rounded-lg shadow-md">
                        <Link href={"/admin/schools/create"} className="flex items-center gap-4">
                            <BsFillPlusCircleFill size={22} />
                            <span className="text-xl font-bold">Add new school</span>
                        </Link>
                    </Button>

                </div>

                <div className="mt-5 overflow-hidden rounded-xl border border-gray-300">

                    {schools && <SchoolTable schools={schools} />}  {/* ← was DepartmentTable */}

                </div>

            </div>
        </div>
    );
}

// <Table className="w-full">

//                         <TableHeader className="bg-gray-50">
//                             <TableRow className="h-16">
//                                 <TableHead className="text-lg font-semibold px-8 py-4">Department</TableHead>
//                                 <TableHead className="text-lg font-semibold px-8 py-4">Head</TableHead>
//                                 <TableHead className="text-lg font-semibold px-8 py-4 text-center">Employees</TableHead>
//                                 <TableHead className="text-right text-lg font-semibold px-8 py-4">Actions</TableHead>
//                             </TableRow>
//                         </TableHeader>

//                         <TableBody className="bg-white">
//                             {
//                                 departments && (

//                                     departments.map((dept: DepartmentProps) => (
//                                         <TableRow key={dept.id} className="h-16">

//                                             {/* Department Name */}
//                                             <TableCell className="px-8 py-6">
//                                                 <div className="flex items-center gap-3">
//                                                     <span className="text-2xl">{dept.icon}</span>
//                                                     <span className="text-base font-semibold text-gray-900">{dept.departmentName}</span>
//                                                 </div>
//                                             </TableCell>

//                                             {/* Head */}
//                                             {/* Head */}
//                                             <TableCell className="px-8 py-6">
//                                                 {dept.departmentHead?.user ? (
//                                                     <div className="flex items-center gap-3">

//                                                         {/* Avatar */}
//                                                         {dept.departmentHead.user.profilePictureUrl ? (
//                                                             <img
//                                                                 src={dept.departmentHead.user.profilePictureUrl}
//                                                                 alt={`${dept.departmentHead.user.firstName} ${dept.departmentHead.user.lastName}`}
//                                                                 className="w-8 h-8 rounded-full object-cover shrink-0"
//                                                             />
//                                                         ) : (
//                                                             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-semibold text-slate-600 shrink-0">
//                                                                 {dept.departmentHead.user.firstName[0]}{dept.departmentHead.user.lastName[0]}  {/* ← fixed */}
//                                                             </div>
//                                                         )}

//                                                         <span className="text-base text-gray-700">
//                                                             {dept.departmentHead.user.firstName} {dept.departmentHead.user.lastName}
//                                                         </span>

//                                                     </div>
//                                                 ) : (
//                                                     <span className="text-gray-400 text-sm italic">Unassigned</span>
//                                                 )}
//                                             </TableCell>

//                                             {/* Employee Count */}
//                                             <TableCell className="px-8 py-6 text-center">
//                                                 <span className="inline-flex items-center gap-1.5 text-base font-medium text-gray-800">
//                                                     <FiUsers size={15} className="text-gray-400" />
//                                                     {dept._count.users}
//                                                 </span>
//                                             </TableCell>

//                                             {/* Actions */}
//                                             <TableCell className="px-8 py-6 text-right">
//                                                 <div className="flex items-center justify-end gap-2">
//                                                     <button className="p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
//                                                         <Pencil size={18} />
//                                                     </button>
//                                                     <button className="p-2 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
//                                                         <Trash2 size={18} />
//                                                     </button>
//                                                 </div>
//                                             </TableCell>

//                                         </TableRow>
//                                     ))

//                                 )

//                             }
//                         </TableBody>

//                     </Table>