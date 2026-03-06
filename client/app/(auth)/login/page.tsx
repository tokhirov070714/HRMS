"use client"

import VideoBackground from "@/components/custom/VideoBackground"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa6"
import { MdLockOutline } from "react-icons/md"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

const formSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});



type FormData = z.infer<typeof formSchema>;

export default function page() {

    const [visible, setVisible] = useState<boolean>(false)
    const [theUsername, setTheUsername] = useState<string>("")
    const [thePassword, setThePassword] = useState<string>("")
    const router = useRouter()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (data: FormData) => {

        const username = data.username
        const password = data.password

        try {

            const res = await fetch("http://localhost:5500/api/auth/login", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ username, password })

            })

            if (res.status === 401) {

                toast("Invalid credentials")
                reset()

                return

            }

            else if (res.status === 200) {

                router.push("/")

            }

        }
        catch (e) {

            console.log("Error during data submission: ", e)

        }

    }


    return (

        <VideoBackground videoSrc="/videos/siut_campus.mp4">

            <div className="w-full mt-10 flex items-center justify-center relative">

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
                    className="w-135 bg-white rounded-xl shadow-lg px-8 py-10 md:px-12 md:py-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h1 className="text-3xl text-center font-bold">Welcome Back</h1>
                        <p className="text-lg leading-5.5 text-center mt-2 text-gray-500">
                            HR Management Portal Access
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
                            className="mt-5"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.4 }}
                        >
                            <label htmlFor="username">Username</label>
                            <div className="relative flex">
                                <FaRegUser className="absolute left-3 top-1/2 -translate-y-1 text-muted-foreground" />
                                <Input
                                    placeholder="a.anderson"
                                    {...register("username")}
                                    id="username"
                                    className="border-gray-200 mt-2 p-5 focus:border-0.2 pl-10"
                                />
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