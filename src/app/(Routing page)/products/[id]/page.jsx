"use client";
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const {id} = useParams()
    // console.log(id);
    return (
        
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
            <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Product Image */}
                <div className="h-80 w-full">
                    <img
                        src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        alt="Product Image"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                        Product Name #{id}
                    </h1>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        This is a detailed description of the product. It highlights all the
                        features, specifications, and qualities that make it special. Perfect
                        for an elegant product details page with a clean and modern UI.
                    </p>
                    <p className="text-2xl font-bold text-purple-600 mb-6">$99.99</p>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all">
                            Add to Cart
                        </button>
                        <button className="px-6 py-3 rounded-xl font-semibold border border-purple-600 text-purple-600 hover:bg-purple-100 transition-all">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
