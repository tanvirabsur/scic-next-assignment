import Link from 'next/link'
import React from 'react'

export default function DashboardCTA() {
    return (
        <>
            <div className="divider my-4"></div>

            <div className="text-sm text-neutral uppercase px-2 mb-2">Quick actions</div>
            <div className="flex flex-col gap-2 px-2">
                <Link className='btn btn-primary btn-sm' href={'/dashboard/createproduct'}>New Product</Link>
                
                <button className="btn btn-outline btn-sm">Export</button>
            </div>
        </>
    )
}
