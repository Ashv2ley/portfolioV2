import Image from "next/image";
import uciLogo from "@/assets/images/uci-logo.png"
import codepathLogo from "@/assets/images/codepath-logo.jpg"
import { ChevronRight } from "lucide-react";
import Link from "next/link";


export const EducationSection = () => {
    return (
        <div className="container relative max-w-2xl mx-auto">
            <h1 className="font-calistoga text-3xl md:text-4xl">Education</h1>
            <Link href={"https://uci.edu/"} className="flex items-start justify-between py-5 group relative">
                <div className="flex items-start gap-6">
                    <Image src={uciLogo} alt="UC Irvine logo" className="size-12 md:size-16 rounded-full border-2 border-gray-700"/>
                    <div className="relative">
                        <p className="text-[0.8rem] flex items-center font-medium md:text-xl"> University of California, Irvine
                            <ChevronRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-500 ease-in-out"/>
                        </p>
                        <p className="text-[0.6rem] md:text-lg font-extralight text-gray-400">Bachelor&apos;s of Science in Software Engineering</p>
                    </div>
                </div>
                <p className="text-right text-[0.6rem] md:text-lg font-extralight text-gray-400">Sept 2021 - June 2025</p>
            </Link>
            <Link href={"https://www.codepath.org/"} className="flex items-start justify-between py-5 group relative">
                <div className="flex items-start gap-6">
                <Image src={codepathLogo} alt="CodePath logo" className="size-12 md:size-16 rounded-full border-2 border-gray-700"/>
                <div className="relative">
                    <p className="flex items-center font-medium md:text-xl">CodePath
                        <ChevronRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-500 ease-in-out"/>
                    </p>
                    <p className="text-sm md:text-lg font-extralight text-gray-400">Intro to Technical Interview Prep</p>
                </div>
                </div>
                <p className="text-right text-[0.6rem] md:text-lg text-gray-400">Sept 2024 - Nov 2024</p>
            </Link>
        </div>
    );
};
