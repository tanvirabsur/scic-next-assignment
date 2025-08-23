// ...existing code...
"use client";
import DashboardContent from "@/app/Components/DashboardContent";
import DashboardNav from "@/app/Components/DashboardNav";
import LargeSidebar from "@/app/Components/LargeSidebar";
import React from "react";

export default function Dashboard() {
  

  return (
    <div className="min-h-screen bg-base-200">
      <DashboardNav/>

      <div className="flex">
        <LargeSidebar/>
        <DashboardContent/>
      </div>
      
    </div>
  );
}
// ...existing code...