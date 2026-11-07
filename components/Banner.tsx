"use client"

import * as React from "react"
import Image from "next/image"
import { Search, MapPin, Briefcase, Building2, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import globe from "@/public/images/globe.png"

export default function Banner() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#09090b] text-white pt-24 pb-12">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 flex flex-col items-center">
        
        {/* 1. TOP BADGE */}
        <div className="flex items-center gap-4 mb-6">
          <div className="hidden sm:block h-px w-12 bg-white/20" />
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <Briefcase className="h-4 w-4 text-orange-500" />
            <span className="text-xs font-semibold text-white">50,000+</span>
            <span className="text-[10px] font-medium tracking-wider text-gray-400 uppercase">New Jobs This Month</span>
          </div>
          <div className="hidden sm:block h-px w-12 bg-white/20" />
        </div>

        {/* 2. HEADINGS */}
        <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl max-w-3xl">
          Find Your Dream Job Today
        </h1>
        <p className="mt-4 max-w-2xl text-center text-sm md:text-base text-gray-400">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>

        {/* 3. SEARCH BAR */}
        <div className="mt-8 w-full max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center gap-2 rounded-2xl bg-[#18181b] p-2 shadow-xl border border-white/5">
            
            {/* Job Title Input */}
            <div className="flex w-full items-center gap-2 px-3 sm:w-1/2">
              <Search className="h-5 w-5 text-gray-500 shrink-0" />
              <Input 
                type="text" 
                placeholder="Job title, skill or company" 
                className="border-0 bg-transparent text-white placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 px-0"
              />
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-white/10" />

            {/* Location Input */}
            <div className="flex w-full items-center gap-2 px-3 sm:w-1/2">
              <MapPin className="h-5 w-5 text-gray-500 shrink-0" />
              <Input 
                type="text" 
                placeholder="Location or Remote" 
                className="border-0 bg-transparent text-white placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 px-0"
              />
            </div>

            {/* Search Button */}
            <Button className="w-full sm:w-auto h-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 shrink-0">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* 4. TRENDING TAGS */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-gray-500 mr-1">Trending Position</span>
          {["Product Designer", "AI Engineering", "DevOps Engineer"].map((tag) => (
            <button 
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 5. GLOBE SECTION */}
        <div className="relative mt-20 w-full max-w-4xl flex justify-center">
          <div className="relative w-full max-w-3xl flex flex-col items-center">
            
            {/* Soft Blue/Indigo Glow behind the globe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Globe Image with Mask to remove the pink background */}
            <Image 
              src={globe} 
              alt="Globe" 
              className="relative z-10 w-full h-200 object-contain mix-blend-screen opacity-90 [mask-image:linear-gradient(to_bottom,transparent_0%,black_40%,black_100%)]"
              priority
            />

            {/* Text Overlay on Globe */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full text-center px-4 z-20">
              <p className="text-xl md:text-3xl font-medium text-white/90 drop-shadow-lg">
                Assisting over 15,000 job seekers<br />
                find their dream positions.
              </p>
            </div>
          </div>
        </div>

        {/* 6. STATS CARDS */}
        <div className="relative z-20 -mt-16 w-full max-w-6xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          <StatCard icon={<Briefcase />} value="50K" label="Active Jobs" />
          <StatCard icon={<Building2 />} value="12K" label="Companies" />
          <StatCard icon={<Users />} value="2M" label="Job Seekers" />
          <StatCard icon={<Star />} value="97%" label="Satisfaction Rate" />

        </div>

      </div>
    </section>
  )
}

/* --- Helper Component for Stats Cards --- */
function StatCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <Card className="bg-[#121214] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
      <CardContent className="p-6 flex flex-col gap-6">
        {/* Icon Container */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-300">
          {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5" })}
        </div>
        
        {/* Text Container */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
          <p className="text-sm text-gray-500 font-medium">{label}</p>
        </div>
      </CardContent>
    </Card>
  )
}