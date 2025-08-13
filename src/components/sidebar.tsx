import { useStaggeredAnimation } from '@/lib/utils';
import { useRouter } from "next/router";
import { JSX, useEffect, useMemo, useState } from "react";
import { FiGithub, FiUser } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoFileTrayStacked } from "react-icons/io5";
import { TbBrandLinkedin } from "react-icons/tb";

interface SidebarProps {
  icon?: JSX.Element;
  title?: string;
  goto?: string;
}

export default function Sidebar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    router.prefetch('/experience');
    router.prefetch('/projects');
  }, []);
  
  const handleNavigation = (goto: string) => {
    if (goto) router.push(goto);
  };

  const sidebarItems: SidebarProps[] = useMemo(() => [
    { icon: <FiUser />, title: "about", goto: "/" },
    { icon: <HiOutlineOfficeBuilding />, title: "experience", goto: "/experience" },
    { icon: <IoFileTrayStacked />, title: "projects", goto: "/projects" },
  ], []);

  const sidebarElements = useMemo(() => [
    { type: 'avatar' },
    { type: 'title' },
    { type: 'subtitle' },
    { type: 'resume' },
    { type: 'nav' }
  ], []);
  const sidebarAnimations = useStaggeredAnimation(sidebarElements, 150);

  useEffect(() => {
    const currentIndex = sidebarItems.findIndex(item => item.goto === router.pathname);
    if (currentIndex !== -1) {
      // setActiveIndex(currentIndex); // This was unused
    }
  }, [router.pathname, sidebarItems]);

  if (!mounted) return null;

  return (
    <div className="h-full flex flex-col justify-between">
      <div id="sidebar" className="relative">
        <div className="flex flex-col items-center justify-center mb-8">
          <div
            style={sidebarAnimations[0].style}
            className={`${sidebarAnimations[0].className}`}
          >
            <img
              src="/assets/avatar.png"
              alt="Avatar"
              width={128}
              height={128}
              className="w-32 h-32 rounded-lg object-cover"
            />
          </div>
          
          <div
            style={sidebarAnimations[1].style}
            className={`text-2xl pt-5 text-zinc-300 font-bold ${sidebarAnimations[1].className}`}
          >
            Ritwik Sharma
          </div>
          
          <div
            style={sidebarAnimations[2].style}
            className={`text-sm pt-1 text-gray-500 italic mb-4 ${sidebarAnimations[2].className}`}
          >
            Software Engineer
          </div>
          
          <div
            style={sidebarAnimations[3].style}
            className={`relative group inline-block ${sidebarAnimations[3].className}`}
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>

            <button
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/18Pc0hcDXYd-TR6honOhJxmkC__RBLt2M/view?usp=sharing'
                )
              }
              className="relative  cursor-pointer border-2 border-zinc-700 bg-opacity-20 group-hover:border-transparent bg-zinc-900 text-white py-1 px-3 rounded-lg text-sm md:text-base z-10 transition-all duration-300
              bg-clip-padding"
            >
              Resume
            </button>
          </div>
        </div>

        <div
          style={sidebarAnimations[4].style}
          className={`${sidebarAnimations[4].className}`}
        >
          {sidebarItems.map((item, index) => {
            const isActive = router.pathname === item.goto;
            return (
              <div
                key={index}
                className={`flex items-center mt-2 py-2 px-5 rounded-lg cursor-pointer transition-all duration-300 ease-in-out relative
                ${isActive ? "bg-zinc-800/50" : "hover:bg-zinc-900/50"}`}
                onClick={() => handleNavigation(item.goto || "")}
              >
                <div className={`text-xl mr-3 transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-600"}`}>
                  {item.icon}
                </div>
                <span className={`text-sm transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-600"}`}>
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      {/* <CollapsibleContacts /> */}
      </div>

      {/* <div className="text-xl p-2 flex justify-end gap-2">
        <button
          className={`p-2 rounded-lg cursor-pointer ${
            theme === "dark" ? "bg-zinc-900 text-white" : "hover:bg-zinc-800 text-gray-400"
          }`}
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          aria-label="Switch to dark theme"
        >
          <FaRegMoon />
        </button>
        <button
          className={`p-2 rounded-lg cursor-pointer ${
            theme === "light" ? "bg-zinc-900 text-white" : "hover:bg-zinc-800 text-gray-400"
          }`}
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          aria-label="Switch to light theme"
        >
          <ImSun />
        </button>
      </div> */}
        <div className="mt-4">
          <hr className="border-1 border-zinc-700 my-4 mx-4" />
          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.open("https://github.com/Ritwikgotbugs", "_blank")} className="cursor-pointer text-gray-500 hover:text-white transition-colors text-2xl">
              <FiGithub />
            </button>
            <button
              onClick={() => window.open("https://linkedin.com/in/sharmaritwik", "_blank")} className="cursor-pointer text-gray-500 hover:text-white transition-colors text-3xl">
              <TbBrandLinkedin />
            </button>
          </div>
      </div>
    </div>
  );
}