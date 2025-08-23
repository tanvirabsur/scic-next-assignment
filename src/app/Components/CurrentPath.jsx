"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

export default function CurrentPath() {
    const pathName = usePathname()
    console.log(pathName);
  return (
   <></>
  )
}
