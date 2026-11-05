import { ArrowRight, BrainCircuit, CheckCircle2, GraduationCap, ShieldCheck, Target } from 'lucide-react'

const stats = [
  { label: 'Certifications', value: '5+' },
  { label: 'Practice Labs', value: '120+' },
  { label: 'Students', value: '2.4k' },
  { label: 'Avg. Score', value: '89%' },
]

const features = [
  {
    icon: BrainCircuit,
    title: 'AI Tutor',
    text: 'Get domain-aware explanations and revision guidance tailored to the selected certification.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Learning',
    text: 'Structured study paths, skill tracking, and role-based access for student-focused learning.',
  },
  {
    icon: Target,
    title: 'Practice Assessments',
    text: 'Targeted MCQs with score tracking and detailed explanations for every important topic.',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto max-w-7xl px-6 py-6">
        <nav className="flex items-center justify-between rounded-full border border-slate-800 bg-slate-900/80 px-5 py-3 shadow-glow backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold">CyberPrep AI</p>
            </div>
          </div>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#features">Features</a>
            <a href="#path">Study Path</a>
            <a href="#pricing">Pricing</a>
          </div>
          <button className="rounded-full border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Start Learning
          </button>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
            <GraduationCap className="h-4 w-4" />
            AI-powered cybersecurity prep
          </div>
          <h1 className="max-w-xl text-5xl font-bold tracking-tight text-white md:text-6xl">
            Learn smarter for your next cybersecurity certification.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate-300">
            CyberPrep AI helps students practice, review weak topics, and get contextual explanations from certified study content and AI-guided learning plans.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
              Explore Platform
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-full border border-slate-700 px-5 py-3 font-medium text-slate-200">
              View Demo
            </button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-glow">
                <p className="text-2xl font-bold text-cyan-300">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-glow">
          <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Student Dashboard</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-slate-900 p-3">
                <span className="text-slate-300">Security+ Progress</span>
                <span className="font-semibold text-cyan-300">72%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Weak Topics</p>
                  <p className="mt-2 text-sm text-slate-100">Access Control</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Next Focus</p>
                  <p className="mt-2 text-sm text-slate-100">Network Security</p>
                </div>
              </div>
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3">
                <div className="flex items-center gap-2 text-cyan-200">
                  <CheckCircle2 className="h-4 w-4" />
                  AI recommendation ready
                </div>
                <p className="mt-2 text-sm text-slate-200">Complete 2 revision tasks and 1 short practice set to improve this week.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Platform Features</p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">Built for practical cybersecurity prep</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="mb-5 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="path" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Study Path</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              'Choose certification and domains',
              'Practice targeted assessments',
              'Track weaknesses and study plan',
            ].map((item, index) => (
              <div key={item} className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5">
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
                  {index + 1}
                </div>
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
