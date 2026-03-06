"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import {
    HiOutlineBars3,
    HiOutlineHome,
    HiOutlineCog6Tooth
} from "react-icons/hi2"
import { FiUser } from "react-icons/fi";


import { MdOutlineAssignment } from "react-icons/md"
import useSession from "@/hooks/useSession";
import Link from "next/link";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const [open, setOpen] = useState(true)
    const [currentUrl, setCurrentUrl] = useState("")
    const pathname = usePathname()
    const { user } = useSession()


    useEffect(() => {

        console.log(pathname.split("/")[2])
        setCurrentUrl(pathname.split("/")[2])


    }, [pathname])

    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar */}
            <aside
                className={`bg-white shadow-md border-r flex flex-col transition-all duration-300 relative
                ${open ? "w-64" : "w-16"}`}
            >

                {/* Top */}
                <div className="h-16 border-b flex items-center px-3">

                    {/* Burger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition cursor-pointer"
                    >
                        <HiOutlineBars3 size={20} />
                    </button>

                    {/* Brand */}
                    {open && (

                        <div className="flex flex-col leading-tight ml-2">
                            <h1 className="text-sm font-bold">Admin</h1>
                            <p className="text-xs text-gray-500">Portal</p>
                        </div>

                    )}

                </div>


                {/* Nav */}
                <nav className="flex-1 px-2 py-5 space-y-2 text-sm">

                    {[
                        { label: "Dashboard", icon: HiOutlineHome },
                        { label: "Profile", icon: FiUser },
                        { label: "Todos", icon: MdOutlineAssignment },
                        { label: "Settings", icon: HiOutlineCog6Tooth },
                    ].map(item => {
                        const Icon = item.icon

                        return (
                            <Link
                                href={`/employee/${item.label.toLowerCase()}`}
                                key={item.label}
                                className={`
                                        p-3
                                        rounded-lg
                                        cursor-pointer
                                        flex items-center gap-3
                                        transition-colors
                                        ${item.label.toLowerCase() === currentUrl
                                        ? "bg-blue-100 text-[#135BDD]"
                                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    }
                                    `}
                            >
                                <Icon size={20} />

                                {open && (
                                    <span className="whitespace-nowrap text-base">
                                        {item.label}
                                    </span>
                                )}
                            </Link>
                        )
                    })}


                </nav>

                {/* Bottom */}
                {open && (
                    <div className="sticky bottom-0 left-0 p-4 border-t text-sm text-gray-600">
                        Logged in as:<br />
                        <span className="font-medium">username_placeholder</span>
                    </div>
                )}
            </aside>

            {/* Main Area */}
            <div className="flex-1 flex flex-col">

                {/* Header */}
                <header className="h-16 bg-white shadow-sm border-b flex items-center justify-between px-6">

                    <div>
                        <h1 className="text-lg font-semibold">Admin Panel</h1>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-[#1b69fb] text-white flex items-center justify-center text-base font-semibold">
                        {user?.username[0].toUpperCase()}
                    </div>

                </header>

                {/* Content */}
                <main className="flex-1 p-6">
                    {children}
                </main>

            </div>
        </div>
    );
}
