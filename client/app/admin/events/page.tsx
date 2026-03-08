"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaPlus, FaTrash, FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaExclamationTriangle } from "react-icons/fa";
import { MdDescription, MdTitle } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import EventsSkeleton from "@/components/custom/skeletons/EventsSkeleton";

interface Event {
    id: string;
    title: string;
    description: string | null;
    location: string | null;
    startTime: string;
}

// Validation schema
const eventSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().optional(),
    location: z.string().optional(),
    startTime: z.string().min(1, "Start time is required"),
});

type EventFormData = z.infer<typeof eventSchema>;

export default function EventsPage() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [eventToDelete, setEventToDelete] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<EventFormData>({
        resolver: zodResolver(eventSchema),
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch("http://localhost:5500/api/admin/events");
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error("Error fetching events:", error);
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (data: EventFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:5500/api/admin/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: data.title,
                    description: data.description || null,
                    location: data.location || null,
                    startTime: new Date(data.startTime).toISOString(),
                }),
            });

            if (response.ok) {
                const newEvent = await response.json();
                setEvents([...events, newEvent.event]);
                setShowCreateModal(false);
                reset();
            } else {
                const error = await response.json();
                alert(`Error: ${error.message || "Failed to create event"}`);
            }
        } catch (error) {
            console.error("Error creating event:", error);
            alert("Failed to create event. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteClick = (id: string) => {
        setEventToDelete(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!eventToDelete) return;

        setIsDeleting(true);

        try {
            const response = await fetch(`http://localhost:5500/api/admin/events/${eventToDelete}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setEvents(events.filter((event) => event.id !== eventToDelete));
                setShowDeleteModal(false);
                setEventToDelete(null);
            } else {
                alert("Failed to delete event");
            }
        } catch (error) {
            console.error("Error deleting event:", error);
            alert("Failed to delete event");
        } finally {
            setIsDeleting(false);
        }
    };

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setEventToDelete(null);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return {
            month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
            day: date.getDate(),
            year: date.getFullYear(),
            time: date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            }),
        };
    };

    if (loading) {
        return (
            <EventsSkeleton />
        );
    }

    return (
        <div className="w-full p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Event Management
                        </h1>
                    </div>
                    <button
                        onClick={() => setShowCreateModal(true)}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        <FaPlus size={16} />
                        Create Event
                    </button>
                </div>

                {/* Events List */}
                <div className="space-y-4">
                    {events.length === 0 ? (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
                            <FaCalendarAlt size={48} className="mx-auto text-gray-300 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                No events yet
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Get started by creating your first event
                            </p>
                            <button
                                onClick={() => setShowCreateModal(true)}
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                <FaPlus size={16} />
                                Create Event
                            </button>
                        </div>
                    ) : (
                        events.map((event) => {
                            const formatted = formatDate(event.startTime);
                            return (
                                <div
                                    key={event.id}
                                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex gap-4 flex-1">
                                            {/* Date Badge */}
                                            <div className="flex flex-col items-center justify-center bg-blue-50 rounded-lg p-3 min-w-[80px]">
                                                <span className="text-xs font-semibold text-blue-600">
                                                    {formatted.month}
                                                </span>
                                                <span className="text-2xl font-bold text-gray-900">
                                                    {formatted.day}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {formatted.year}
                                                </span>
                                            </div>

                                            {/* Event Details */}
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    {event.title}
                                                </h3>
                                                {event.description && (
                                                    <p className="text-gray-600 mb-3">
                                                        {event.description}
                                                    </p>
                                                )}
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <div className="flex items-center gap-1">
                                                        <FaCalendarAlt size={14} />
                                                        <span>{formatted.time}</span>
                                                    </div>
                                                    {event.location && (
                                                        <div className="flex items-center gap-1">
                                                            <FaMapMarkerAlt size={14} />
                                                            <span>{event.location}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleDeleteClick(event.id)}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Delete"
                                        >
                                            <FaTrash size={18} />
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>

            {/* Create Event Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Create New Event
                            </h2>
                            <button
                                onClick={() => {
                                    setShowCreateModal(false);
                                    reset();
                                }}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
                            <div className="space-y-5">
                                {/* Title */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                                        <MdTitle size={18} className="text-blue-600" />
                                        Event Title
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("title")}
                                        placeholder="e.g., Annual Team Meeting"
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.title
                                            ? "border-red-500"
                                            : "border-gray-300"
                                            }`}
                                    />
                                    {errors.title && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.title.message}
                                        </p>
                                    )}
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                                        <MdDescription size={18} className="text-blue-600" />
                                        Description
                                    </label>
                                    <textarea
                                        {...register("description")}
                                        placeholder="Provide details about the event (optional)"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                                        <FaMapMarkerAlt size={16} className="text-blue-600" />
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        {...register("location")}
                                        placeholder="e.g., Conference Room A, Building 3"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Start Time */}
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                                        <FaClock size={16} className="text-blue-600" />
                                        Date & Time
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="datetime-local"
                                        {...register("startTime")}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.startTime
                                            ? "border-red-500"
                                            : "border-gray-300"
                                            }`}
                                    />
                                    {errors.startTime && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.startTime.message}
                                        </p>
                                    )}
                                </div>

                                {/* Help Text */}
                                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                    <p className="text-sm text-blue-800">
                                        <strong>Note:</strong> Events will be visible to all employees
                                        on their dashboard calendars with a green dot indicator.
                                    </p>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowCreateModal(false);
                                        reset();
                                    }}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Creating..." : "Create Event"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
                        {/* Modal Header */}
                        <div className="px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <FaExclamationTriangle className="text-red-600" size={24} />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    Delete Event
                                </h2>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            <p className="text-gray-600">
                                Are you sure you want to delete this event?
                            </p>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-gray-200 flex items-center gap-4">
                            <button
                                onClick={cancelDelete}
                                disabled={isDeleting}
                                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                disabled={isDeleting}
                                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isDeleting ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}