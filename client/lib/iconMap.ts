// lib/iconMap.ts or utils/iconMap.ts

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
    FaTree,
    FaBrain,
    FaRobot,
    FaNetworkWired,
    FaDatabase,
    FaServer,
    FaCode,
    FaGavel,
    FaFileContract,
    FaHandshake,
    FaSyringe,
    FaStethoscope,
    FaPills,
    FaBookMedical,
    FaBookOpen,
    FaLanguage,
    FaGlobeAmericas,
    FaHistory,
} from "react-icons/fa";
import { IoTelescope } from "react-icons/io5";
import {
    MdScience,
    MdEngineering,
    MdBiotech,
    MdArchitecture,
    MdDesignServices,
    MdPsychology,
} from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { IconType } from "react-icons";

// Icon mapping object for schools and departments
export const ICON_MAP: Record<string, IconType> = {
    // School icons
    "graduation-cap": FaGraduationCap,
    "book": FaBook,
    "flask": FaFlask,
    "atom": FaAtom,
    "microscope": FaMicroscope,
    "laptop-code": FaLaptopCode,
    "palette": FaPalette,
    "theater": FaTheaterMasks,
    "music": FaMusic,
    "law": FaBalanceScale,
    "hospital": FaHospital,
    "tools": FaTools,
    "globe": FaGlobe,
    "chart": FaChartLine,
    "briefcase": FaBriefcase,
    "landmark": FaLandmark,
    "star": FaStar,
    "telescope": IoTelescope,
    "calculator": FaCalculator,
    "pencil": FaPencilAlt,
    "pen": FaPen,
    "target": FaBullseye,
    "trophy": FaTrophy,
    "lightbulb": FaLightbulb,
    "rocket": FaRocket,
    "lightning": FaBolt,
    "science": MdScience,
    "engineering": MdEngineering,
    "biotech": MdBiotech,
    "dna": FaDna,
    "medical": FaUserMd,
    "hammer": FaHammer,
    "architecture": MdArchitecture,
    "design": MdDesignServices,
    "environment": FaTree,

    // Department-specific icons
    "brain": FaBrain,
    "robot": FaRobot,
    "network": FaNetworkWired,
    "database": FaDatabase,
    "server": FaServer,
    "code": FaCode,
    "balance": FaBalanceScale,
    "gavel": FaGavel,
    "contract": FaFileContract,
    "handshake": FaHandshake,
    "syringe": FaSyringe,
    "stethoscope": FaStethoscope,
    "pills": FaPills,
    "medical-book": FaBookMedical,
    "book-open": FaBookOpen,
    "language": FaLanguage,
    "globe-americas": FaGlobeAmericas,
    "history": FaHistory,
    "psychology": MdPsychology,
    "building": BsBuilding,
};

/**
 * Get icon component by name
 * @param iconName - The string identifier for the icon (e.g., "graduation-cap")
 * @returns The corresponding React icon component or a default fallback
 */
export function getIconComponent(iconName: string | null | undefined): IconType {
    if (!iconName || !ICON_MAP[iconName]) {
        return FaGraduationCap; // Default fallback icon
    }
    return ICON_MAP[iconName];
}

/**
 * Get icon name by display name (for backwards compatibility)
 * @param displayName - The human-readable name (e.g., "Graduation Cap")
 * @returns The icon identifier string (e.g., "graduation-cap")
 */
export function getIconId(displayName: string): string {
    const nameMap: Record<string, string> = {
        "Graduation Cap": "graduation-cap",
        "Book": "book",
        "Flask": "flask",
        "Atom": "atom",
        "Microscope": "microscope",
        "Laptop Code": "laptop-code",
        "Palette": "palette",
        "Theater": "theater",
        "Music": "music",
        "Law": "law",
        "Hospital": "hospital",
        "Tools": "tools",
        "Globe": "globe",
        "Chart": "chart",
        "Briefcase": "briefcase",
        "Landmark": "landmark",
        "Star": "star",
        "Telescope": "telescope",
        "Calculator": "calculator",
        "Pencil": "pencil",
        "Pen": "pen",
        "Target": "target",
        "Trophy": "trophy",
        "Lightbulb": "lightbulb",
        "Rocket": "rocket",
        "Lightning": "lightning",
        "Science": "science",
        "Engineering": "engineering",
        "Biotech": "biotech",
        "DNA": "dna",
        "Medical": "medical",
        "Hammer": "hammer",
        "Architecture": "architecture",
        "Design": "design",
        "Environment": "environment",
        "Brain": "brain",
        "Robot": "robot",
        "Network": "network",
        "Database": "database",
        "Server": "server",
        "Code": "code",
        "Balance": "balance",
        "Gavel": "gavel",
        "Contract": "contract",
        "Handshake": "handshake",
        "Syringe": "syringe",
        "Stethoscope": "stethoscope",
        "Pills": "pills",
        "Medical Book": "medical-book",
        "Book_open": "book-open",
        "Language": "language",
        "Globe_americas": "globe-americas",
        "History": "history",
        "Psychology": "psychology",
        "Building": "building",
    };

    return nameMap[displayName] || "graduation-cap";
}

/**
 * Check if an icon exists in the map
 * @param iconName - The icon identifier to check
 * @returns true if the icon exists, false otherwise
 */

export function hasIcon(iconName: string): boolean {
    return iconName in ICON_MAP;
}