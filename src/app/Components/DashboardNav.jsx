import React, { useEffect, useState } from 'react'

export default function DashboardNav() {
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
        <>
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-base-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            {/* Mobile menu button (hidden on lg and up) */}
                            <button
                                aria-label="Open menu"
                                onClick={() => setMobileOpen(true)}
                                className="btn btn-ghost btn-square lg:hidden"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="font-bold text-lg">Brand</div>
                                <div className="text-sm text-neutral">Dashboard</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2">
                                <input type="text" placeholder="Search" className="input input-sm input-bordered" />
                            </div>

                            <button className="btn btn-ghost btn-square">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" />
                                </svg>
                            </button>

                            <div className="avatar">
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center">U</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

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
        </>



    )
}
