// ...existing code...
"use client";

import DashboardContent from "@/app/Components/DashboardContent";
import DashboardNav from "@/app/Components/DashboardNav";
import LargeSidebar from "@/app/Components/LargeSidebar";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // lock scroll & close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-base-200">
      {/* Top Nav */}
      <DashboardNav/>

      <div className="flex">
        {/* Sidebar - permanent on lg, hidden on small */}
        <LargeSidebar/>

        {/* Mobile Drawer (overlay) */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/40 transition-opacity"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <aside className="relative w-72 bg-white h-full shadow-xl p-4 overflow-auto transform transition-transform duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="font-bold">Brand</div>
                <button className="btn btn-ghost btn-square" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="space-y-3">
                <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5" href="#">🏠 Overview</a>
                <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5" href="#">📦 Products</a>
                <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5" href="#">🧾 Orders</a>
                <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5" href="#">⚙️ Settings</a>
              </nav>
            </aside>
          </div>
        )}

        {/* Main content */}
        <DashboardContent/>
      </div>
    </div>
  );
}
// ...existing code...