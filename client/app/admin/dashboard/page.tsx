"use client"
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from 'react';

import { BiUser } from "react-icons/bi";
import { RiBuildingFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import Image from 'next/image';
import { DashboardSkeleton } from '@/components/custom/skeletons/DashboardSkeleton';
import Link from 'next/link';


interface SchoolProps {
    id: string,
    schoolName: string,
    icon: any
}

interface EmployeeProps {

    department?: { departmentName?: string },
    firstName: string,
    id: string,
    lastName: string,
    administrativePosition: string,
    academicPosition: string,
    profilePictureUrl: string | null,
    status: string
    isLocal: boolean

}


export default function page() {

    const [calendarDate, setCalendarDate] = useState<Dayjs | null>(dayjs())

    const [isClient, setIsClient] = useState<boolean>(false)

    const [loadingDashboard, setLoadingDashboard] = useState<boolean>(true)

    const [localEmployees, setLocalEmployees] = useState<EmployeeProps[] | null>(null)

    const [schools, setSchools] = useState<SchoolProps[] | null>(null)
    const [schoolsCount, setSchoolsCount] = useState<number>(0)

    const [employees, setEmployees] = useState<EmployeeProps[] | null>(null)

    const [internationalEmployees, setInternationalEmployees] = useState<EmployeeProps[] | null>(null)

    useEffect(() => {

        setIsClient(true)


        async function getDashboardData() {
            // setLoadingDashboard(true)


            const res = await fetch("http://localhost:5500/api/admin/dashboard")
            const data = await res.json()

            console.log(data)
            setSchools(data.schools)
            setEmployees(data.employees)
            setInternationalEmployees(data.internationalEmployees)
            setLocalEmployees(data.localEmployees)
            setSchoolsCount(data.schoolsCount)

            setLoadingDashboard(false)
        }

        getDashboardData()

    }, [])

    if (loadingDashboard) {

        return <DashboardSkeleton />

    }

    return (

        <div className="w-full">

            <div className="max-w-350 mx-auto">

                <div className="grid grid-cols-3 gap-5">

                    <div className="p-6 rounded-xl border border-gray-300 bg-white shadow-sm flex flex-col justify-between">

                        {/* Header */}
                        <div className='flex items-center justify-between'>
                            <p className='text-lg text-gray-500'>Total Employees</p>

                            <div className='p-3 bg-[#E6F3FF] rounded-lg'>
                                <BiUser size={30} color='blue' />
                            </div>
                        </div>

                        {/* Total */}
                        <h1 className='text-4xl font-bold mt-4'>
                            {

                                (internationalEmployees && localEmployees) ? (

                                    <span>{internationalEmployees.length + localEmployees.length}</span>

                                ) : <span>0</span>

                            }
                        </h1>

                        {/* Divider */}
                        <div className="border-t border-gray-200 my-4" />

                        {/* Split Section */}
                        <div className="flex justify-between text-sm">

                            <div className="flex flex-col">
                                <span className="text-gray-500">International</span>

                                {

                                    internationalEmployees ?
                                        <span className="text-lg font-semibold text-blue-600">{internationalEmployees.length}</span> :
                                        <span className="text-lg font-semibold text-blue-600">0</span>

                                }

                            </div>

                            <div className="flex flex-col text-right">
                                <span className="text-gray-500">Local</span>

                                {

                                    localEmployees ?
                                        <span className="text-lg font-semibold text-gray-800">{localEmployees.length}</span> :
                                        <span className="text-lg font-semibold text-gray-800">0</span>

                                }

                            </div>

                        </div>

                    </div>


                    <div className="p-6 rounded-xl border border-gray-300 bg-white shadow-sm flex flex-col justify-between">

                        <div className='flex items-center justify-between'>
                            <p className='text-lg text-gray-500'>Total Schools</p>

                            <div className='p-3 bg-[#FFF4E6] rounded-lg'>
                                <RiBuildingFill size={30} color='orange' />
                            </div>
                        </div>

                        <h1 className='text-4xl font-bold mt-4'>

                            {schoolsCount}

                        </h1>

                        <p className="text-sm text-gray-500 mt-2">
                            Active academic & administrative units
                        </p>

                    </div>


                    {

                        !isClient ?
                            (
                                <div className="rounded-xl border border-gray-300 bg-white shadow-sm">
                                    <div className="h-55 flex items-center justify-center">
                                        <div className="text-gray-400">Loading calendar...</div>
                                    </div>
                                </div>
                            ) :
                            <div>

                                <div className="py-4 rounded-xl border border-gray-300 bg-white shadow-sm">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateCalendar
                                            value={calendarDate}
                                            onChange={(newValue) => setCalendarDate(newValue)}
                                            reduceAnimations
                                            // shouldDisableDate={() => true}

                                            sx={{
                                                width: '260px',
                                                height: '200px',

                                                // Overall container adjustments
                                                '& .MuiPickersSlideTransition-root': {
                                                    minHeight: '140px',
                                                },

                                                // Calendar header - more compact
                                                '& .MuiPickersCalendarHeader-root': {
                                                    padding: '0 2px !important',
                                                    marginBottom: '0 !important',
                                                    minHeight: '28px',
                                                    marginTop: '-4px',
                                                    cursor: 'pointer',
                                                },
                                                '& .MuiPickersCalendarHeader-label': {
                                                    fontSize: '0.8rem !important',
                                                    fontWeight: 600,
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                                        borderRadius: '4px',
                                                    },
                                                },

                                                // Month switcher buttons - smaller
                                                '& .MuiPickersArrowSwitcher-button': {
                                                    padding: '2px !important',
                                                    minWidth: '26px',
                                                    minHeight: '26px',
                                                    '& svg': {
                                                        fontSize: '0.85rem',
                                                    },
                                                },

                                                // Day names header row - tighter
                                                '& .MuiDayCalendar-header': {
                                                    gap: '0',
                                                    justifyContent: 'space-between',
                                                    margin: '2px 0 0 0 !important',
                                                },
                                                '& .MuiDayCalendar-header span': {
                                                    width: '30px',
                                                    height: '20px',
                                                    fontSize: '0.65rem !important',
                                                    fontWeight: 600,
                                                    color: '#666',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                },

                                                // Calendar grid rows - tighter spacing
                                                '& .MuiDayCalendar-weekContainer': {
                                                    margin: '0 !important',
                                                    justifyContent: 'space-between',
                                                },

                                                // Individual day cells - smaller to fit
                                                '& .MuiPickersDay-dayWithMargin': {
                                                    margin: '0 !important',
                                                    width: '30px !important',
                                                    height: '30px !important',
                                                    fontSize: '0.7rem !important',
                                                    minWidth: '30px',
                                                    minHeight: '30px',
                                                    padding: '0',
                                                },

                                                // Selected date styling
                                                '& .Mui-selected': {
                                                    padding: '0 !important',
                                                    minWidth: '30px !important',
                                                    minHeight: '30px !important',
                                                },

                                                // Today's date
                                                '& .MuiPickersDay-today': {
                                                    border: '1px solid #1976d2 !important',
                                                    backgroundColor: 'transparent',
                                                },

                                                // =============================================
                                                // FIXED YEAR VIEW - prevent zoom
                                                // =============================================

                                                '& .MuiYearCalendar-root': {
                                                    width: '260px !important',
                                                    maxWidth: '260px !important',
                                                    maxHeight: '160px !important',
                                                    height: '160px !important',
                                                    overflowY: 'auto',
                                                    padding: '0 !important',
                                                    margin: '0 !important',
                                                },

                                                '& .MuiPickersYear-yearButton': {
                                                    width: '56px !important',
                                                    height: '28px !important',
                                                    fontSize: '0.7rem !important',
                                                    margin: '2px !important',
                                                    padding: '0 !important',
                                                },

                                                // =============================================
                                                // FIXED MONTH VIEW - prevent zoom
                                                // =============================================

                                                '& .MuiMonthCalendar-root': {
                                                    width: '260px !important',
                                                    maxWidth: '260px !important',
                                                    maxHeight: '160px !important',
                                                    height: '160px !important',
                                                    padding: '0 !important',
                                                    margin: '0 !important',
                                                },

                                                '& .MuiPickersMonth-monthButton': {
                                                    width: '68px !important',
                                                    height: '28px !important',
                                                    fontSize: '0.7rem !important',
                                                    margin: '2px !important',
                                                    padding: '0 !important',
                                                },

                                            }}
                                        />
                                    </LocalizationProvider>
                                </div>

                            </div>
                    }


                </div>

                <div className='grid grid-cols-2 gap-5'>

                    <div className='mt-10 border border-gray-300 bg-white shadow-sm flex flex-col rounded-xl'>

                        <div className='border-b border-gray-300 p-6'>

                            <h1 className='text-xl font-bold'>Schools</h1>  {/* ← was Departments */}

                        </div>

                        <div className='p-6 flex flex-col gap-3'>

                            {

                                schools?.map((school: SchoolProps) => (

                                    <Link href={`/admin/schools/${school.id}`} className='p-3 flex items-center justify-between rounded-lg bg-[#2268eb] hover:bg-[#2b71f5] transition duration-100 cursor-pointer' key={school.id}>

                                        <div className='flex items-center gap-3 text-white'>

                                            <div className='w-10 h-10 p-1 bg-gray-200 flex items-center justify-center rounded-lg'>

                                                {school.icon}

                                            </div>

                                            <div>

                                                <h1 className='text-base font-bold'>{school.schoolName}</h1>

                                            </div>

                                        </div>

                                        <MdKeyboardArrowRight size={22} color='white' />

                                    </Link>

                                ))

                            }

                        </div>

                        <div className='px-6 pb-5 w-full'>

                            <Link href={"/admin/schools"}>   {/* ← was /admin/departments */}
                                <Button className='w-full py-5 bg-[#135BEC] hover:bg-[#2768e9] text-base font-bold cursor-pointer'>
                                    Manage Schools   {/* ← was Manage Departments */}
                                </Button>
                            </Link>

                        </div>

                    </div>


                    {/* emp table */}

                    <div className='mt-10 p-6 rounded-xl border border-gray-300 bg-white shadow-sm'>

                        <div className=''>

                            <h2 className="text-xl font-bold mb-4 px-1.5">Employees</h2>

                        </div>

                        <div>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Employee</TableHead>
                                        <TableHead>Department</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>

                                    {

                                        employees?.map((employee: EmployeeProps) => (

                                            <TableRow key={employee.id} className="h-16 relative group hover:bg-gray-50">

                                                {/* Employee Name - contains the link */}
                                                <TableCell className="px-2 py-6">
                                                    <Link
                                                        href={`/admin/employees/${employee.id}`}
                                                        className="absolute inset-0 z-0"
                                                    >
                                                        <span className="sr-only">View {employee.firstName} {employee.lastName}</span>
                                                    </Link>
                                                    <div className="flex items-center gap-3 relative z-10 pointer-events-none">
                                                        {employee.profilePictureUrl ? (
                                                            <Image
                                                                src={employee.profilePictureUrl}
                                                                alt={`${employee.firstName} ${employee.lastName}`}
                                                                className="w-10 h-10 rounded-full object-cover shrink-0"
                                                                width={40}
                                                                height={40}
                                                            />
                                                        ) : (
                                                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold shrink-0">
                                                                {employee.firstName[0]}{employee.lastName[0]}
                                                            </div>
                                                        )}
                                                        <div>
                                                            <p className="font-medium">
                                                                <span>{employee.firstName}</span> <span>{employee.lastName}</span>
                                                            </p>
                                                            <p className="text-sm text-gray-500">Senior Engineer</p>
                                                        </div>
                                                    </div>
                                                </TableCell>

                                                {/* Department */}
                                                <TableCell className="px-8 py-6">
                                                    <div className="relative z-10 pointer-events-none">
                                                        {employee.department?.departmentName || "Not Assigned"}
                                                    </div>
                                                </TableCell>

                                                {/* Status */}
                                                <TableCell className="px-8 py-6 text-center">
                                                    <span
                                                        className={`px-2 py-1 text-xs rounded-md relative z-10 pointer-events-none ${employee.status === "ACTIVE"
                                                            ? "text-green-700 bg-green-100"
                                                            : employee.status === "ON_LEAVE"
                                                                ? "text-yellow-700 bg-yellow-100"
                                                                : "text-gray-500 bg-gray-100"
                                                            }`}
                                                    >
                                                        {employee.status === "ACTIVE"
                                                            ? "Active"
                                                            : employee.status === "ON_LEAVE"
                                                                ? "On Leave"
                                                                : employee.status}
                                                    </span>
                                                </TableCell>

                                            </TableRow>

                                        ))

                                    }

                                </TableBody>
                            </Table>

                            <div className='pb-5 mt-7 w-full'>

                                <Link className='w-full flex items-center justify-center' href={"/admin/employees"}>
                                    <Button className='w-full py-5 bg-[#135BEC] hover:bg-[#2768e9] text-base font-bold cursor-pointer'>
                                        Manage Employees
                                    </Button>
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}