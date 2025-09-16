import { ChevronDown, SidebarIcon } from "lucide-react";
import React from "react";

export const Dashboard = () => {
  return (
    <main className="p-5 flex-1">
      <div className="flex items-center gap-2.5 mb-7">
        <button className="p-2 rounded-sm flex items-center justify-center bg-muted text-muted-foreground">
          <SidebarIcon size={18} />
        </button>
        <h1 className="text-start text-2xl font-semibold">Savings Summary</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="card bg-card text-card-foreground rounded-md p-5 flex flex-col gap-5 border border-border shadow-sm">
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, idx) => idx + 1).map((item) => {
              return (
                <div key={item} className="dropdown min-w-[200px] w-full">
                  <p className="mb-1.5">Filter {item}</p>
                  <div className="w-full h-10 rounded-md border border-border px-4 flex items-center justify-between bg-secondary text-secondary-foreground">
                    <span>All</span>
                    <ChevronDown size={18} className="text-muted-foreground" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-primary text-foreground font-semibold rounded-md px-4 h-10 text-sm py-2 flex items-center justify-center">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
