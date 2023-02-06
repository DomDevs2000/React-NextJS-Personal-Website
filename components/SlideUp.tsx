
"use client" // this is a client component
import React, { useEffect, useRef, ReactNode } from "react"
interface Props {
    offset?: string
    children?: ReactNode

}

export default function SlideUp({ children, offset = "0" }: Props) {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("opacity-0")
                        entry.target.classList.add("animate-slideUpCubiBezier")
                    }
                })
            },
            { rootMargin: offset }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }
    }, [ref])

    return (
        <div ref={ref} className="relative opacity-0">
            {children}
        </div>
    )
}