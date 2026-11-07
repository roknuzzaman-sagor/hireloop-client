"use client"

import * as React from "react"
import Link from "next/link"
import { User, Mail, Lock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/Navbar"
import { authClient } from "@/lib/auth-client"

const SignUpPage = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null) // ✅ new

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: "sign-in",
      })

      if (error) {
        // ✅ surface the API error to the user
        setError(error.message ?? "Failed to create account")
        
      }

      console.log("Sign up success:", data)
      // optional: redirect, toast, etc.
    } catch (err) {
      // ✅ catch network / unexpected errors
      setError("Something went wrong. Please try again.")
      console.error(err)
    } finally {
      // ✅ always stop the spinner, no matter what happened
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#09090b] text-white">
      <Navbar />

      <main className="relative flex flex-1 items-center justify-center px-4 py-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/5 bg-[#121214] p-8 shadow-2xl sm:p-10">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Create an account
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Join HireLoop and find your dream job
            </p>
          </div>

          {/* ✅ visible error message */}
          {error && (
            <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength={2}
                  className="pl-10 bg-[#18181b] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-indigo-500"
                />
              </div>
            </div>

            {/* email */}
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

            {/* password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}  
                  maxLength={128} 
                  className="pl-10 bg-[#18181b] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-indigo-500"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 mt-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white transition-all hover:bg-indigo-500 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>

            <div className="mt-8 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-semibold text-indigo-400 hover:text-indigo-300 hover:underline"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default SignUpPage