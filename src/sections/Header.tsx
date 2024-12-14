"use client"
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import {CursorBlinker} from "@/components/CursorBlinker";


export const Header=()=> {
    const baseText = "Hi! I'm Ashley👋" as string;
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.slice(0, latest)
    );

    useEffect(() => {
        const controls = animate(count, baseText.length, {
            type: "tween",
            duration: 1,
            ease: "easeInOut",
        });
        return controls.stop;
    }, []);

    return (
        <div className={"flex items-center justify-center"}>
            <span className="max-w-lg mx-auto font-calistoga text-4xl md:text-6xl">
            <motion.span>{displayText}</motion.span>
            <CursorBlinker/>
        </span>
        </div>

    );
}
