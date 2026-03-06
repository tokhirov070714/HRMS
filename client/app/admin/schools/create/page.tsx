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
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
    FaGraduationCap,
    FaBook,
    FaFlask,
    FaAtom,
    FaMicroscope,
    FaLaptopCode,
    FaPalette,
    FaTheaterMasks,
    FaMusic,
    FaBalanceScale,
    FaHospital,
    FaTools,
    FaGlobe,
    FaChartLine,
    FaBriefcase,
    FaLandmark,
    FaStar,
    FaCalculator,
    FaPencilAlt,
    FaPen,
    FaBullseye,
    FaTrophy,
    FaLightbulb,
    FaRocket,
    FaBolt,
    FaDna,
    FaUserMd,
    FaHammer,
    FaTree
} from "react-icons/fa";
import { IoTelescope } from "react-icons/io5";
import {
    MdScience,
    MdEngineering,
    MdBiotech,
    MdArchitecture,
    MdDesignServices
} from "react-icons/md";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";

const formSchema = z.object({
    schoolName: z.string().min(1, "School name is required"),
    description: z.string().optional(),
    schoolHeadId: z.string().min(1, "Please assign a school head"),
    icon: z.number().min(0, "Please select an icon"),
});

type FormData = z.infer<typeof formSchema>;

interface DeanProps {
    id: string
    firstName: string
    lastName: string
}

const SCHOOL_ICONS = [
    { icon: FaGraduationCap, name: "Graduation Cap" },
    { icon: FaBook, name: "Book" },
    { icon: FaFlask, name: "Flask" },
    { icon: FaAtom, name: "Atom" },
    { icon: FaMicroscope, name: "Microscope" },
    { icon: FaLaptopCode, name: "Laptop Code" },
    { icon: FaPalette, name: "Palette" },
    { icon: FaTheaterMasks, name: "Theater" },
    { icon: FaMusic, name: "Music" },
    { icon: FaBalanceScale, name: "Law" },
    { icon: FaHospital, name: "Hospital" },
    { icon: FaTools, name: "Tools" },
    { icon: FaGlobe, name: "Globe" },
    { icon: FaChartLine, name: "Chart" },
    { icon: FaBriefcase, name: "Briefcase" },
    { icon: FaLandmark, name: "Landmark" },
    { icon: FaStar, name: "Star" },
    { icon: IoTelescope, name: "Telescope" },
    { icon: FaCalculator, name: "Calculator" },
    { icon: FaPencilAlt, name: "Pencil" },
    { icon: FaPen, name: "Pen" },
    { icon: FaBullseye, name: "Target" },
    { icon: FaTrophy, name: "Trophy" },
    { icon: FaLightbulb, name: "Lightbulb" },
    { icon: FaRocket, name: "Rocket" },
    { icon: FaBolt, name: "Lightning" },
    { icon: MdScience, name: "Science" },
    { icon: MdEngineering, name: "Engineering" },
    { icon: MdBiotech, name: "Biotech" },
    { icon: FaDna, name: "DNA" },
    { icon: FaUserMd, name: "Medical" },
    { icon: FaHammer, name: "Hammer" },
    { icon: MdArchitecture, name: "Architecture" },
    { icon: MdDesignServices, name: "Design" },
    { icon: FaTree, name: "Environment" },
];

