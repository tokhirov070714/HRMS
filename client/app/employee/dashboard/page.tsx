"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import {
    FaUniversity,
    FaMapMarkerAlt,
    FaCheckCircle,
    FaCalendarAlt,
} from "react-icons/fa";
import { FiMail, FiUser } from "react-icons/fi";
import useSession from "@/hooks/useSession";

interface Todo {
    id: string;
    title: string;
    description: string | null;
    status: string;
    completedAt: Date | null;
    createdAt: Date;
}

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    profilePictureUrl: string | null;
    academicPosition: string | null;
    administrativePosition: string | null;
    employeeType: string;
    school: {
        schoolName: string;
    } | null;
    city: string | null;
}

interface Event {

    description: string | null
    id: string
    location: string | null
    startTime: string
    title: string

}

export default function EmployeeDashboardPage() {

    const router = useRouter()
    const [loading, setLoading] = useState(true)

    const [theUser, setTheUser] = useState<User | null>(null)
    const [todos, setTodos] = useState<Todo[]>([])
    const [events, setEvents] = useState<Event[] | null>(null)

    const [calendarDate, setCalendarDate] = useState<Dayjs | null>(dayjs())

    const { user } = useSession()


    useEffect(() => {

        async function fetchDashboardData() {

            if (user) {

                const res = await fetch(`http://localhost:5500/api/employee/dashboard?userId=${user.id}`)
                const data = await res.json()
                console.log(data)
                setTheUser(data.user)
                setTodos(data.todos)
                setEvents(data.events)
                setLoading(false)

            }

        }

        fetchDashboardData()

    }, [user])


    const getPositionDisplay = () => {
        if (!theUser) return "";
        if (theUser?.employeeType === "ACADEMIC") {
            return formatPosition(theUser?.academicPosition);
        } else {
            return formatPosition(theUser?.administrativePosition);
        }
    }

    const formatPosition = (position: string | null | undefined) => {
        if (!position) return "";
        return position
            .split("_")
            .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
            .join(" ");
    }

    const formatEventDate = (iso: string) => {
        const date = new Date(iso);

        return {
            month: date
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase(),
            day: date.getDate(),
            time: date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            }),
        };
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!theUser) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600">Failed to load user data</p>
            </div>
        );
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="w-full p-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Welcome back, {theUser?.firstName}
                </h1>
                <p className="text-gray-500 mt-1 text-lg font-semibold">
                    {formattedDate}
                </p>
            </div>

            {/* Main Grid Layout */}
            <div className="w-full">

                <div className="grid grid-cols-4 gap-6">

                    {/* Profile Card */}
                    <div className="grid grid-cols-[300px_1fr] col-span-3 gap-6 bg-white rounded-2xl shadow-sm p-8">

                        {/* Photo */}
                        <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-sky-300">
                            {theUser?.profilePictureUrl ? (
                                <img
                                    src={theUser?.profilePictureUrl}
                                    alt={`${theUser?.firstName} ${theUser?.lastName}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-36 h-36 rounded-full bg-white/20 flex items-center justify-center text-7xl font-bold text-white">
                                        {theUser?.firstName[0]}
                                        {theUser?.lastName[0]}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Profile Info */}
                        <div className="flex flex-col">

                            {/* Name + Position */}
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    {theUser?.firstName} {theUser?.lastName}
                                </h2>
                                <p className="text-xl text-blue-600 font-semibold">
                                    {getPositionDisplay()}
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-6 text-gray-700 text-base">
                                {theUser?.email && (
                                    <div className="flex items-center gap-3">
                                        <FiMail size={20} className="text-blue-600 shrink-0" />
                                        <span>{theUser?.email}</span>
                                    </div>
                                )}
                                {theUser?.city && (
                                    <div className="flex items-center gap-3">
                                        <FaMapMarkerAlt size={20} className="text-blue-600 shrink-0" />
                                        <span>{theUser?.city}</span>
                                    </div>
                                )}
                                {theUser?.school && (
                                    <div className="flex items-center gap-3">
                                        <FaUniversity size={20} className="text-blue-600 shrink-0" />
                                        <span>{theUser?.school.schoolName}</span>
                                    </div>
                                )}
                            </div>

                            {/* Action Button */}
                            <button
                                onClick={() => router.push("/employee/profile")}
                                className="mt-auto w-full gap-2 py-4 text-base border border-gray-300 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <FiUser size={20} />
                                Edit profile
                            </button>

                        </div>
                    </div>

                    {/* Upcoming Events Card */}
                    <div className="bg-white rounded-2xl shadow-sm px-10 py-6">
                        <h3 className="text-lg font-semibold text-gray-900 my-4">
                            Upcoming Events
                        </h3>

                        {

                            events && (

                                events.map((event: Event) => (

                                    <div className="space-y-4" key={event.id}>

                                        <div className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <span className="text-xs font-semibold text-blue-600">{formatEventDate(event.startTime).month}</span>
                                                <span className="text-2xl font-bold text-gray-900">{formatEventDate(event.startTime).day}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">
                                                    {event.title}
                                                </h4>
                                                <p className="text-sm mb-2 text-gray-500">{event.location} at {formatEventDate(event.startTime).time}</p>
                                            </div>
                                        </div>

                                    </div>

                                ))

                            )

                        }

                    </div>

                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">

                    {/* Calendar Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <FaCalendarAlt className="text-blue-600" size={24} /> {/* slightly bigger icon */}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900"> {/* bigger month/year */}
                                    {calendarDate?.format("MMMM YYYY")}
                                </h3>
                            </div>
                        </div>

                        <div className="py-4 rounded-xl border border-gray-300 bg-white shadow-sm flex justify-center">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar
                                    value={calendarDate}
                                    onChange={(newValue) => setCalendarDate(newValue)}
                                    reduceAnimations
                                    sx={{
                                        width: "100%",
                                        maxWidth: 360,
                                        ".MuiPickersSlideTransition-root": {
                                            minHeight: 240, // a bit taller for spacing
                                        },
                                        ".MuiPickersCalendarHeader-root": {
                                            padding: "0 4px !important",
                                            marginBottom: "4px !important",
                                            minHeight: "32px",
                                            marginTop: "25px",
                                            cursor: "pointer",
                                        },
                                        ".MuiPickersCalendarHeader-label": {
                                            fontSize: "1rem !important",  // bigger month/year font
                                            fontWeight: 700,
                                            "&:hover": {
                                                backgroundColor: "rgba(0,0,0,0.04)",
                                                borderRadius: "4px",
                                            },
                                        },
                                        ".MuiPickersArrowSwitcher-button": {
                                            padding: "4px !important",
                                            minWidth: "32px",
                                            minHeight: "32px",
                                            "& svg": {
                                                fontSize: "1.2rem", // bigger > / < icons
                                            },
                                        },
                                        ".MuiDayCalendar-header span": {
                                            width: "36px",
                                            height: "24px",
                                            fontSize: "0.8rem !important", // bigger weekday labels
                                            fontWeight: 600,
                                            color: "#666",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        },
                                        ".MuiPickersDay-dayWithMargin": {
                                            width: 40,
                                            height: 40,
                                            fontSize: "0.85rem",
                                            minWidth: 40,
                                            minHeight: 40,
                                            padding: 0,
                                        },
                                        ".Mui-selected": {
                                            minWidth: 40,
                                            minHeight: 40,
                                        },
                                        ".MuiPickersDay-today": {
                                            border: "2px solid #1976d2 !important",
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>

                    {/* To-Do List Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                To-Do List
                            </h3>
                        </div>

                        <div className="flex flex-col flex-1 h-full">
                            {/* This div will take up all available space and scroll if needed */}
                            <div className="h-80 overflow-y-auto">
                                <div className="space-y-3">
                                    {todos.length === 0 ? (
                                        <p className="text-gray-500 text-sm text-center py-8">
                                            No tasks at the moment
                                        </p>
                                    ) : (
                                        todos.map((todo) => (
                                            <div
                                                key={todo.id}
                                                className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                                            >
                                                <div className="mt-1">
                                                    {todo.status === "Completed" ? (
                                                        <FaCheckCircle className="text-green-500" size={18} />
                                                    ) : (
                                                        <div className="w-[18px] h-[18px] border-2 border-gray-300 rounded"></div>
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <p
                                                        className={`font-medium ${todo.status === "Completed"
                                                            ? "line-through text-gray-400"
                                                            : "text-gray-900"
                                                            }`}
                                                    >
                                                        {todo.title}
                                                    </p>
                                                    {todo.description && (
                                                        <p className="text-sm text-gray-500 mt-1">
                                                            {todo.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>

                            {/* This button will stick to the bottom using mt-auto */}
                            <button
                                onClick={() => router.push("/employee/todos")}
                                className="w-full mt-4 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                View All Tasks
                                <span>→</span>
                            </button>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
}