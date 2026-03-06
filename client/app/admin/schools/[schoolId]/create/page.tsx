"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";
import {
    FaFlask,
    FaAtom,
    FaMicroscope,
    FaDna,
    FaCalculator,
    FaLaptopCode,
    FaBrain,
    FaRobot,
    FaNetworkWired,
    FaDatabase,
    FaServer,
    FaCode,
    FaChartLine,
    FaBriefcase,
    FaBalanceScale,
    FaGavel,
    FaFileContract,
    FaHandshake,
    FaHospital,
    FaSyringe,
    FaStethoscope,
    FaPills,
    FaBookMedical,
    FaLandmark,
    FaBookOpen,
    FaTheaterMasks,
    FaPalette,
    FaMusic,
    FaLanguage,
    FaGlobeAmericas,
    FaHistory,
} from "react-icons/fa";
import {
    MdScience,
    MdEngineering,
    MdBiotech,
    MdArchitecture,
    MdDesignServices,
    MdPsychology,
} from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const formSchema = z.object({
    departmentName: z.string().min(1, "Department name is required"),
    schoolId: z.string().min(1, "Please select a parent school"),
    description: z.string().max(500, "Description cannot exceed 500 characters").optional(),
    icon: z.number().min(0, "Please select an icon"),
});

type FormData = z.infer<typeof formSchema>;

interface SchoolProps {
    id: string;
    schoolName: string;
}

const DEPARTMENT_ICONS = [
    { icon: FaFlask, name: "Flask" },
    { icon: FaAtom, name: "Atom" },
    { icon: FaMicroscope, name: "Microscope" },
    { icon: FaDna, name: "DNA" },
    { icon: FaCalculator, name: "Calculator" },
    { icon: FaLaptopCode, name: "Laptop Code" },
    { icon: FaBrain, name: "Brain" },
    { icon: FaRobot, name: "Robot" },
    { icon: FaNetworkWired, name: "Network" },
    { icon: FaDatabase, name: "Database" },
    { icon: FaServer, name: "Server" },
    { icon: FaCode, name: "Code" },
    { icon: FaChartLine, name: "Chart" },
    { icon: FaBriefcase, name: "Briefcase" },
    { icon: FaBalanceScale, name: "Balance" },
    { icon: FaGavel, name: "Gavel" },
    { icon: FaFileContract, name: "Contract" },
    { icon: FaHandshake, name: "Handshake" },
    { icon: FaHospital, name: "Hospital" },
    { icon: FaSyringe, name: "Syringe" },
    { icon: FaStethoscope, name: "Stethoscope" },
    { icon: FaPills, name: "Pills" },
    { icon: FaBookMedical, name: "Medical Book" },
    { icon: FaLandmark, name: "Landmark" },
    { icon: FaBookOpen, name: "Book" },
    { icon: FaTheaterMasks, name: "Theater" },
    { icon: FaPalette, name: "Palette" },
    { icon: FaMusic, name: "Music" },
    { icon: FaLanguage, name: "Language" },
    { icon: FaGlobeAmericas, name: "Globe" },
    { icon: FaHistory, name: "History" },
    { icon: MdScience, name: "Science" },
    { icon: MdEngineering, name: "Engineering" },
    { icon: MdBiotech, name: "Biotech" },
    { icon: MdArchitecture, name: "Architecture" },
    { icon: MdDesignServices, name: "Design" },
    { icon: MdPsychology, name: "Psychology" },
    { icon: BsBuilding, name: "Building" },
];

