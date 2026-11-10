"use client"

import { Eye, EyeOff, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-8 sm:px-6">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_18px_40px_rgba(2,6,23,0.42)]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-5 sm:p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">CyberPrep AI</p>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white">Create your account</h1>
            <p className="mt-2 text-sm text-slate-400">Build a structured path for your next cybersecurity certification with AI-guided support.</p>

            <div className="mt-6 space-y-2.5 text-sm text-slate-300">
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-2.5">AI tutor for difficult exam topics</div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-2.5">Personalized practice and weak-topic tracking</div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-2.5">Study plans aligned to your goals</div>
            </div>
          </div>

          <div className="p-5 sm:p-6 lg:p-8">
            <div className="mb-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-300">Register</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Get started</h2>
            </div>

            <form className="space-y-3.5">
              <div>
                <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-slate-200">Full name</label>
                <input id="fullName" type="text" placeholder="John Smith" className="app-form-input py-2.5" />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-200">Email</label>
                <input id="email" type="email" placeholder="you@example.com" className="app-form-input py-2.5" />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-200">Password</label>
                  <div className="relative">
                    <input id="password" type={showPassword ? 'text' : 'password'} placeholder="Create a password" className="app-form-input py-2.5 pr-11" />
                    <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-slate-200">Confirm</label>
                  <div className="relative">
                    <input id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} placeholder="Repeat password" className="app-form-input py-2.5 pr-11" />
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

              <button type="submit" className="app-button-primary w-full px-4 py-2.5 text-sm">
                Create account
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-400">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-cyan-300">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
