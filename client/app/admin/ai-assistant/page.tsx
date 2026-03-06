"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineLoading3Quarters, AiOutlineSend } from "react-icons/ai";
import { FaRobot, FaUser } from "react-icons/fa";

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function AIAssistantPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when new messages arrive
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    async function sendMessage() {
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        setInput("");
        setLoading(true);

        // Add user message to UI immediately
        const newMessages = [...messages, { role: 'user' as const, content: userMessage }];
        setMessages(newMessages);

        try {
            const token = localStorage.getItem('token');

            const res = await fetch("http://localhost:5500/api/ai/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                    history: messages
                })
            });

            const data = await res.json();

            if (res.ok) {
                setMessages(data.history);
            } else {
                // Show error message
                setMessages([...newMessages, {
                    role: 'assistant',
                    content: `Sorry, I encountered an error: ${data.error || 'Unknown error'}. ${data.hint || ''}`
                }]);
            }
        } catch (error) {
            console.error("Chat error:", error);
            setMessages([...newMessages, {
                role: 'assistant',
                content: 'Sorry, I could not connect to the AI assistant. Please make sure the server is running.'
            }]);
        } finally {
            setLoading(false);
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="h-screen flex flex-col relative">

            <div>

                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                    {messages.length === 0 && (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaRobot className="text-blue-600" size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Welcome! How can I help you today?</h2>
                            <p className="text-gray-600 mb-8">Try asking me about your HR data:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                                <button
                                    onClick={() => setInput("How many professors do we have?")}
                                    className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all text-left"
                                >
                                    <div className="text-2xl mb-2">👨‍🏫</div>
                                    <div className="font-semibold text-gray-900">Employee Counts</div>
                                    <div className="text-sm text-gray-500">"How many professors do we have?"</div>
                                </button>

                                <button
                                    onClick={() => setInput("How many international employees are there?")}
                                    className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all text-left"
                                >
                                    <div className="text-2xl mb-2">🌍</div>
                                    <div className="font-semibold text-gray-900">International Staff</div>
                                    <div className="text-sm text-gray-500">"How many international employees?"</div>
                                </button>

                                <button
                                    onClick={() => setInput("List all schools")}
                                    className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all text-left"
                                >
                                    <div className="text-2xl mb-2">🏫</div>
                                    <div className="font-semibold text-gray-900">Schools Overview</div>
                                    <div className="text-sm text-gray-500">"List all schools"</div>
                                </button>

                                <button
                                    onClick={() => setInput("How do I create a new employee?")}
                                    className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all text-left"
                                >
                                    <div className="text-2xl mb-2">❓</div>
                                    <div className="font-semibold text-gray-900">Help & Guidance</div>
                                    <div className="text-sm text-gray-500">"How do I create an employee?"</div>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Messages */}
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'assistant' && (
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <FaRobot className="text-white" size={18} />
                                </div>
                            )}

                            <div className={`max-w-3xl rounded-2xl px-5 py-4 shadow-sm ${msg.role === 'user'
                                ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white'
                                : 'bg-white border border-gray-200 text-gray-900'
                                }`}>
                                <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                            </div>

                            {msg.role === 'user' && (
                                <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <FaUser className="text-white" size={18} />
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Loading Indicator */}
                    {loading && (
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                                <FaRobot className="text-white" size={18} />
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm">
                                <div className="flex items-center gap-2">
                                    <AiOutlineLoading3Quarters className="animate-spin text-blue-600" size={20} />
                                    <span className="text-gray-600">Thinking...</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t px-6 py-5 shadow-lg bg-white">
                    <div className="max-w-4xl mx-auto flex gap-3">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me anything about your HR data..."
                            className="flex-1 py-6 text-base border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            disabled={loading}
                        />
                        <Button
                            onClick={sendMessage}
                            disabled={loading || !input.trim()}
                            className="px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold"
                        >
                            {loading ? (
                                <AiOutlineLoading3Quarters className="animate-spin" size={22} />
                            ) : (
                                <AiOutlineSend size={22} />
                            )}
                        </Button>
                    </div>

                    <p className="text-center text-xs text-gray-500 mt-3">
                        Powered by Ollama AI • Running locally on your machine
                    </p>
                </div>

            </div>
        </div>
    );
}