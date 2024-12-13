import React, { ReactNode } from "react";
export const SectionHeader = ({title, subtitle, description} : {title:string; subtitle: string; description: ReactNode}) => {
    return (
        <>
        <div className={`flex justify-center`}>
            <p className={"uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text"}>
                {title}
            </p>
        </div>
        <h2 className="font-calistoga text-3xl md:text-4xl text-center mt-5">
            {subtitle}
        </h2>
        <p className="pb-11 text-center md:text-lg lg:text-xl text-white/60 mt-4 mx-w-md mx-auto">
            {description}
        </p>
        </>
    );
};
