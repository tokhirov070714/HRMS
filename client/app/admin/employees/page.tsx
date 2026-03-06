"use client";

import Stack from "@mui/material/Stack";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { useMotionValue, animate, motion } from "framer-motion"
import { useEffect, useState } from "react";
import { MdGroups } from "react-icons/md";
import { BsFillPersonPlusFill, BsSearch } from "react-icons/bs";
import { PieChart } from "@mui/x-charts/PieChart";
import { usePathname, useRouter } from "next/navigation"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Search from "@/components/custom/Search";
import EmployeeTable from "@/components/custom/EmployeeTable";
import EmployeePageSkeleton from "@/components/custom/skeletons/EmployeePageSkeleton";
import Link from "next/link";


interface EmployeeStatsProps {

    department: { departmentName: string },
    email: string,
    firstName: string,
    id: string,
    lastName: string,
    profilePictureUrl: string,
    status: string

}

interface DepartmentProps {

    departmentName: string,
    id: string,
    _count: { users: number }

}

export default function Page() {

    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {

        router.replace(pathname)

    }, [])

    const [loading, setLoading] = useState<boolean>(true)

    const [internationalEmployees, setInternationalEmployees] = useState<number>(0)
    const [localEmployees, setLocalEmployees] = useState<number>(0)
    const [employees, setEmployees] = useState<EmployeeStatsProps[] | null>(null)

    const [total, setTotal] = useState<number>(0)
    const [internationalPct, setInternationalPct] = useState<number>(0)
    const [localPct, setLocalPct] = useState<number>(0)

    const [departments, setDepartments] = useState<DepartmentProps[] | null>(null)


    // 🔹 Motion values
    const intlMotion = useMotionValue(0)
    const localMotion = useMotionValue(0)

    const [intlValue, setIntlValue] = useState(0)
    const [localValue, setLocalValue] = useState(0)

    useEffect(() => {

        if (internationalPct === 0 && localPct === 0) return

        const intlControls = animate(intlMotion, internationalPct, {
            duration: 0.3,
            ease: "easeOut",
            onUpdate: (latest) => setIntlValue(Math.round(latest)),
        })

        const localControls = animate(localMotion, localPct, {
            duration: 0.3,
            ease: "easeOut",
            onUpdate: (latest) => setLocalValue(Math.round(latest)),
        })

        return () => {
            intlControls.stop()
            localControls.stop()
        }

    }, [internationalPct, localPct])

    useEffect(() => {

        async function getEmployeesData() {

            const res = await fetch("http://localhost:5500/api/admin/employees")
            const data = await res.json()
            console.log(data)

            setLocalEmployees(data.localEmployeesCount)
            setInternationalEmployees(data.internationalEmployeesCount)
            setEmployees(data.employees)
            setTotal(data.employees.length)
            setDepartments(data.departments)

            setLoading(false)

        }

        getEmployeesData()

    }, [])

    useEffect(() => {

        if (total === 0) return

        setInternationalPct(Math.round((internationalEmployees / total) * 100))
        setLocalPct(Math.round((localEmployees / total) * 100))


    }, [internationalEmployees, localEmployees, total])


    const chartData = departments?.map((d, index) => {

        const r = 80 + (index * 43) % 80
        const g = 80 + (index * 222) % 100
        const b = 80 + (index * 76) % 156

        const hexColor = `#${Math.min(r, 255)
            .toString(16)
            .padStart(2, "0")}${Math.min(g, 255)
                .toString(16)
                .padStart(2, "0")}${Math.min(b, 255).toString(16).padStart(2, "0")}`

        return {
            id: index,
            value: d._count.users,
            label: d.departmentName,
            color: hexColor,
        }
    }) || []


    if (loading && !employees) {

        return (

            <EmployeePageSkeleton />

        )
    }

    if (!loading) {

        return (
            <div className="w-full">

                <div className="max-w-5xl mx-auto">

                    <div className="mb-6">

                        <h1 className="text-2xl font-semibold text-gray-900">Employee Management</h1>

                    </div>

                    <div className="grid grid-cols-3 gap-8">

                        <div className="p-6 col-span-2 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col gap-8">

                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Workforce Split
                            </h2>

                            <Stack
                                direction="row"
                                spacing={14}
                                alignItems="center"
                            // justifyContent="space-around"
                            >

                                <div className="flex items-center justify-between">

                                    <motion.div
                                        transition={{ duration: 1 }}
                                        className="flex flex-col items-center gap-4 px-12"
                                    >
                                        <Gauge
                                            width={220}
                                            height={130}
                                            value={intlValue}
                                            startAngle={-110}
                                            endAngle={110}
                                            sx={{
                                                [`& .${gaugeClasses.valueText}`]: {
                                                    fontSize: 37,
                                                    fontWeight: 900,
                                                    fill: "#2563eb",
                                                },
                                                [`& .${gaugeClasses.valueArc}`]: {
                                                    fill: "#2563eb",
                                                },
                                                [`& .${gaugeClasses.referenceArc}`]: {
                                                    fill: "#dbeafe",
                                                },
                                            }}
                                            text={({ value }) => `${value}%`}
                                        />

                                        <p className="text-xl font-bold text-gray-800">
                                            International
                                        </p>

                                        <p className="text-lg text-gray-400">
                                            {internationalEmployees} of {total} employees
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        transition={{ duration: 1 }}
                                        className="flex flex-col items-center gap-4 px-12"
                                    >
                                        <Gauge
                                            width={220}
                                            height={130}
                                            value={localValue}
                                            startAngle={-110}
                                            endAngle={110}
                                            sx={{
                                                [`& .${gaugeClasses.valueText}`]: {
                                                    fontSize: 37,
                                                    fontWeight: 900,
                                                    fill: "#059669",
                                                },
                                                [`& .${gaugeClasses.valueArc}`]: {
                                                    fill: "#059669",
                                                },
                                                [`& .${gaugeClasses.referenceArc}`]: {
                                                    fill: "#d1fae5",
                                                },
                                            }}
                                            text={({ value }) => `${value}%`}
                                        />

                                        <p className="text-xl font-bold text-gray-800">
                                            Local
                                        </p>

                                        <p className="text-lg text-gray-400">
                                            {localEmployees} of {total} employees
                                        </p>
                                    </motion.div>

                                </div>

                            </Stack>

                        </div>

                        <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-center items-center">

                            <div className="p-4 flex items-center justify-center bg-[#e0e6fc] rounded-xl">

                                <MdGroups size={35} color="blue" />

                            </div>

                            <h1 className="mt-4 text-lg font-semibold">TOTAL HEADCOUNT</h1>

                            <h1 className="font-bold text-5xl mt-5">{employees?.length}</h1>

                        </div>

                    </div>

                    <div className="mt-10 p-6 rounded-xl border border-gray-300 bg-white shadow-sm">

                        <h1 className="font-bold text-2xl mb-6">Department Distribution</h1>

                        {

                            employees && (

                                <div className="flex items-center gap-20">

                                    {/* LEFT — Donut Chart */}
                                    <div className="relative shrink-0 w-85 h-85">

                                        <PieChart
                                            series={[
                                                {
                                                    data: chartData,


                                                    innerRadius: 100,
                                                    outerRadius: 150,
                                                    paddingAngle: 3,
                                                    cornerRadius: 4,
                                                },
                                            ]}
                                            slotProps={{ legend: { hidden: true } as any }}
                                            width={340}
                                            height={340}
                                        />

                                        {/* Center Total */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                            <span className="text-5xl font-extrabold text-gray-900">
                                                {employees.length}
                                            </span>
                                            <span className="text-sm text-gray-400 mt-1">
                                                Employees
                                            </span>
                                        </div>

                                    </div>

                                    {/* RIGHT — Table */}
                                    <div className="flex-1">

                                        <Table className="text-base">

                                            <TableHeader>
                                                <TableRow className="h-14">
                                                    <TableHead className="text-lg font-semibold">Department</TableHead>
                                                    <TableHead className="text-right text-lg font-semibold">Employees</TableHead>
                                                    <TableHead className="text-right text-lg font-semibold">Share</TableHead>
                                                </TableRow>
                                            </TableHeader>

                                            <TableBody>
                                                {chartData.map((row) => (
                                                    <TableRow key={row.label} className="h-16">

                                                        {/* Department */}
                                                        <TableCell className="py-5">
                                                            <div className="flex items-center gap-3">
                                                                <span
                                                                    className="w-3.5 h-3.5 rounded-full shrink-0"
                                                                    style={{ backgroundColor: row.color }}
                                                                />
                                                                <span className="font-semibold text-lg text-gray-800">
                                                                    {row.label}
                                                                </span>
                                                            </div>
                                                        </TableCell>

                                                        {/* Employees */}
                                                        <TableCell className="text-right text-lg font-medium text-gray-800">
                                                            {row.value}
                                                        </TableCell>

                                                        {/* Share */}
                                                        <TableCell className="text-right">
                                                            <span className="text-base font-semibold text-gray-500">
                                                                {Math.round((row.value / employees.length) * 100)}%
                                                            </span>
                                                        </TableCell>

                                                    </TableRow>
                                                ))}
                                            </TableBody>

                                        </Table>


                                    </div>

                                </div>

                            )

                        }

                    </div>

                    <div className="mt-10">

                        <div className="flex items-center justify-between">

                            <div className="relative w-80 bg-white rounded-sm">
                                {/* Search Icon */}
                                <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                                {/* Input */}
                                <Search placeholder="Search by name" />

                            </div>

                            <Button className="bg-[#135BDD] cursor-pointer hover:bg-[#387dff] transition duration-150 py-6 px-8 rounded-lg shadow-md">

                                <Link href={"/admin/employees/create"} className="flex items-center gap-4">

                                    <BsFillPersonPlusFill size={30} />
                                    <span className="text-xl font-bold">Register new employee</span>

                                </Link>

                            </Button>


                        </div>

                        <div className="mt-5">

                            {

                                employees && (

                                    <div className="overflow-hidden rounded-xl border border-gray-300">

                                        <EmployeeTable employees={employees} />

                                    </div>

                                )

                            }

                        </div>

                    </div>

                </div>

            </div>
        )

    }
}

