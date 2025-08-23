import React from 'react'
import Table from './Table'
import Link from 'next/link'

export default function DashboardContent() {
    return (
        <main className="flex-1">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <p className="text-sm text-neutral mt-1">Welcome back — here's what's happening with your store.</p>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <button className="btn btn-ghost">Share</button>
                        <Link className="btn btn-primary" href={'/dashboard/createproduct'}>Create</Link>
                        {/* <button >Create</button> */}
                    </div>
                </div>

                {/* KPI cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="card bg-white shadow-sm p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm text-neutral">Revenue</div>
                                <div className="text-xl font-semibold">$12,430</div>
                            </div>
                            <div className="text-2xl">💰</div>
                        </div>
                    </div>

                    <div className="card bg-white shadow-sm p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm text-neutral">Orders</div>
                                <div className="text-xl font-semibold">320</div>
                            </div>
                            <div className="text-2xl">📦</div>
                        </div>
                    </div>

                    <div className="card bg-white shadow-sm p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm text-neutral">Customers</div>
                                <div className="text-xl font-semibold">1,024</div>
                            </div>
                            <div className="text-2xl">🧑‍🤝‍🧑</div>
                        </div>
                    </div>

                    <div className="card bg-white shadow-sm p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm text-neutral">Conversion</div>
                                <div className="text-xl font-semibold">4.2%</div>
                            </div>
                            <div className="text-2xl">📈</div>
                        </div>
                    </div>
                </section>

                {/* Content grid */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="col-span-2 bg-white shadow-sm rounded-lg p-4">
                        <h2 className="font-semibold mb-3">Recent Orders</h2>
                        <div className="overflow-auto">
                            <Table/>
                        </div>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg p-4">
                        <h3 className="font-semibold mb-3">Activity</h3>
                        <ul className="steps steps-vertical">
                            <li className="step step-primary">New order received</li>
                            <li className="step">Payment processed</li>
                            <li className="step">Order shipped</li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}
