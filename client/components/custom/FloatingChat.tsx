"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AiOutlineLoading3Quarters, AiOutlineSend, AiOutlineClose } from "react-icons/ai"
import { FaRobot, FaUser } from "react-icons/fa"

interface Message {
    role: "user" | "assistant"
    content: string
}

export default function FloatingChat() {
    const [open, setOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, open])

    async function sendMessage() {
        if (!input.trim() || loading) return

        const userMessage = input.trim()
        setInput("")
        setLoading(true)

        const newMessages = [
            ...messages,
            { role: "user" as const, content: userMessage }
        ]
        setMessages(newMessages)

        try {
            const res = await fetch("http://localhost:5500/api/ai/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userMessage,
                    history: messages
                })
            })

            const data = await res.json()

            if (res.ok) {
                setMessages(data.history)
            } else {
                setMessages([
                    ...newMessages,
                    {
                        role: "assistant",
                        content: `Error: ${data.error || "Unknown error"}`
                    }
                ])
            }
        } catch (error) {
            setMessages([
                ...newMessages,
                {
                    role: "assistant",
                    content: "Could not connect to AI server."
                }
            ])
        } finally {
            setLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-2xl transition-all z-50"
            >
                {open ? <AiOutlineClose size={24} /> : <FaRobot size={24} />}
            </button>

            {/* Chat Window */}
            {open && (
                <div className="fixed bottom-24 right-6 w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden z-40">

                    {/* Header */}
                    <div className="bg-blue-600 text-white px-4 py-3 font-semibold">
                        AI Assistant
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.length === 0 && (
                            <p className="text-gray-500 text-sm">
                                Hello 👋 How can I help you?
                            </p>
                        )}

                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                {msg.role === "assistant" && (
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                        <FaRobot size={14} />
                                    </div>
                                )}

                                <div
                                    className={`max-w-[70%] rounded-xl px-3 py-2 text-sm ${msg.role === "user"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-900"
                                        }`}
                                >
                                    {msg.content}
                                </div>

                                {msg.role === "user" && (
                                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
                                        <FaUser size={14} />
                                    </div>
                                )}
                            </div>
                        ))}

                        {loading && (
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <AiOutlineLoading3Quarters className="animate-spin" />
                                Thinking...
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="border-t p-3 flex gap-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Type a message..."
                            disabled={loading}
                        />
                        <Button
                            onClick={sendMessage}
                            disabled={loading || !input.trim()}
                        >
                            {loading ? (
                                <AiOutlineLoading3Quarters className="animate-spin" />
                            ) : (
                                <AiOutlineSend />
                            )}
                        </Button>
                    </div>

                </div>
            )}
        </>
    )
}