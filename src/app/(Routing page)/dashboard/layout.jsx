"use client"
import DashboardNav from '@/app/Components/DashboardNav'
import LargeSidebar from '@/app/Components/LargeSidebar'
import React from 'react'

export default function layout({ children }) {
    return (
        <>
            <DashboardNav />
            <div className='flex'>
                <LargeSidebar />
                <main className='lg:w-[70%]'> {children}</main>
            </div>


        </>
    )
}
