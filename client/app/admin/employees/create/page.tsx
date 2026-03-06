"use client"

import { Button } from "@/components/ui/button";
import { FiLock, FiBriefcase, FiPhone } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";

const formSchema = z.object({
    // Authentication
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["ADMIN", "EMPLOYEE", "SCHOOL_HEAD"] as const, "Please select a role"),
    isActive: z.boolean(),

    // Personal Information
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phoneLocal: z.string().optional(),
    phoneForeign: z.string().optional(),
    dateOfBirth: z.string().optional(),
    isLocal: z.boolean(),
    localAddress: z.string().optional(),
    foreignAddress: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),

    // Employment Details
    employeeType: z.enum(["ACADEMIC", "ADMINISTRATIVE_STAFF"] as const, "Please select employee type"),
    status: z.enum(["ACTIVE", "ON_LEAVE", "TERMINATED", "RETIRED"] as const, "Please select status"),
    schoolId: z.string().min(1, "Please select a school"),
    departmentId: z.string().min(1, "Please select a department"),
    academicPosition: z.enum(["LECTURER", "ASSISTANT_PROFESSOR", "ASSOCIATE_PROFESSOR", "PROFESSOR", ""] as const, "Please select academic position"),
    administrativePosition: z.enum(["TECHNICIAN", "CLEANER", "RECRUITER", "RECEPTIONIST", ""] as const, "Please administrative position"),
    baseSalary: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Salary must be a positive number"),

    // Emergency Contact
    emergencyContactName: z.string().optional(),
    emergencyRelationship: z.string().optional(),
    emergencyPhone: z.string().optional(),
    emergencyEmail: z.string().email("Invalid email").optional().or(z.literal("")),
});

interface SchoolNamesProps {

    id: string,
    schoolName: string

}

interface DepartmentNamesProps {

    id: string,
    departmentName: string

}

type FormData = z.infer<typeof formSchema>;

