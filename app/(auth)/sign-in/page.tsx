"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, Lock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/Navbar" // <-- Import your Navbar
import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    const {data, error} = await authClient.signIn.email({
      email,
      password,
      rememberMe:true,
      callbackURL:'/'
    })
    
      console.log(data,error);
  }

  return (
    // Changed to flex-col to stack Navbar on top and form in the middle
    <div className="flex min-h-screen flex-col bg-[#09090b] text-white">
      
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. MAIN FORM AREA */}
      <main className="relative flex flex-1 items-center justify-center px-4 py-12">
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/5 bg-[#121214] p-8 shadow-2xl sm:p-10">
          
         

          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Enter your email to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-[#18181b] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <Link href="/forgot-password" className="text-xs font-medium text-indigo-400 hover:text-indigo-300">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 bg-[#18181b] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-indigo-500"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 rounded-xl bg-indigo-600 text-sm font-semibold text-white transition-all hover:bg-indigo-500 disabled:opacity-70"
            >
              {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing In...</> : "Sign In"}
            </Button>
            {/* 👇 THIS IS THE TEXT YOU REQUESTED */}
          <div className="mt-8 text-center text-sm text-gray-400">
            New to hireloop?{" "}
            <Link href="/sign-up" className="font-semibold text-indigo-400 hover:text-indigo-300 hover:underline">
              Create an account
            </Link>
          </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default SignInPage