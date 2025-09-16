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

// Main theme
// :root {
//   --background: #0a0909; /* hsl(20 14.3% 4.1%) */
//   --foreground: #f2f2f2; /* hsl(0 0% 95%) */

//   --card: #1a1817; /* hsl(24 9.8% 10%) */
//   --card-foreground: #f2f2f2; /* hsl(0 0% 95%) */

//   --popover: #171717; /* hsl(0 0% 9%) */
//   --popover-foreground: #f2f2f2; /* hsl(0 0% 95%) */

//   --primary: #00c36f; /* hsl(142.1 70.6% 45.3%) */
//   --primary-foreground: #052610; /* hsl(144.9 80.4% 10%) */

//   --secondary: #292929; /* hsl(240 3.7% 15.9%) */
//   --secondary-foreground: #fafafa; /* hsl(0 0% 98%) */

//   --muted: #262626; /* hsl(0 0% 15%) */
//   --muted-foreground: #a3a3a3; /* hsl(240 5% 64.9%) */

//   --accent: #272322; /* hsl(12 6.5% 15.1%) */
//   --accent-foreground: #fafafa; /* hsl(0 0% 98%) */

//   --destructive: #9e1d1d; /* hsl(0 62.8% 30.6%) */
//   --destructive-foreground: #fbeaea; /* hsl(0 85.7% 97.3%) */

//   --border: #292929; /* hsl(240 3.7% 15.9%) */
//   --input: #292929; /* hsl(240 3.7% 15.9%) */
//   --ring: #0f7c46; /* hsl(142.4 71.8% 29.2%) */

//   /* ✅ Sidebar tokens */
//   --sidebar: rgba(38, 38, 38, 0.4); /* bg-muted/40 */
//   --sidebar-foreground: #a3a3a3; /* muted-foreground */
// }

// spotify
// :root {
//   --background: #121212; /* hsl(240 5% 7%) */
//   --foreground: #f2f2f2; /* hsl(0 0% 95%) */

//   --card: #181818; /* hsl(0 0% 9%) */
//   --card-foreground: #f2f2f2; /* hsl(0 0% 95%) */

//   --popover: #181818; /* hsl(0 0% 9%) */
//   --popover-foreground: #f2f2f2; /* hsl(0 0% 95%) */

//   --primary: #1db954; /* hsl(142 65% 40%) */
//   --primary-foreground: #ffffff; /* hsl(0 0% 100%) */

//   --secondary: #262626; /* hsl(0 0% 15%) */
//   --secondary-foreground: #f2f2f2; /* hsl(0 0% 95%) */

//   --muted: #262626; /* hsl(0 0% 15%) */
//   --muted-foreground: #b3b3b3; /* hsl(0 0% 70%) */

//   --accent: #21e065; /* hsl(142 65% 45%) */
//   --accent-foreground: #ffffff; /* hsl(0 0% 100%) */

//   --destructive: #9a1c1c; /* hsl(0 62.8% 30.6%) */
//   --destructive-foreground: #f9f9f9; /* hsl(0 85.7% 97.3%) */

//   --border: #333333; /* hsl(0 0% 20%) */
//   --input: #333333; /* hsl(0 0% 20%) */
//   --ring: #178a3f; /* hsl(142 70% 35%) */

//   /* Sidebar */
//   --sidebar-bg: rgba(38, 38, 38, 0.4); /* bg-muted/40 */
//   --sidebar-foreground: #b3b3b3; /* muted-foreground */

//   /* Charts */
//   --chart-1: #1db954; /* hsl(142 70% 45%) */
//   --chart-2: #3385ff; /* hsl(220 70% 50%) */
//   --chart-3: #ff9933; /* hsl(30 80% 55%) */
//   --chart-4: #a34dff; /* hsl(280 65% 60%) */
//   --chart-5: #e63d73; /* hsl(340 75% 55%) */
//   --chart-6: #ffee80; /* hsl(50 80% 65%) */
// }
