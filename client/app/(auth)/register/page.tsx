"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { FaRegUser } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md"
import { MdLockOutline } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import useSession from "@/hooks/useSession"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import VideoBackground from "@/components/custom/VideoBackground";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"



const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    employeeType: z.enum(["FACULTY", "ADMINISTRATIVE_STAFF", "PART_TIME_WORKER"] as const, "Please select an employee type"),
});

type FormData = z.infer<typeof formSchema>;

export default function page() {

    const [visible, setVisible] = useState<boolean>(false)
    const [usernameAvailable, setUsernameAvailable] = useState<boolean>(true)
    const [loadingUsername, setLoadingUsername] = useState<boolean>(false)
    const { authentic, user, loading } = useSession()
    const router = useRouter()

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    useEffect(() => {

        if (!loading && authentic) {

            router.push("/")

        }

    }, [authentic, loading, router])

    async function checkUsername(username: string) {

        setLoadingUsername(true)

        const res = await fetch("http://localhost:5500/api/auth/verifyusername", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username })

        })

        if (res.status === 409) {

            setUsernameAvailable(false)

        } else {

            setUsernameAvailable(true)

        }

        const data = await res.json()

        setLoadingUsername(false)
        console.log(data)

    }

    const onSubmit = async (data: FormData) => {

        const firstName = data.firstName
        const surname = data.lastName
        const username = data.username
        const email = data.email
        const password = data.password
        const employeeType = data.employeeType

        try {

            const res = await fetch("http://localhost:5500/api/auth/register", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ firstName, surname, username, email, password, employeeType })

            })

            const answer = await res.json()

            if (answer.error.toLowerCase() === "email already exists") {

                toast("Email is unavailable")

            }

        }
        catch (e) {

            console.log("Error during data submission: ", e)

        }

    }

    return (

        <VideoBackground videoSrc="/videos/siut_campus.mp4">

            <div className="w-full py-10 flex items-center justify-center relative">

                <div className="absolute z-100 top-0">
                    <Toaster
                        toastOptions={{
                            style: {
                                background: "#ef4444",
                                color: "white",
                                fontSize: "14px",
                                border: "none",
                                marginTop: "12px"
                            }
                        }}
                        position="top-center"
                    />
                </div>

                <motion.div
                    className="max-w-135 bg-white rounded-xl shadow-lg px-8 py-4 md:px-12 md:py-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h1 className="text-3xl text-center font-bold">HR System Registration</h1>
                        <p className="text-lg leading-5.5 text-center mt-2 text-gray-500">
                            Join the institution HR portal. Secure management for staff and faculty.
                        </p>
                    </motion.div>

                    <motion.form
                        className="mt-10"
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.div
                            className="flex flex-col md:flex-row items-center gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            <div className="w-full">
                                <label htmlFor="firstName">First name</label>
                                <Input
                                    {...register("firstName")}
                                    className="border-gray-200 mt-2 p-5 focus:border-0.2"
                                    id="firstName"
                                    placeholder="Alex"
                                />
                                {errors.firstName && (
                                    <motion.p
                                        className="text-red-500 text-sm mt-1"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.firstName.message}
                                    </motion.p>
                                )}
                                {errors.lastName && <div className="h-5"></div>}
                            </div>

                            <div className="w-full">
                                <label htmlFor="lastName">Last name</label>
                                <Input
                                    {...register("lastName")}
                                    className="border-gray-200 mt-2 p-5 focus:border-0.2"
                                    id="lastName"
                                    placeholder="Anderson"
                                />
                                {errors.lastName && (
                                    <motion.p
                                        className="text-red-500 text-sm mt-1"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        {errors.lastName.message}
                                    </motion.p>
                                )}
                                {errors.firstName && <div className="h-5"></div>}
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-5"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            <label htmlFor="username">Username</label>
                            <div className="relative flex">
                                <FaRegUser className="absolute left-3 top-1/2 -translate-y-1 text-muted-foreground" />
                                <Input
                                    {...register("username")}
                                    placeholder="a.anderson"
                                    id="username"
                                    className="border-gray-200 mt-2 p-5 focus:border-0.2 pl-10"
                                    onChange={(e) => checkUsername(e.target.value)}
                                />
                                {loadingUsername && (
                                    <AiOutlineLoading3Quarters className="w-4.5 h-4.5 text-blue-500 animate-spin absolute right-3 top-1/2 -translate-y-1/4" />
                                )}
                            </div>
                            {errors.username && (
                                <motion.p
                                    className="text-red-500 text-sm mt-1"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {errors.username.message}
                                </motion.p>
                            )}
                            {!usernameAvailable && (
                                <motion.p
                                    className="text-red-500 text-sm mt-1"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    Username is unavailable
                                </motion.p>
                            )}
                        </motion.div>

                        <motion.div
                            className="mt-5"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                        >
                            <label htmlFor="employeeType">Employment type</label>
                            <Controller
                                name="employeeType"
                                control={control}
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="w-full mt-2">
                                            <SelectValue placeholder="Select employee type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="FACULTY">Faculty</SelectItem>
                                            <SelectItem value="ADMINISTRATIVE_STAFF">Administrative Staff</SelectItem>
                                            <SelectItem value="PART_TIME_WORKER">Part-Time Worker</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.employeeType && (
                                <motion.p
                                    className="text-red-500 text-sm mt-1"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {errors.employeeType.message}
                                </motion.p>
                            )}
                        </motion.div>

                        <motion.div
                            className="mt-5"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.4 }}
                        >
                            <label htmlFor="email">Email</label>
                            <div className="relative">
                                <MdMailOutline size={20} className="absolute left-3 top-1/2 -translate-y-1/3 text-muted-foreground" />
                                <Input
                                    {...register("email")}
                                    placeholder="alex@gmail.com"
                                    id="email"
                                    className="border-gray-200 mt-2 p-5 focus:border-0.2 pl-10"
                                />
                            </div>
                            {errors.email && (
                                <motion.p
                                    className="text-red-500 text-sm mt-1"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {errors.email.message}
                                </motion.p>
                            )}
                        </motion.div>

                        <motion.div
                            className="mt-5"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                        >
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <MdLockOutline size={20} className="absolute left-3 top-1/2 -translate-y-1/3 text-muted-foreground" />
                                <Input
                                    {...register("password")}
                                    type={visible ? "text" : "password"}
                                    placeholder="your_password"
                                    id="password"
                                    className="border-gray-200 mt-2 p-5 focus:border-0.2 pl-10"
                                />
                                {visible ? (
                                    <AiOutlineEye
                                        onClick={() => setVisible(!visible)}
                                        size={20}
                                        className="absolute right-3 top-1/2 -translate-y-1/3 text-muted-foreground cursor-pointer select-none"
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        onClick={() => setVisible(!visible)}
                                        size={20}
                                        className="absolute right-3 top-1/2 -translate-y-1/3 text-muted-foreground cursor-pointer select-none"
                                    />
                                )}
                            </div>
                            {errors.password && (
                                <motion.p
                                    className="text-red-500 text-sm mt-1"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    {errors.password.message}
                                </motion.p>
                            )}
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-center mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.4 }}
                        >
                            <Button
                                type="submit"
                                className="w-full cursor-pointer py-5 bg-blue-600 text-white text-md hover:bg-blue-700 transition-colors"
                            >
                                Sign up
                            </Button>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>

        </VideoBackground>

    )

}