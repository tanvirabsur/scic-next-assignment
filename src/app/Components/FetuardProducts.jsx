"use client"
import React, { useEffect } from 'react'

export default function FetuardProducts() {
    useEffect(async()=>{
        const res = await fetch('/products.json')
        const data =await res.json()
        console.log(data)
    },[]) 
  return (
    <></>
  )
}
