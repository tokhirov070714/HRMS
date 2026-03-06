"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FiEdit2, FiDownload, FiMapPin, FiCalendar, FiBriefcase, FiPhone, FiUser, FiClock, FiShield } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import EmployeeProfilePageSkeleton from "@/components/custom/skeletons/EmployeeProfilePage";
import useSession from "@/hooks/useSession";

interface EmergencyContact {
    contactName: string;
    relationship: string | null;
    phonePrimary: string;
    email: string | null;
}


interface EmployeeData {

    profilePictureUrl: string | null,
    role: string | null,
    username: string | null,
    dateOfBirth: string | null,
    firstName: string | null,
    lastName: string | null,
    email: string | null,
    phoneForeign: string | null,
    phoneLocal: string | null,
    addressForeign: string | null,
    addressLocal: string | null,
    isLocal: boolean,
    bio: string | null,
    country: string | null,
    city: string | null,
    cityForeign: string | null,
    countryForeign: string | null,
    fullName: string

    // --- Employment info ---
    baseSalary: number | null,

    school: { schoolName: string } | null;
    department: { departmentName: string } | null;

    administrativePosition: string | null,
    academicPosition: string | null,

    // --- Emergency contacts ---
    emergencyContacts: EmergencyContact[]

}

export default function EmployeeProfilePage() {

    const { user } = useSession()

    const [loading, setLoading] = useState(true);
    const [employee, setEmployee] = useState<EmployeeData | null>(null);
    const [isActive, setIsActive] = useState(true);


    useEffect(() => {
        async function getEmployeeData() {
            try {
                const res = await fetch(`http://localhost:5500/api/employee/profile?employeeId=${user?.id}`);
                const data = await res.json();

                console.log(data);
                setEmployee(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching employee:", error);
                setLoading(false);
            }
        }

        if (user) {

            getEmployeeData()

        }

    }, [user]);

    if (loading) {
        return (

            <EmployeeProfilePageSkeleton />

        );
    }

    if (!employee) {
        return (
            <div className="flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl font-semibold text-gray-600 mb-2">Employee not found</p>
                    <p className="text-sm text-gray-400">The requested employee profile does not exist.</p>
                </div>
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-6 py-6">

                {/* Header Card */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-6">
                    <div className="flex items-start justify-between">

                        {/* Left: Profile */}
                        <div className="flex items-center gap-6">
                            <div>
                                {employee.profilePictureUrl ? (
                                    <img
                                        src={employee.profilePictureUrl}
                                        alt={employee.fullName}
                                        className="w-24 h-24 rounded-2xl object-cover"
                                    />
                                ) : (
                                    <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-slate-300 to-slate-400 flex items-center justify-center text-2xl font-bold text-white">

                                        {

                                            (employee.firstName && employee.lastName) && (

                                                <p>
                                                    {employee.firstName[0]}{employee.lastName[0]}
                                                </p>

                                            )

                                        }

                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h1 className="text-3xl font-bold text-gray-900">{employee.fullName}</h1>
                                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full uppercase">
                                        ACTIVE
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span className="flex items-center gap-1.5">
                                        <FiBriefcase size={14} className="text-blue-600" />
                                        User Role: {employee.role}
                                    </span>
                                    {employee.addressLocal && (
                                        <span className="flex items-center gap-1.5">
                                            <FiMapPin size={14} className="text-blue-600" />
                                            <p>{employee.country}, {employee.city}, {employee.addressLocal}</p>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right: Actions */}
                        <div className="flex gap-3">
                            <Button variant="outline" className="gap-2">
                                <FiEdit2 size={16} />
                                Edit Profile
                            </Button>
                        </div>

                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-3 gap-6">

                    {/* Left Column */}
                    <div className="col-span-2 space-y-6">

                        {/* Personal Information */}
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
                                <FiUser className="text-blue-600" size={20} />
                                Personal Information
                            </h2>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">First Name</p>
                                    <p className="text-sm font-medium text-gray-900">{employee.firstName || "Not defined"}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Last Name</p>
                                    <p className="text-sm font-medium text-gray-900">{employee.lastName || "Not defined"}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Username</p>
                                    <p className="text-sm font-medium text-blue-600">{employee.username || "Not defined"}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Email</p>
                                    <p className="text-sm font-medium text-gray-900">{employee.email || "Not defined"}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Phone Local</p>
                                    <p className="text-sm font-medium text-gray-900">{employee.phoneLocal || "Not defined"}</p>
                                </div>
                                {

                                    !(employee.isLocal) && (

                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Phone foreign</p>
                                            <p className="text-sm font-medium text-gray-900">{employee.phoneForeign || "Not defined"}</p>
                                        </div>

                                    )

                                }

                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Home City</p>
                                    <p className="text-sm font-medium text-gray-900">{(employee.isLocal ? employee.city : employee.cityForeign) || "Not defined"}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Home Country</p>
                                    <p className="text-sm font-medium text-gray-900">{(employee.isLocal ? employee.country : employee.countryForeign) || "Not defined"}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Local Address</p>
                                    <p className="text-sm font-medium text-gray-900">{employee.addressLocal || "Not defined"}</p>
                                </div>

                                {

                                    !(employee.isLocal) && (

                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Foreign Address</p>
                                            <p className="text-sm font-medium text-gray-900">{employee.addressForeign || "Not defined"}</p>
                                        </div>

                                    )

                                }

                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Is Local Status</p>
                                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${employee.isLocal ? "text-blue-600" : "text-gray-400"}`}>
                                        <span className="w-2 h-2 rounded-full bg-current" />
                                        {employee.isLocal ? "True" : "False"}
                                    </span>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Date of Birth</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        {employee.dateOfBirth ? formatDate(employee.dateOfBirth) : "Not defined"}
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Emergency Contacts Section */}
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm pl-10 pr-15 py-6">
                            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
                                <FiPhone className="text-blue-600" size={20} />
                                Emergency Contacts
                            </h2>

                            {employee.emergencyContacts.length > 0 ? (
                                <div className="space-y-4">
                                    {employee.emergencyContacts.map((contact, i) => (
                                        <div
                                            key={i}
                                            className="grid grid-cols-4 gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                                        >
                                            <div>
                                                <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Name</p>
                                                <p className="text-sm font-medium text-gray-900">{contact.contactName}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Relationship</p>
                                                <p className="text-sm font-medium text-gray-600">{contact.relationship || "—"}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Phone</p>
                                                <p className="text-sm font-medium text-gray-900">{contact.phonePrimary}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Email</p>
                                                <p className="text-sm font-medium text-blue-600">{contact.email || "—"}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-sm text-gray-500 text-center py-6">
                                    This user has no emergency contacts.
                                </p>
                            )}
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">

                        {/* Employment Details */}
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-6">
                                <FiBriefcase className="text-blue-600" size={20} />
                                Employment Details
                            </h2>

                            <div className="space-y-5">
                                {employee.school ? (
                                    <div>
                                        <p className="text-xs font-semibold text-gray-400 uppercase mb-2">School</p>
                                        <p className="text-sm font-medium text-gray-900">{employee.school.schoolName}</p>
                                    </div>
                                ) :

                                    (
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase mb-2">School</p>
                                            <p className="text-sm font-medium text-gray-900">Not Assigned</p>
                                        </div>
                                    )

                                }
                                {employee.department ? (
                                    <div>
                                        <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Department</p>
                                        <p className="text-sm font-medium text-gray-900">{employee.department.departmentName || "Not Assigned"}</p>
                                    </div>
                                ) :

                                    (
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Department</p>
                                            <p className="text-sm font-medium text-gray-900">Not Assigned</p>
                                        </div>
                                    )

                                }
                                {
                                    (employee.academicPosition || employee.administrativePosition) && (
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Position</p>
                                            <p className="text-sm font-medium text-gray-900">{employee.academicPosition ? employee.academicPosition : employee.administrativePosition}</p>
                                        </div>
                                    )
                                }
                                {employee.baseSalary !== null && (
                                    <div>
                                        <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Base Salary</p>
                                        <p className="text-2xl font-bold text-gray-900 flex items-baseline gap-1">
                                            <span className="text-green-600">💵</span>
                                            ${employee.baseSalary.toLocaleString()}.00
                                            <span className="text-xs font-normal text-gray-400">/yr</span>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bio */}
                        {employee.bio && (
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                                <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
                                    <span className="text-blue-600">📄</span>
                                    Bio
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {employee.bio}
                                </p>
                            </div>
                        )}

                    </div>

                </div>

            </div>
        </div>
    );
}