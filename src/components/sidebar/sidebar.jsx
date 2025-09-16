import {
  BellIcon,
  Command,
  HomeIcon,
  LogOutIcon,
  SettingsIcon,
  User,
  UserIcon,
} from "lucide-react";
import React from "react";

export const Sidebar = () => {
  const links = [
    { label: "Home", icon: HomeIcon, href: "#" },
    { label: "Profile", icon: UserIcon, href: "#" },
    { label: "Settings", icon: SettingsIcon, href: "#" },
    { label: "Notifications", icon: BellIcon, href: "#" },
    { label: "Logout", icon: LogOutIcon, href: "#" },
  ];

  return (
    <aside className="h-full w-52 bg-sidebar text-sidebar-foreground border-r border-border shrink-0">
      <div className="w-full flex flex-col h-full">
        <div className="h-14 flex items-center border-b border-border px-2">
          <a className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center bg-muted rounded-sm">
              <Command size={20} className="text-primary" />
            </div>
            <span className="text-foreground text-xl font-semibold">Idea</span>
          </a>
        </div>
        <nav className="flex-1 px-2 mt-2.5">
          <ul className="flex flex-col">
            {links.map((link, idx) => {
              const IconComponent = link.icon;
              const isActive = idx === 0;

              return (
                <li key={link.label} className="w-full">
                  <a
                    href={link.href}
                    className={`${
                      isActive
                        ? "bg-muted text-primary"
                        : "hover:bg-accent hover:text-accent-foreground"
                    } text-sm p-2 transition-colors flex items-center gap-2.5 rounded-sm`}
                  >
                    <IconComponent size={18} />
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="footer px-2 h-14 mb-2.5">
          <div className="h-full w-full overflow-hidden flex items-center gap-2 px-2 hover:bg-accent text-accent-foreground rounded-sm">
            <div className="h-8 w-8 flex items-center justify-center bg-muted text-muted-foreground rounded-sm shrink-0">
              <User size={20} />
            </div>
            <p className="text-sm font-medium truncate">Anish Pawaskar</p>
            <button className="h-8 w-8 flex items-center justify-center shrink-0">
              <SettingsIcon size={18} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
