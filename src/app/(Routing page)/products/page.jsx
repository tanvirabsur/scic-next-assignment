"use client"
import ProductCard from '@/app/Components/ProductCard'
import React, { useEffect, useState } from 'react'


export default function page() {
  const [products, setProducts] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await fetch("/products.json")
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching product:", error);

      }
    }
    fetchData()
  }, [])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {
        products.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}
