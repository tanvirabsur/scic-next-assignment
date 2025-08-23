import React from 'react'
import DashboardCTA from './DashboardCTA'

export default function LargeSidebar() {
    return (
        <aside
            className="hidden lg:block w-72 border-r border-base-200 bg-white min-h-[calc(100vh-4rem)] sticky top-16"
        >
            <nav className="p-4 space-y-3">
                <div className="text-sm text-neutral uppercase px-2 mb-2">Main</div>
                <ul className="space-y-1">
                    <li>
                        <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5" href="#">
                            <span className="w-6 text-center">🏠</span>
                            <span>Overview</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5" href="/dashboard/products">
                            <span className="w-6 text-center">📦</span>
                            <span>Products</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5" href="#">
                            <span className="w-6 text-center">🧾</span>
                            <span>Orders</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5" href="#">
                            <span className="w-6 text-center">⚙️</span>
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>

                <DashboardCTA/>
            </nav>
        </aside>
    )
}
