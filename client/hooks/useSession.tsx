"use client"
import { useEffect, useState } from "react"

type User = {
    id: string
    username: string
    email: string
    role: string
}

export default function useSession() {

    const [authentic, setAuthentic] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function getSession() {

            try {
                const res = await fetch(
                    "http://localhost:5500/api/auth/me",
                    { credentials: "include" }
                )

                const data = await res.json()

                console.log("Session data:", data)

                if (!res.ok) {
                    setAuthentic(false)
                    setUser(null)
                    setLoading(false)
                    return
                }

                if (res.status === 401) {
                    setAuthentic(false)
                    setUser(null)
                    setLoading(false)
                    return
                }

                // THIS WAS MISSING - Set authentic and user when successful
                if (data.authenticated && data.user) {
                    setAuthentic(true)
                    setUser(data.user)
                }

                setLoading(false)

            } catch (error) {
                console.error("Session fetch error:", error)
                setAuthentic(false)
                setUser(null)
                setLoading(false)
            }

        }

        getSession()

    }, [])

    return { authentic, user, loading }

}