export default function Page() {

    const [usernameAvailable, setUsernameAvailable] = useState<boolean>(true)
    const [loadingUsername, setLoadingUsername] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const [mounted, setMounted] = useState(false)

    const [isLocal, setIsLocal] = useState<boolean>(true)
    const [employeeType, setEmployeeType] = useState<string>("ACADEMIC")
    const [employeeTypeSelected, setEmployeeTypeSelected] = useState<boolean>(false)

    const [schools, setSchools] = useState<SchoolNamesProps[] | null>(null)
    const [schoolSelected, setSchoolSelected] = useState<boolean>(false)

    const [departments, setDepartments] = useState<DepartmentNamesProps[] | null>(null)

    const [visible, setVisible] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            isActive: true,
            isLocal: true,
            role: "EMPLOYEE",
            status: "ACTIVE",
        }
    });

    async function checkUsername(username: string) {
        if (username.length < 3) return;

        setLoadingUsername(true);

        try {
            const res = await fetch("http://localhost:5500/api/auth/verifyusername", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username })
            });

            setUsernameAvailable(res.status !== 409);
        } catch (error) {
            console.error("Error checking username:", error);
        } finally {
            setLoadingUsername(false);
        }
    }

    async function onSubmit(data: FormData) {
        console.log("Form data:", data);


    }

    async function getDepartmentNames(schoolId: string) {

        // console.log("HEEEEy")

        const res = await fetch(`http://localhost:5500/api/admin/${schoolId}/departments/names`)
        const data = await res.json()
        // console.log(data)
        setDepartments(data)

    }

    useEffect(() => {

        setMounted(true);

    }, []);

    useEffect(() => {

        async function getSchoolNames() {

            const res = await fetch("http://localhost:5500/api/admin/schools/names")
            const data = await res.json()

            setSchools(data)

        }

        getSchoolNames()

    }, [])

    useEffect(() => {

        console.log(employeeType)

    }, [employeeType])


    if (!mounted) {
        return null
    }

    return (
        <div className="w-full">
            <div className="max-w-5xl mx-auto px-6 py-8">

                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Employee</h1>
                        <p className="text-gray-500">Fill out the information below to register a new staff member into the system.</p>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-8">

                    {/* 1. Authentication */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-blue-600 rounded-full" />
                            <FiLock className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-gray-900">1. Authentication</h2>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-6">
                            <div>
                                <Label className="text-sm font-medium text-gray-700 mb-2">Username *</Label>
                                <div className="relative">
                                    <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <Input
                                        {...register("username")}
                                        placeholder="a.anderson"
                                        className={`pl-10 ${errors.username ? 'border-red-500' : ''} ${!usernameAvailable ? 'border-red-500' : ''}`}
                                        onChange={(e) => checkUsername(e.target.value)}
                                    />
                                    {loadingUsername && (
                                        <AiOutlineLoading3Quarters className="w-4 h-4 text-blue-500 animate-spin absolute right-3 top-1/2 -translate-y-1/2" />
                                    )}
                                </div>
                                {errors.username && <p className="text-xs text-red-500 mt-1">{errors.username.message}</p>}
                                {!usernameAvailable && <p className="text-xs text-red-500 mt-1">Username is already taken</p>}
                            </div>

                            <div>
                                <Label className="text-sm font-medium text-gray-700 mb-2">Password *</Label>
                                <div className="relative">
                                    <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <Input
                                        {...register("password")}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? (
                                            <AiOutlineEye
                                                onClick={() => setVisible(!visible)}
                                                size={20}
                                            // className="absolute right-3 top-1/2 -translate-y-1/3 text-muted-foreground cursor-pointer select-none"
                                            />
                                        ) : (
                                            <AiOutlineEyeInvisible
                                                onClick={() => setVisible(!visible)}
                                                size={20}
                                            // className="absolute right-3 top-1/2 -translate-y-1/3 text-muted-foreground cursor-pointer select-none"
                                            />
                                        )}
                                    </button>
                                </div>
                                {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
                            </div>

                            <div>
                                <Label className="text-sm font-medium text-gray-700 mb-2">User Role *</Label>
                                <Controller
                                    name="role"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className={errors.role ? 'border-red-500' : ''}>
                                                <SelectValue placeholder="Select Role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="ADMIN">Admin</SelectItem>
                                                <SelectItem value="EMPLOYEE">Employee</SelectItem>
                                                <SelectItem value="SCHOOL_HEAD">School Head</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.role && <p className="text-xs text-red-500 mt-1">{errors.role.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* 2. Personal Information */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-blue-600 rounded-full" />
                            <FiBriefcase className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-gray-900">2. Personal Information</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">First Name *</Label>
                                    <Input
                                        {...register("firstName")}
                                        placeholder="John"
                                        className={errors.firstName ? 'border-red-500' : ''}
                                    />
                                    {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>}
                                </div>
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Last Name *</Label>
                                    <Input
                                        {...register("lastName")}
                                        placeholder="Doe"
                                        className={errors.lastName ? 'border-red-500' : ''}
                                    />
                                    {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>}
                                </div>
                            </div>

                            <div className={`grid ${!isLocal ? "grid-cols-3" : "grid-cols-2"} gap-6`}>
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Email Address *</Label>

                                    <div className="relative">
                                        <Input
                                            {...register("email")}
                                            placeholder="john.doe@organization.com"
                                            className={`${errors.email ? 'border-red-500' : ''}`}
                                        />
                                    </div>

                                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}

                                </div>

                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Local Phone number</Label>
                                    <Input {...register("phoneLocal")} placeholder="+1 (555) 000-0000" />
                                </div>

                                {

                                    !isLocal && (

                                        <div>
                                            <Label className="text-sm font-medium text-gray-700 mb-2">Foreign Phone number</Label>
                                            <Input {...register("phoneForeign")} placeholder="+1 (555) 000-0000" />
                                        </div>

                                    )

                                }

                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Date of Birth</Label>
                                    <Input {...register("dateOfBirth")} type="date" />
                                </div>
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Residency Status</Label>
                                    <Controller
                                        name="isLocal"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="flex items-center gap-4 h-10">
                                                <button
                                                    type="button"
                                                    onClick={() => {

                                                        field.onChange(false)
                                                        setIsLocal(false)

                                                    }}
                                                    className={`cursor-pointer px-4 py-2 text-sm rounded-lg transition-colors ${!field.value ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-500 bg-gray-50'}`}
                                                >
                                                    International
                                                </button>
                                                <div
                                                    className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${field.value ? 'bg-blue-600' : 'bg-gray-300'}`}
                                                    onClick={() => {

                                                        field.onChange(!field.value)
                                                        setIsLocal(!isLocal)

                                                    }}
                                                >
                                                    <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${field.value ? 'right-0.5' : 'left-0.5'}`} />
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => {

                                                        field.onChange(true)
                                                        setIsLocal(true)

                                                    }}
                                                    className={`cursor-pointer px-4 py-2 text-sm rounded-lg transition-colors ${field.value ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-500'}`}
                                                >
                                                    Local
                                                </button>
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className={`${!isLocal ? "grid grid-cols-2 gap-6" : ""}`}>

                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Local Address</Label>
                                    <Input {...register("localAddress")} placeholder="123 Corporate Way, Suite 400" />
                                </div>

                                {

                                    !isLocal && (

                                        <div>
                                            <Label className="text-sm font-medium text-gray-700 mb-2">Foreign Address</Label>
                                            <Input {...register("foreignAddress")} placeholder="123 Corporate Way, Suite 400" />
                                        </div>

                                    )

                                }

                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Home City</Label>
                                    <Input {...register("city")} placeholder="San Francisco" />
                                </div>
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Home Country</Label>
                                    <Input {...register("country")} placeholder="United States" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Employment Details */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-blue-600 rounded-full" />
                            <FiBriefcase className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-gray-900">3. Employment Details</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Employee Type *</Label>
                                    <Controller
                                        name="employeeType"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={(value) => {
                                                field.onChange(value);
                                                setEmployeeType(value);
                                                setEmployeeTypeSelected(true)

                                                setValue("academicPosition", "");
                                                setValue("administrativePosition", "")
                                            }} value={field.value}>
                                                <SelectTrigger className={errors.employeeType ? 'border-red-500' : ''}>
                                                    <SelectValue placeholder="Select Type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="ACADEMIC">Academic</SelectItem>
                                                    <SelectItem value="ADMINISTRATIVE_STAFF">Administrative Staff</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.employeeType && <p className="text-xs text-red-500 mt-1">{errors.employeeType.message}</p>}
                                </div>

                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Employment Status *</Label>
                                    <Controller
                                        name="status"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className={errors.status ? 'border-red-500' : ''}>
                                                    <SelectValue placeholder="Select Status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="ACTIVE">Active</SelectItem>
                                                    <SelectItem value="ON_LEAVE">On Leave</SelectItem>
                                                    <SelectItem value="TERMINATED">Terminated</SelectItem>
                                                    <SelectItem value="RETIRED">Retired</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.status && <p className="text-xs text-red-500 mt-1">{errors.status.message}</p>}
                                </div>

                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">School *</Label>
                                    <Controller
                                        name="schoolId"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                onValueChange={(value) => {
                                                    field.onChange(value);
                                                    setSchoolSelected(true);
                                                    getDepartmentNames(value);
                                                    setValue("departmentId", "")
                                                }}
                                                value={field.value}
                                            >
                                                <SelectTrigger className={errors.schoolId ? 'border-red-500' : ''}>
                                                    <SelectValue placeholder="Select School" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {schools && schools.map((school: SchoolNamesProps) => (
                                                        <SelectItem key={school.id} value={school.id}>
                                                            {school.schoolName}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.schoolId && <p className="text-xs text-red-500 mt-1">{errors.schoolId.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Department *</Label>
                                    <Controller
                                        name="departmentId"
                                        control={control}
                                        render={({ field }) => (
                                            <Select disabled={!schoolSelected} onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className={errors.departmentId ? 'border-red-500' : ''}>
                                                    <SelectValue placeholder="Select Department" />
                                                </SelectTrigger>
                                                <SelectContent>

                                                    {

                                                        departments && (

                                                            departments.map((department: DepartmentNamesProps) => (

                                                                <SelectItem key={department.id} value={`${department.id}`}>{department.departmentName}</SelectItem>

                                                            ))

                                                        )

                                                    }

                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.departmentId && <p className="text-xs text-red-500 mt-1">{errors.departmentId.message}</p>}
                                    {!schoolSelected && (<p className="text-xs text-gray-500 mt-1 ml-1">Please select a school first</p>)}
                                </div>

                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">{employeeType === "ACADEMIC" ? <span>Academic Position *</span> : employeeType === "ADMINISTRATIVE_STAFF" ? <span>Administrative Position *</span> : ""}</Label>
                                    <Controller
                                        name={`${employeeType === "ACADEMIC" ? "academicPosition" : "administrativePosition"}`}
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                onValueChange={(value) => {
                                                    field.onChange(value)
                                                }}
                                                value={field.value}
                                                disabled={!employeeTypeSelected}
                                            >
                                                <SelectTrigger className={errors.academicPosition ? 'border-red-500' : ''}>
                                                    <SelectValue placeholder="Select Position" />
                                                </SelectTrigger>
                                                <SelectContent>

                                                    {

                                                        employeeType === "ACADEMIC" ? (

                                                            <>

                                                                <SelectItem value="LECTURER">Lecturer</SelectItem>
                                                                <SelectItem value="ASSISTANT_PROFESSOR">Assistant Professor</SelectItem>
                                                                <SelectItem value="ASSOCIATE_PROFESSOR">Associate Professor</SelectItem>
                                                                <SelectItem value="PROFESSOR">Professor</SelectItem>

                                                            </>

                                                        ) : (

                                                            <>

                                                                <SelectItem value="TECHNICIAN">Techician</SelectItem>
                                                                <SelectItem value="CLEANER">Cleaner</SelectItem>
                                                                <SelectItem value="RECRUITER">Receptionist</SelectItem>

                                                            </>

                                                        )

                                                    }

                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.academicPosition && <p className="text-xs text-red-500 mt-1">{errors.academicPosition.message}</p>}
                                    {!employeeTypeSelected && (<p className="text-xs text-gray-500 mt-1 ml-1">Please select an employment type first</p>)}
                                </div>

                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Base Salary *</Label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                        <Input
                                            {...register("baseSalary")}
                                            placeholder="50,000"
                                            className={`pl-8 ${errors.baseSalary ? 'border-red-500' : ''}`}
                                        />
                                    </div>
                                    {errors.baseSalary && <p className="text-xs text-red-500 mt-1">{errors.baseSalary.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Emergency Contact */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-blue-600 rounded-full" />
                            <FiPhone className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-gray-900">4. Emergency Contact</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Contact Name</Label>
                                    <Input {...register("emergencyContactName")} placeholder="Jane Doe" />
                                </div>
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Relationship</Label>
                                    <Input {...register("emergencyRelationship")} placeholder="Spouse" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Phone Primary</Label>
                                    <Input {...register("emergencyPhone")} placeholder="+1 (555) 999-8888" />
                                </div>
                                <div>
                                    <Label className="text-sm font-medium text-gray-700 mb-2">Email</Label>
                                    <Input
                                        {...register("emergencyEmail")}
                                        placeholder="jane.doe@example.com"
                                        className={errors.emergencyEmail ? 'border-red-500' : ''}
                                    />
                                    {errors.emergencyEmail && <p className="text-xs text-red-500 mt-1">{errors.emergencyEmail.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <Link href={"/admin/employees"} className="flex items-center justify-end gap-4 pt-4">
                        <Button type="button" variant="outline" className="px-8 py-6 text-base cursor-pointer">
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={isSubmitting || !usernameAvailable}
                            className="px-8 py-6 text-base cursor-pointer bg-blue-600 hover:bg-blue-700 gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <AiOutlineLoading3Quarters className="animate-spin" size={18} />
                                    Registering...
                                </>
                            ) : (
                                <>Register Employee</>
                            )}
                        </Button>
                    </Link>

                </form>

            </div >
        </div >
    );
}