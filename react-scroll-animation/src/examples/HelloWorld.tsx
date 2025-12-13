"use client"

import { motion, useScroll, useTransform, type Variants } from "motion/react"
import { useRef } from "react"

const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
}

export const HelloWorld = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // Transform scroll progress to different ranges for staggered animation
    const circleProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1])
    const xProgress = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
    const rectProgress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
    const circle2Progress = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
    const x2Progress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
    const rect2Progress = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
    const circle3Progress = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])
    const x3Progress = useTransform(scrollYProgress, [0.7, 0.9], [0, 1])
    const rect3Progress = useTransform(scrollYProgress, [0.8, 1.0], [0, 1])

    return (
        <div ref={ref} style={{ height: "700vh" }}>
            <div style={{ 
                position: "fixed", 
                top: "50%", 
                left: "50%", 
                transform: "translate(-50%, -50%)",
                zIndex: 1
            }}>
                <motion.svg
                    width="600"
                    height="600"
                    viewBox="0 0 600 600"
                    style={image}
                >
            <motion.circle
                className="circle-path"
                cx="100"
                cy="100"
                r="80"
                stroke="#ff0088"
                style={{
                    ...shape,
                    pathLength: circleProgress,
                    opacity: circleProgress
                }}
            />
            <motion.line
                x1="220"
                y1="30"
                x2="360"
                y2="170"
                stroke="#8df0cc"
                style={{
                    ...shape,
                    pathLength: xProgress,
                    opacity: xProgress
                }}
            />
            <motion.line
                x1="220"
                y1="170"
                x2="360"
                y2="30"
                stroke="#8df0cc"
                style={{
                    ...shape,
                    pathLength: xProgress,
                    opacity: xProgress
                }}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="30"
                rx="20"
                stroke="#0d63f8"
                style={{
                    ...shape,
                    pathLength: rectProgress,
                    opacity: rectProgress
                }}
            />
            <motion.circle
                cx="100"
                cy="300"
                r="80"
                stroke="#0d63f8"
                style={{
                    ...shape,
                    pathLength: circle2Progress,
                    opacity: circle2Progress
                }}
            />
            <motion.line
                x1="220"
                y1="230"
                x2="360"
                y2="370"
                stroke="#ff0088"
                style={{
                    ...shape,
                    pathLength: x2Progress,
                    opacity: x2Progress
                }}
            />
            <motion.line
                x1="220"
                y1="370"
                x2="360"
                y2="230"
                stroke="#ff0088"
                style={{
                    ...shape,
                    pathLength: x2Progress,
                    opacity: x2Progress
                }}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="230"
                rx="20"
                stroke="#8df0cc"
                style={{
                    ...shape,
                    pathLength: rect2Progress,
                    opacity: rect2Progress
                }}
            />
            <motion.circle
                cx="100"
                cy="500"
                r="80"
                stroke="#8df0cc"
                style={{
                    ...shape,
                    pathLength: circle3Progress,
                    opacity: circle3Progress
                }}
            />
            <motion.line
                x1="220"
                y1="430"
                x2="360"
                y2="570"
                stroke="#0d63f8"
                style={{
                    ...shape,
                    pathLength: x3Progress,
                    opacity: x3Progress
                }}
            />
            <motion.line
                x1="220"
                y1="570"
                x2="360"
                y2="430"
                stroke="#0d63f8"
                style={{
                    ...shape,
                    pathLength: x3Progress,
                    opacity: x3Progress
                }}
            />
            <motion.rect
                width="140"
                height="140"
                x="410"
                y="430"
                rx="20"
                stroke="#ff0088"
                style={{
                    ...shape,
                    pathLength: rect3Progress,
                    opacity: rect3Progress
                }}
            />
        </motion.svg>
            </div>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const image: React.CSSProperties = {
    maxWidth: "80vw",
}

const shape: React.CSSProperties = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
}
