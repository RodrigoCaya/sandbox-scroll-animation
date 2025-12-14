"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export const Mushroom = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    // Transform scroll progress to reveal from bottom to top
    // Maps scroll progress (0-1) to reveal height (0-100)  
    const revealProgress1 = useTransform(scrollYProgress, [0, 0.5], [0, 100])
    const revealProgress2 = useTransform(scrollYProgress, [0.5, 1], [0, 100])

    return (
        <div ref={ref} style={{ height: "500vh" }}>
            {/* Second mushroom - behind and to the left */}
            <div style={{ 
                position: "fixed", 
                top: "43%", 
                left: "31%", 
                transform: "translate(-50%, -50%)",
                zIndex: 0
            }}>
                <motion.div 
                    style={{ 
                        ...mushroomContainer,
                        clipPath: useTransform(revealProgress2, (progress) => 
                            `inset(${100 - progress}% 0 0 0)`
                        )
                    }}
                >
                    <img
                        src="/2mushroom.svg"
                        alt="Second Mushroom"
                        style={mushroomImage}
                    />
                </motion.div>
            </div>
            
            {/* First mushroom - front and center */}
            <div style={{ 
                position: "fixed", 
                top: "50%", 
                left: "50%", 
                transform: "translate(-50%, -50%)",
                zIndex: 1
            }}>
                <motion.div 
                    style={{ 
                        ...mushroomContainer,
                        clipPath: useTransform(revealProgress1, (progress) => 
                            `inset(${100 - progress}% 0 0 0)`
                        )
                    }}
                >
                    <img
                        src="/1mushroom.svg"
                        alt="Mushroom"
                        style={mushroomImage}
                    />
                </motion.div>
            </div>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const mushroomContainer: React.CSSProperties = {
    width: "400px",
    height: "400px",
    overflow: "hidden",
}

const mushroomImage: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
}
