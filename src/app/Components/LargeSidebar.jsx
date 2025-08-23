import React from 'react'

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
                        <a className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5" href="#">
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

                <div className="divider my-4"></div>

                <div className="text-sm text-neutral uppercase px-2 mb-2">Quick actions</div>
                <div className="flex flex-col gap-2 px-2">
                    <button className="btn btn-primary btn-sm">New Product</button>
                    <button className="btn btn-outline btn-sm">Export</button>
                </div>
            </nav>
        </aside>
    )
}
