import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import { FaMessage, FaUser } from "react-icons/fa6";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <FaMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-start items-center 
      flex-col overflow-hidden mx-auto sm:px-10 px-5 "
    >
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl text-black-100 font-bold">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
        </h1>
      </div>
    </main>
  );
}
