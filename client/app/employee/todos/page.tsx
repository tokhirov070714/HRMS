"use client";

import useSession from "@/hooks/useSession";
import { useEffect, useState } from "react";
import { FaCheck, FaPencilAlt, FaTrash, FaPlus, FaCalendar } from "react-icons/fa";

interface Todo {
    id: string;
    title: string;
    description: string;
    status: "Pending" | "In Progress" | "Completed";
}

export default function TodoManagementPage() {

    const { user } = useSession()

    const [todos, setTodos] = useState<Todo[]>([
        {
            id: "1",
            title: "Review Candidate Applications",
            description: "Screen top 10 candidates for the Senior Engineering role and shortlist for initial interviews.",
            status: "Pending",
        },
        {
            id: "2",
            title: "Update Employee Handbook",
            description: "Revise the remote work policy section to include the new hybrid scheduling guidelines.",
            status: "In Progress",
        },
        {
            id: "3",
            title: "Quarterly Performance Reviews",
            description: "Complete management reviews for the marketing department and finalize feedback reports.",
            status: "Pending",
        },
        {
            id: "4",
            title: "Benefits Open Enrollment",
            description: "Review and approve benefit selection forms for the current quarter enrollment cycle.",
            status: "Pending",
        },
        {
            id: "5",
            title: "New Hire Onboarding",
            description: "Prepare orientation materials and set up workspace for 5 new starters joining next week.",
            status: "In Progress",
        },
        {
            id: "6",
            title: "Payroll Processing",
            description: "Finalize monthly payroll adjustments, overtime claims, and tax deductions for validation.",
            status: "Pending",
        },
    ]);

    const [showAddModal, setShowAddModal] = useState(false);

    const handleComplete = (id: string) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, status: "Completed" as const }
                    : todo
            )
        );
    };

    const handleEdit = (id: string) => {
        console.log("Edit todo:", id);
        // Add edit logic here
    };

    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this task?")) {
            setTodos(todos.filter((todo) => todo.id !== id));
        }
    };

    async function fetchUserTodos() {

        const res = await fetch(`http://localhost:5500/api/employee/todos?employeeId=${user?.id}`)
        const data = await res.json()
        console.log(data)
        setTodos(data)

    }

    useEffect(() => {

        if (user) {

            fetchUserTodos()

        }

    }, [user])

    return (
        <div className="w-full p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        To-Do Management
                    </h1>
                </div>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                    <FaPlus size={16} />
                    Add New Task
                </button>
            </div>

            {/* Tasks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
                    >

                        {/* Title */}
                        <h3
                            className={`text-xl font-semibold mb-3 ${todo.status === "Completed"
                                ? "line-through text-gray-400"
                                : "text-gray-900"
                                }`}
                        >
                            {todo.title}
                        </h3>

                        {/* Description */}
                        <p
                            className={`text-sm mb-4 ${todo.status === "Completed"
                                ? "text-gray-400"
                                : "text-gray-600"
                                }`}
                        >
                            {todo.description}
                        </p>


                        {/* Status Badge */}
                        {todo.status !== "Pending" && (
                            <div className="mt-3">
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${todo.status === "Completed"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {todo.status}
                                </span>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex items-center justify-end gap-2 mb-4">
                            <button
                                onClick={() => handleComplete(todo.id)}
                                className={`p-2 rounded-lg transition-colors ${todo.status === "Completed"
                                    ? "bg-green-100 text-green-600"
                                    : "bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600"
                                    }`}
                                title="Mark as Complete"
                            >
                                <FaCheck size={14} />
                            </button>
                            <button
                                onClick={() => handleEdit(todo.id)}
                                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                                title="Edit"
                            >
                                <FaPencilAlt size={14} />
                            </button>
                            <button
                                onClick={() => handleDelete(todo.id)}
                                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors"
                                title="Delete"
                            >
                                <FaTrash size={14} />
                            </button>
                        </div>

                    </div>
                ))}
            </div>

            {/* Empty State */}
            {todos.length === 0 && (
                <div className="text-center py-16">
                    <div className="text-gray-400 mb-4">
                        <FaCalendar size={64} className="mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                        No tasks yet
                    </h3>
                    <p className="text-gray-500 mb-6">
                        Get started by creating your first task
                    </p>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        Add New Task
                    </button>
                </div>
            )}

            {/* Add Task Modal (Simple placeholder) */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Add New Task
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Task creation form will be implemented here
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                                Create Task
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}