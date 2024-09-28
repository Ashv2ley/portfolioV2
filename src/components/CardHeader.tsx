import StarIcon from "@/assets/icons/star.svg";

export const CardHeader = ({title, description}: {title:string; description:string; }) => {
    return (
        <div className="flex flex-col px-6 py-6">
            <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-400"/>
                <h3 className="font-calistoga text-3xl">{title}</h3>
            </div>
            <p className="text-sm text-white/60 mt-2">{description}</p>
        </div>
    );
};