export default function EstablishInstitutionPage() {
    const [carouselStart, setCarouselStart] = useState(0);
    const [deans, setDeans] = useState<DeanProps[] | null>(null);
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

    const iconsPerView = 8;
    const maxStart = Math.max(0, SCHOOL_ICONS.length - iconsPerView);

    const handlePrevious = () => {
        setCarouselStart(Math.max(0, carouselStart - iconsPerView));
    };

    const handleNext = () => {
        setCarouselStart(Math.min(maxStart, carouselStart + iconsPerView));
    };

    const visibleIcons = SCHOOL_ICONS.slice(carouselStart, carouselStart + iconsPerView);
    const SelectedIconComponent = SCHOOL_ICONS[selectedIcon]?.icon || FaGraduationCap;

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        async function getFreeDeans() {
            try {
                const res = await fetch("http://localhost:5500/api/admin/schools/freedeans");
                const data = await res.json();
                console.log(data);
                setDeans(data);
            } catch (error) {
                console.error("Error fetching deans:", error);
            }
        }

        getFreeDeans();
    }, []);

    async function onSubmit(data: FormData) {
        console.log("Form data:", data);
        const iconComponent = SCHOOL_ICONS[data.icon];
        const iconName = iconComponent.icon.name;
        console.log(iconName)

    }

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full flex items-center justify-center p-6">
            <div className="w-full max-w-2xl">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Create A New School
                    </h1>
                </div>

                {/* Form Card */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

                        {/* Icon Header */}
                        <div className="bg-linear-to-br from-blue-50 to-indigo-50 py-12 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                                <SelectedIconComponent className="text-blue-600" size={40} />
                            </div>
                        </div>

                        {/* Form Content */}
                        <div className="p-8 space-y-6">

                            {/* School Name */}
                            <div>
                                <Label className="text-sm font-semibold text-gray-700 mb-2 block">School Name *</Label>
                                <div className="relative">
                                    <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <Input
                                        {...register("schoolName")}
                                        placeholder="e.g., International Academy of Science"
                                        className={`pl-10 py-6 text-base border-gray-300 ${errors.schoolName ? 'border-red-500' : ''}`}
                                    />
                                </div>
                                {errors.schoolName && (
                                    <p className="text-xs text-red-500 mt-1">{errors.schoolName.message}</p>
                                )}
                            </div>

                            {/* Institution Description */}
                            <div>
                                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Institution Description</Label>
                                <Textarea
                                    {...register("description")}
                                    placeholder="Briefly describe the school's mission, administrative structure, and core values..."
                                    className="min-h-32 resize-none text-base border-gray-300"
                                />
                            </div>

                            {/* Assign School Head */}
                            <div>
                                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Assign School Head *</Label>
                                <Controller
                                    name="schoolHeadId"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className={`py-6 ${errors.schoolHeadId ? 'border-red-500' : ''}`}>
                                                <SelectValue placeholder="Select an administrator..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {deans && deans.length > 0 ? (
                                                    deans.map((dean) => (
                                                        <SelectItem key={dean.id} value={dean.id}>
                                                            Dr. {dean.firstName} {dean.lastName}
                                                        </SelectItem>
                                                    ))
                                                ) : (
                                                    <SelectItem value="no-deans" disabled>
                                                        No available administrators
                                                    </SelectItem>
                                                )}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.schoolHeadId && (
                                    <p className="text-xs text-red-500 mt-1">{errors.schoolHeadId.message}</p>
                                )}
                                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1.5">
                                    <span className="w-1 h-1 bg-blue-600 rounded-full" />
                                    Each institution must have a unique primary head assigned.
                                </p>
                            </div>

                            {/* Choose Brand Icon */}
                            <div>
                                <Label className="text-sm font-semibold text-gray-700 mb-3 block">Choose Brand Icon *</Label>

                                {/* Icon Carousel */}
                                <Controller
                                    name="icon"
                                    control={control}
                                    render={({ field }) => (
                                        <div className="flex items-center gap-2">
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
                                                            key={`icon-${actualIndex}`}
                                                            type="button"
                                                            onClick={() => field.onChange(actualIndex)}
                                                            className={`
                                                                aspect-square rounded-xl border-2 transition-all
                                                                flex items-center justify-center
                                                                ${isSelected
                                                                    ? 'border-blue-600 bg-blue-50'
                                                                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
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
                            <div className="flex items-center gap-4 pt-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="cursor-pointer flex-1 py-6 text-base font-semibold bg-blue-600 hover:bg-blue-700 gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <AiOutlineLoading3Quarters className="animate-spin" size={18} />
                                            Creating...
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-xl">+</span>
                                            Register Institution
                                        </>
                                    )}
                                </Button>
                                <Link
                                    href={"/admin/schools"}
                                    type="button"
                                    className="cursor-pointer text-base transition duration-200 font-semibold text-gray-700 hover:text-gray-900"
                                >
                                    <Button type="button" variant="outline" className="px-8 py-6 text-base cursor-pointer">
                                        Cancel
                                    </Button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </form>

            </div>
        </div>
    );
}