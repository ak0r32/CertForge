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
        <aside className={`${mobileOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-30 w-72 border-r border-slate-800 bg-slate-950/95 p-4 transition-transform lg:static lg:translate-x-0`}>
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">CyberPrep AI</p>
            </div>
          </div>

          <nav className="mt-6 space-y-2">
            {sidebarItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active ? 'bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-500/30' : 'text-slate-300 hover:bg-slate-900'}`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-medium text-cyan-200">
                AJ
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">Alex Johnson</p>
                <p className="text-xs text-slate-400">Student</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <button className="flex w-full items-center gap-2 rounded-xl px-2 py-2 text-sm text-slate-300 hover:bg-slate-800">
                <User className="h-4 w-4" />
                Account settings
              </button>
              <button className="flex w-full items-center gap-2 rounded-xl px-2 py-2 text-sm text-slate-300 hover:bg-slate-800">
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div className="flex items-center justify-between px-4 py-4 lg:px-8">
              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-slate-700 p-2 lg:hidden" onClick={() => setMobileOpen((value) => !value)}>
                  <Menu className="h-4 w-4" />
                </button>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">CyberPrep AI</p>
                  <h2 className="text-lg font-semibold text-white">{sidebarItems.find((item) => item.href === pathname)?.label || 'Overview'}</h2>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-200">Search</button>
                <button className="rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-200">Notifications</button>
                <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-200">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-200">AJ</div>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </header>

          <main className="px-4 py-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  )
}
