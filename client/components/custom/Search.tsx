'use client'

import { Input } from "../ui/input"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce'
import { useState } from "react"

export default function Search({ placeholder }: { placeholder: string }) {

    const searchParams = useSearchParams()

    const pathname = usePathname()

    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term) => {

        const params = new URLSearchParams(searchParams)

        if (term) {

            params.set('query', term)

        } else {

            params.delete('query')

        }

        const queryString = params.toString()

        replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false })  // ← add this

    }, 300)

    const [value, setValue] = useState(searchParams.get('query') ?? '')

    return (

        <div>

            <Input
                className="pl-10 py-6 text-lg placeholder:text-lg"
                placeholder={placeholder}
                value={value}                          // ← controlled
                onChange={(e) => {
                    setValue(e.target.value)           // ← update local state immediately
                    handleSearch(e.target.value)       // ← debounced URL update
                }}
            />

        </div>

    )

}