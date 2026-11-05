"use client"

import { Eye, EyeOff, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-cyan-950/30">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-8 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-semibold text-white">CyberPrep AI</p>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white">Create your account</h1>
            <p className="mt-3 text-slate-400">Build a structured path for your next cybersecurity certification with AI-guided support.</p>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">AI tutor for difficult exam topics</div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">Personalized practice and weak-topic tracking</div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">Study plans aligned to your goals</div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Register</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Get started</h2>
            </div>

            <form className="space-y-5">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-200">Full name</label>
                <input id="fullName" type="text" placeholder="John Smith" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-500" />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Email</label>
                <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-500" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">Password</label>
                  <div className="relative">
                    <input id="password" type={showPassword ? 'text' : 'password'} placeholder="Create a password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 pr-11 text-slate-100 outline-none transition focus:border-cyan-500" />
                    <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-200">Confirm</label>
                  <div className="relative">
                    <input id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} placeholder="Repeat password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 pr-11 text-slate-100 outline-none transition focus:border-cyan-500" />
                    <button type="button" onClick={() => setShowConfirmPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <label className="flex items-center gap-2 text-sm text-slate-300">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-950" />
                I agree to the terms and privacy policy
              </label>

              <button type="submit" className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
                Create account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-cyan-300">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
