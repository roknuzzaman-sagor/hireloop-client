"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import logo from '@/public/images/logo.png'
import Link from "next/link";

export default function Navbar() {
  return (
    // Changed px-6 to px-4 for mobile, px-6 for desktop
    <header className="w-full bg-[#1c1c1e] px-4 py-4 md:px-6">
      {/* Floating Rounded Container */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl bg-[#27272a] px-4 shadow-sm md:px-6">
        
        {/* 1. LOGO SECTION (Fixed Next.js Image Implementation) */}
       <Link href='/'> <Image 
            src={logo} 
            alt="Hireloop Logo"  
            width={140} // Base width (used to calculate aspect ratio)
            height={40} // Base height 
            className="h-7 w-auto object-contain md:h-8" // Responsive height
            priority // Tells Next.js to load this immediately
          /></Link>

        {/* 2. CENTER NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Browse Jobs
          </a>
          <a href="#" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Company
          </a>
          <a href="#" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Pricing
          </a>
        </nav>

        {/* 3. RIGHT ACTIONS */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Sign In Link (Hidden on very small screens) */}
          <a 
            href="#" 
            className="hidden sm:block text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Sign In
          </a>
          
          {/* Vertical Divider line (Hidden on very small screens) */}
          <Separator orientation="vertical" className="hidden sm:block h-6 bg-zinc-600/50" />

          {/* Primary Get Started Button */}
          <Button 
            className="rounded-full bg-indigo-600 px-4 text-xs sm:px-5 sm:text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_15px_rgba(79,70,229,0.4)]"
          >
            Get Started
          </Button>
        </div>
        
      </div>
    </header>
  )
}