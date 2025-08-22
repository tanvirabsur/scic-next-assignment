"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white shadow-md sticky w-full z-20 top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold ">
                        Next Store
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                            Home
                        </Link>
                        <Link href="/shop" className="text-gray-700 hover:text-blue-600 transition">
                            Shop
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-md">
                    <div className="px-4 py-3 space-y-2">
                        <Link
                            href="/"
                            className="block text-gray-700 hover:text-blue-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className="block text-gray-700 hover:text-blue-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Shop
                        </Link>
                        <Link
                            href="/about"
                            className="block text-gray-700 hover:text-blue-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-gray-700 hover:text-blue-600 transition"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
