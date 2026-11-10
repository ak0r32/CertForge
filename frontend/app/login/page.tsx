"use client"

import { Eye, EyeOff, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const benefits = [
  'AI-powered tutoring for complex security concepts',
  'Certification-specific study tracking',
  'Focused practice with weak-topic insights',
]

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-8 sm:px-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_18px_40px_rgba(2,6,23,0.42)] lg:grid-cols-2">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-5 sm:p-6 lg:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">CyberPrep AI</p>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="mt-2 max-w-md text-sm text-slate-400">
            Continue building your cybersecurity expertise with personalized practice, tutoring, and certification tracking.
          </p>

          <div className="mt-6 space-y-2.5">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-2.5">
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-6 lg:p-8">
          <div className="mb-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-300">Sign in</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Log in to your account</h2>
          </div>

          <form className="space-y-3.5">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-200">Email</label>
              <input id="email" type="email" placeholder="you@example.com" className="app-form-input py-2.5" />
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-slate-200">Password</label>
                <button type="button" className="text-xs text-cyan-300">Forgot password?</button>
              </div>
              <div className="relative">
                <input id="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="app-form-input py-2.5 pr-11" />
                <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-300">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-950" />
              Remember me
            </label>

            <button type="submit" className="app-button-primary w-full px-4 py-2.5 text-sm">
              Log in
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-400">
            Don’t have an account?{' '}
            <Link href="/register" className="font-medium text-cyan-300">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
