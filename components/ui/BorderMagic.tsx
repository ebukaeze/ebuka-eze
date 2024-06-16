import Link from "next/link";
import React from "react";

type ButtonProps = {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  addedStyles?: string;
};

const BorderMagic = ({
  title,
  icon,
  position,
  handleClick,
  addedStyles,
}: ButtonProps) => {
  return (
    <div>
      <Link href="/">
        <button
          className="relative inline-flex h-12 overflow-hidden rounded-lg 
        p-[1px] -slate-50 focus:outline-none md:w-60"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span
            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1
           text-sm font-medium text-white backdrop-blur-3xl gap-3 ${addedStyles}`}
          >
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
          </span>
        </button>
      </Link>
      ;
    </div>
  );
};

export default BorderMagic;