export default function RegisterDepartmentPage() {
    const [carouselStart, setCarouselStart] = useState(0);
    const [schools, setSchools] = useState<SchoolProps[] | null>(null);
    const [mounted, setMounted] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            icon: 0,
        }
    });

    const selectedIcon = watch("icon");
    const description = watch("description") || "";

    const iconsPerView = 8;
    const maxStart = Math.max(0, DEPARTMENT_ICONS.length - iconsPerView);
    const maxDescriptionLength = 500;

    const handlePrevious = () => {
        setCarouselStart(Math.max(0, carouselStart - iconsPerView));
    };

    const handleNext = () => {
        setCarouselStart(Math.min(maxStart, carouselStart + iconsPerView));
    };

    const visibleIcons = DEPARTMENT_ICONS.slice(carouselStart, carouselStart + iconsPerView);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        async function getSchools() {
            try {
                const res = await fetch("http://localhost:5500/api/admin/schools/names");
                const data = await res.json();
                console.log(data);
                setSchools(data);
            } catch (error) {
                console.error("Error fetching schools:", error);
            }
        }

        getSchools();
    }, []);

    async function onSubmit(data: FormData) {
        console.log("Form data:", data);
        const iconComponent = DEPARTMENT_ICONS[data.icon];
        const iconName = iconComponent.icon.name;
        console.log(iconName)
        
    }

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full flex items-center justify-center p-6">
            <div className="w-full max-w-3xl">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Register New Department
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Initialize a new academic or administrative unit within the HR system.
                    </p>
                </div>

                {/* Form Card */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

                        {/* Blue top bar */}
                        <div className="h-2 bg-blue-600" />

                        {/* Form Content */}
                        <div className="p-8 space-y-6">

                            {/* Department Name */}
                            <div>
                                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Department Name *
                                </Label>
                                <div className="relative">
                                    <BsBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <Input
                                        {...register("departmentName")}
                                        placeholder="e.g. Department of Computer Science"
                                        className={`pl-10 py-6 text-base border-gray-300 bg-gray-50 ${errors.departmentName ? 'border-red-500' : ''}`}
                                    />
                                </div>
                                {errors.departmentName && (
                                    <p className="text-xs text-red-500 mt-1">{errors.departmentName.message}</p>
                                )}
                            </div>

                            {/* Parent School / Institution */}
                            <div>
                                <Label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Parent School / Institution *
                                </Label>
                                <Controller
                                    name="schoolId"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className={`py-6 bg-gray-50 border-gray-300 ${errors.schoolId ? 'border-red-500' : ''}`}>
                                                <SelectValue placeholder="Select an institution..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {schools && schools.length > 0 ? (
                                                    schools.map((school: SchoolProps) => (
                                                        <SelectItem key={school.id} value={school.id}>
                                                            {school.schoolName}
                                                        </SelectItem>
                                                    ))
                                                ) : (
                                                    <SelectItem value="no-schools" disabled>
                                                        No schools available
                                                    </SelectItem>
                                                )}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.schoolId && (
                                    <p className="text-xs text-red-500 mt-1">{errors.schoolId.message}</p>
                                )}
                            </div>

                            {/* Description */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <Label className="text-sm font-semibold text-gray-700">
                                        Description
                                    </Label>
                                    <span className="text-xs text-gray-400">
                                        {description.length} / {maxDescriptionLength}
                                    </span>
                                </div>
                                <Textarea
                                    {...register("description")}
                                    placeholder="Provide a brief overview of the department's goals, mission, and scope..."
                                    className={`min-h-32 resize-none text-base border-gray-300 bg-gray-50 ${errors.description ? 'border-red-500' : ''}`}
                                    maxLength={maxDescriptionLength}
                                />
                                {errors.description && (
                                    <p className="text-xs text-red-500 mt-1">{errors.description.message}</p>
                                )}
                            </div>

                            {/* Department Icon */}
                            <div>
                                <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                                    Department Icon *
                                </Label>

                                {/* Icon Carousel */}
                                <Controller
                                    name="icon"
                                    control={control}
                                    render={({ field }) => (
                                        <div className="flex items-center gap-2 mb-3">
                                            <button
                                                type="button"
                                                onClick={handlePrevious}
                                                disabled={carouselStart === 0}
                                                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                            >
                                                <FiChevronLeft size={20} className="text-gray-600" />
                                            </button>

                                            <div className="flex-1 grid grid-cols-8 gap-2">
                                                {visibleIcons.map((item, idx) => {
                                                    const IconComponent = item.icon;
                                                    const actualIndex = carouselStart + idx;
                                                    const isSelected = actualIndex === field.value;

                                                    return (
                                                        <button
                                                            key={`dept-icon-${actualIndex}`}
                                                            type="button"
                                                            onClick={() => field.onChange(actualIndex)}
                                                            className={`
                                                                aspect-square rounded-xl border-2 transition-all
                                                                flex items-center justify-center
                                                                ${isSelected
                                                                    ? 'border-blue-600 bg-blue-50'
                                                                    : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
                                                                }
                                                            `}
                                                        >
                                                            <IconComponent
                                                                className={isSelected ? 'text-blue-600' : 'text-gray-600'}
                                                                size={24}
                                                            />
                                                        </button>
                                                    );
                                                })}
                                            </div>

                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                disabled={carouselStart >= maxStart}
                                                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                            >
                                                <FiChevronRight size={20} className="text-gray-600" />
                                            </button>
                                        </div>
                                    )}
                                />
                                {errors.icon && (
                                    <p className="text-xs text-red-500 mt-1">{errors.icon.message}</p>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-end gap-4 pt-6">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    className="px-8 py-6 text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-8 py-6 text-base font-semibold bg-blue-600 hover:bg-blue-700 gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <AiOutlineLoading3Quarters className="animate-spin" size={18} />
                                            Creating...
                                        </>
                                    ) : (
                                        <>
                                            <FiCheck size={18} />
                                            Register Department
                                        </>
                                    )}
                                </Button>
                            </div>

                        </div>

                    </div>
                </form>

            </div>
        </div>
    );
}