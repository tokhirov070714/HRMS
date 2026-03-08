"use client";

import TodoSkeleton from "@/components/custom/skeletons/TodoSkeleton";
import useSession from "@/hooks/useSession";
import { useEffect, useState } from "react";
import { FaCheck, FaPencilAlt, FaTrash, FaPlus, FaCalendar, FaTimes } from "react-icons/fa";

interface Todo {
    id: string;
    title: string;
    description: string;
    status: "Pending" | "In Progress" | "Completed";
}

interface NewTodo {
    title: string;
    description: string;
    status: "Pending" | "In Progress" | "Completed";
}

export default function TodoManagementPage() {

    const { user } = useSession()

    const [todos, setTodos] = useState<Todo[] | null>(null)
    const [loadingTodos, setLoadingTodos] = useState<boolean>(false)
    const [showAddModal, setShowAddModal] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [todoToDelete, setTodoToDelete] = useState<string | null>(null)
    const [loadDelete, setLoadDelete] = useState<boolean>(false)

    const [showEditModal, setShowEditModal] = useState(false)
    const [todoToEdit, setTodoToEdit] = useState<string | null>(null)

    const [editTodo, setEditTodo] = useState<NewTodo>({
        title: "",
        description: "",
        status: "Pending"
    })

    const [loadEdit, setLoadEdit] = useState(false)

    // New todo form state
    const [newTodo, setNewTodo] = useState<NewTodo>({
        title: "",
        description: "",
        status: "Pending"
    });

    const handleComplete = (id: string) => {

        if (todos) {

            setTodos(
                todos.map((todo) =>
                    todo.id === id
                        ? { ...todo, status: "Completed" as const }
                        : todo
                )
            );

        }

    };

    const handleEditChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {

        const { name, value } = e.target

        setEditTodo(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleEdit = (id: string) => {

        const todo = todos?.find(t => t.id === id)

        if (!todo) return

        setTodoToEdit(id)

        setEditTodo({
            title: todo.title,
            description: todo.description,
            status: todo.status
        })

        setShowEditModal(true)
    }

    const confirmEdit = async () => {

        setShowEditModal(false)
        setLoadEdit(true)

        const res = await fetch(
            `http://localhost:5500/api/employee/todos/update?employeeId=${user?.id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    todoId: todoToEdit,
                    title: editTodo.title,
                    description: editTodo.description,
                    status: editTodo.status
                })
            }
        )

        const data = await res.json()

        console.log(data)

        setLoadEdit(false)

        window.location.reload()
    }

    const handleDelete = (id: string) => {
        setTodoToDelete(id)
        setShowDeleteModal(true)
    }

    const confirmDelete = async () => {

        setShowDeleteModal(false)
        setLoadDelete(true)

        console.log(todoToDelete)

        const res = await fetch(`http://localhost:5500/api/employee/todos/delete?employeeId=${user?.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                todoId: todoToDelete
            })
        });

        const data = await res.json()

        console.log(data)
        setLoadDelete(false)

        setTodoToDelete(null);
        window.location.reload()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewTodo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const resetForm = () => {
        setNewTodo({
            title: "",
            description: "",
            status: "Pending"
        });
        setError(null);
    };

    const handleCloseModal = () => {
        setShowAddModal(false);
        resetForm();
    };

    const handleCreateTodo = async () => {
        // Validate form
        if (!newTodo.title.trim()) {
            setError("Title is required");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const res = await fetch(`http://localhost:5500/api/employee/todos/create?employeeId=${user?.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: newTodo.title,
                    description: newTodo.description,
                    status: newTodo.status
                })
            });

            const data = await res.json();

            console.log(data)

            if (res.ok) {
                // Add the new todo to the list
                setTodos(prev => prev ? [...prev, data] : [data]);
                handleCloseModal();
            } else {
                setError(data.error || "Failed to create todo");
            }
        } catch (error) {
            setError("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    async function fetchUserTodos() {

        setLoadingTodos(true)

        const res = await fetch(`http://localhost:5500/api/employee/todos?employeeId=${user?.id}`)
        const data = await res.json()
        console.log(data)
        setLoadingTodos(false)
        setTodos(data)

    }

    useEffect(() => {

        if (user) {

            fetchUserTodos()

        }

    }, [user])

    if (loadingTodos && todos === null) {

        return (

            <TodoSkeleton />

        )

    }

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

            {loadDelete && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 flex flex-col items-center">

                        <div className="w-10 h-10 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin mb-4"></div>

                        <h2 className="text-lg font-semibold text-gray-900 mb-1">
                            Deleting Task
                        </h2>

                    </div>
                </div>
            )}

            {loadEdit && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 flex flex-col items-center">

                        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mb-4"></div>

                        <h2 className="text-lg font-semibold text-gray-900 mb-1">
                            Updating Task
                        </h2>

                    </div>
                </div>
            )}

            {showEditModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

                    <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">

                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            Edit Task
                        </h2>

                        <div className="space-y-4">

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={editTodo.title}
                                    onChange={handleEditChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={editTodo.description}
                                    onChange={handleEditChange}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    value={editTodo.status}
                                    onChange={handleEditChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>

                        </div>

                        <div className="flex gap-3 justify-end mt-6">

                            <button
                                onClick={() => setShowEditModal(false)}
                                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={confirmEdit}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Update
                            </button>

                        </div>

                    </div>

                </div>
            )}

            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">

                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            Delete Task
                        </h2>

                        <p className="text-gray-600 mb-6">
                            Do you want to delete this todo?
                        </p>

                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            >
                                Delete
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {/* Tasks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {todos?.map((todo) => (
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

                        <div className="mt-3">
                            <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${todo.status === "Completed"
                                    ? "bg-green-100 text-green-700" :
                                    "bg-yellow-100 text-yellow-700"
                                    }`}
                            >
                                {todo.status}
                            </span>
                        </div>

                        {/* Action Buttons */}
                        < div className="flex items-center justify-end gap-2 mb-4" >
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
                ))
                }
            </div >

            {/* Empty State */}
            {
                todos?.length === 0 && (
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
                )
            }

            {/* Add Task Modal */}
            {
                showAddModal && (
                    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-auto animate-in slide-in-from-bottom-5 duration-300">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Create New Task
                                </h2>
                                <button
                                    onClick={handleCloseModal}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <FaTimes size={20} className="text-gray-500" />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 space-y-4">
                                {/* Title Input */}
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                        Task Title <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={newTodo.title}
                                        onChange={handleInputChange}
                                        placeholder="Enter task title"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        maxLength={100}
                                    />
                                    <div className="text-xs text-gray-500 mt-1 text-right">
                                        {newTodo.title.length}/100
                                    </div>
                                </div>

                                {/* Description Input */}
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={newTodo.description}
                                        onChange={handleInputChange}
                                        placeholder="Enter task description"
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                        maxLength={500}
                                    />
                                    <div className="text-xs text-gray-500 mt-1 text-right">
                                        {newTodo.description.length}/500
                                    </div>
                                </div>

                                {/* Status Selection */}
                                <div>
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                                        Initial Status
                                    </label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={newTodo.status}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                    >
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-sm text-red-600">
                                            {error}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="flex gap-3 p-6 border-t bg-gray-50 rounded-b-xl">
                                <button
                                    onClick={handleCloseModal}
                                    className="flex-1 px-4 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                                    disabled={isSubmitting}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreateTodo}
                                    disabled={isSubmitting || !newTodo.title.trim()}
                                    className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Creating...
                                        </>
                                    ) : (
                                        <>
                                            <FaPlus size={14} />
                                            Create Task
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}