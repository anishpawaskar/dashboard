import { useState } from "react";
import { NAVBAR_LINKS } from "./navbar.constant";
import { Bell, ChevronDown, User } from "lucide-react";

const NavbarDesktop = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <nav className="flex items-center justify-between px-20 py-2.5 bg-red-400">
      <h1 className="brand-name uppercase text-3xl font-bold ">
        <span className="text-green-400">H</span>
        ours
      </h1>
      <ul className="flex items-center gap-4">
        {NAVBAR_LINKS.map((navItem) => {
          const isActive = navItem.href.includes(activeTab);

          return (
            <li key={navItem.label}>
              <a href="#" className={`${isActive ? "border-b-2" : ""}`}>
                <button onClick={() => setActiveTab(navItem.href)}>
                  {navItem.label}
                </button>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="user-profile-wrapper flex items-center gap-2">
        <button>
          <Bell size={18} />
        </button>
        <div className="user-profile flex items-center gap-1.5">
          {/* <img className="user-avatar" /> */}
          <div className="user-avatar h-10 w-10 rounded-full flex items-center justify-center bg-green-400">
            <User size={20} />
          </div>
          <button className="flex items-center">
            <span>Anish</span>
            <ChevronDown size={18} className="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
