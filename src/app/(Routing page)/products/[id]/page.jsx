"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/products.json"); // public folder থেকে পড়া যাবে
        const data = await res.json();
        const singleProduct = data.find((p) => p.id == id);
        setProduct(singleProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!product) {
    return <p className="text-center text-white text-xl">Loading...</p>;
  }

  const { image, name, description, price } = product;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Product Image */}
        <div className="h-80 w-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <p className="text-2xl font-bold text-purple-600 mb-6">{price} BDT</p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 cursor-pointer rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all">
              Add to Cart
            </button>
            <button className="px-6 py-3 cursor-pointer rounded-xl font-semibold border border-purple-600 text-purple-600 hover:bg-purple-100 transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
