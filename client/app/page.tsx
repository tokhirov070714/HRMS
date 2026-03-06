"use client"
import useSession from "@/hooks/useSession"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

// username: 'admin', password123

export default function Home() {

  const { authentic, user, loading } = useSession()
  const router = useRouter()

  useEffect(() => {

    console.log(user)

    if (!loading && !authentic) {

      router.push("/login")

    } else if ((!loading && authentic) && user?.role.toLowerCase() === "admin") {

      router.push("/admin/dashboard")

    }

    else if ((!loading && authentic) && user?.role.toLowerCase() === "employee") {

      router.push("/employee/dashboard")

    }

  }, [authentic, loading, router])


  return (
    <div className="w-full">

      <h1 className="text-5xl">HEEEEEY</h1>
      {

        user && (

          <p>{user.username}</p>

        )

      }

    </div>
  )
}
