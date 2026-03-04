import { useEffect, useState, useMemo } from "react";
import { motion, useSpring } from "motion/react";

export default function Cursor() {
    const [isPointer, setIsPointer] = useState(false);
    const isTouchDevice = useMemo(() => {
        if (typeof window === 'undefined') return false;
        return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    }, []);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    const ringX = useSpring(0, { stiffness: 150, damping: 20 });
    const ringY = useSpring(0, { stiffness: 150, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            ringX.set(e.clientX);
            ringY.set(e.clientY);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A"
            );
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full z-[9999] pointer-events-none mix-blend-difference"
                style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
            />
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-gold/30 rounded-full z-[9998] pointer-events-none"
                animate={{
                    scale: isPointer ? 1.5 : 1,
                    backgroundColor: isPointer ? "rgba(212, 175, 55, 0.1)" : "rgba(212, 175, 55, 0)",
                }}
                style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
            />
        </>
    );
}
