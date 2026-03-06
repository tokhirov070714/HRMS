"use client"

interface VideoBackgroundProps {
    videoSrc: string
    opacity?: number
    children?: React.ReactNode
}

export default function VideoBackground({
    videoSrc,
    opacity = 0.5,
    children
}: VideoBackgroundProps) {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-fill"
                // style={{ opacity }}
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark overlay (optional) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

            {/* Content */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                {children}
            </div>
        </div>
    )
}