"use client"

import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquareText,
  Notebook,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  User,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const sidebarItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/certifications', label: 'My Certifications', icon: BookOpen },
  { href: '/tutor', label: 'AI Tutor', icon: BrainCircuit },
  { href: '/practice', label: 'Practice Lab', icon: Target },
  { href: '/progress', label: 'Learning Progress', icon: BarChart3 },
  { href: '/study-plan', label: 'Study Planner', icon: Notebook },
  { href: '/admin', label: 'Admin', icon: ShieldCheck },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <aside
          className={`${mobileOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-30 w-72 border-r border-slate-800 bg-slate-950/95 p-3.5 transition-transform duration-200 lg:static lg:translate-x-0`}
        >
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-base font-semibold text-white">CyberPrep AI</p>
            </div>
          </div>

          <nav className="mt-5 space-y-1.5">
            {sidebarItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                    active
                      ? 'bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-cyan-200">
                AJ
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">Alex Johnson</p>
                <p className="text-[11px] text-slate-400">Student</p>
              </div>
            </div>
            <div className="mt-3 space-y-1.5">
              <button className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-sm text-slate-300 hover:bg-slate-800">
                <User className="h-4 w-4" />
                Account settings
              </button>
              <button className="flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-sm text-slate-300 hover:bg-slate-800">
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
            <div className="flex items-center justify-between px-4 py-3 lg:px-8">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  className="rounded-xl border border-slate-700 p-2 text-slate-200 lg:hidden"
                  onClick={() => setMobileOpen((value) => !value)}
                  aria-label="Toggle sidebar"
                >
                  <Menu className="h-4 w-4" />
                </button>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300">CyberPrep AI</p>
                  <h2 className="truncate text-base font-semibold text-white">
                    {sidebarItems.find((item) => item.href === pathname)?.label || 'Overview'}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button className="rounded-xl border border-slate-700 px-3 py-2 text-xs font-medium text-slate-200 sm:text-sm">
                  Search
                </button>
                <button className="rounded-xl border border-slate-700 px-3 py-2 text-xs font-medium text-slate-200 sm:text-sm">
                  Alerts
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-2.5 py-2 text-sm text-slate-200">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/15 text-[11px] font-medium text-cyan-200">
                    AJ
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </header>

          <main className="px-4 py-5 lg:px-8 lg:py-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
