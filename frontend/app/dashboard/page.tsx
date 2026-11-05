import { ArrowRight, BookOpen, BrainCircuit, ChartColumnBig, ShieldCheck, Target } from 'lucide-react'

const summaryCards = [
  { label: 'Enrolled certifications', value: '3', tone: 'cyan' },
  { label: 'Overall progress', value: '72%', tone: 'blue' },
  { label: 'Practice tests', value: '12', tone: 'green' },
  { label: 'Avg. score', value: '88%', tone: 'violet' },
]

const certifications = [
  { name: 'CompTIA Security+', exam: 'SY0-701', progress: 72, completed: '10/14 domains', status: 'In progress' },
  { name: 'CISSP', exam: '2025', progress: 46, completed: '4/9 domains', status: 'Starting' },
  { name: 'CEH', exam: '312-50', progress: 61, completed: '6/12 domains', status: 'On track' },
]

const weakTopics = [
  { name: 'Access Control', domain: 'Identity & Access', accuracy: '58%' },
  { name: 'Cloud Security', domain: 'Security Architecture', accuracy: '49%' },
  { name: 'Malware Analysis', domain: 'Threats & Vulnerabilities', accuracy: '63%' },
]

const recommendations = [
  { topic: 'Zero Trust Architecture', reason: 'Improves weak domain coverage', duration: '35 min' },
  { topic: 'Wireless Security', reason: 'High-priority security domain', duration: '25 min' },
  { topic: 'Incident Response', reason: 'Recent assessment gaps', duration: '40 min' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Overview</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Welcome back, Alex</h1>
          <p className="mt-1 text-slate-400">Continue your cybersecurity learning journey.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 font-medium text-slate-950 transition hover:bg-cyan-400">
          Continue learning
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-4 text-3xl font-bold text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Certification progress</h2>
            <button className="text-sm text-cyan-300">View all</button>
          </div>
          <div className="space-y-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-white">{cert.name}</p>
                    <p className="text-sm text-slate-400">Exam: {cert.exam}</p>
                  </div>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    {cert.status}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>Progress</span>
                    <span>{cert.progress}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${cert.progress}%` }} />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-slate-400">{cert.completed}</span>
                  <button className="inline-flex items-center gap-1 text-cyan-300">Continue <ArrowRight className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Weak topics</h2>
            <Target className="h-5 w-5 text-cyan-300" />
          </div>
          <div className="space-y-4">
            {weakTopics.map((topic) => (
              <div key={topic.name} className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-white">{topic.name}</p>
                  <span className="text-cyan-300">{topic.accuracy}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{topic.domain}</p>
                <button className="mt-3 text-sm text-cyan-300">View recommendation</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <div className="mb-4 flex items-center gap-2">
            <ChartColumnBig className="h-5 w-5 text-cyan-300" />
            <h2 className="text-xl font-semibold text-white">Recommended learning</h2>
          </div>
          <div className="space-y-4">
            {recommendations.map((item) => (
              <div key={item.topic} className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-white">{item.topic}</p>
                  <span className="text-xs text-slate-400">{item.duration}</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{item.reason}</p>
                <button className="mt-3 inline-flex items-center gap-1 text-sm text-cyan-300">
                  Start learning
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <div className="mb-5 flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-cyan-300" />
            <h2 className="text-xl font-semibold text-white">Learning analytics</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Weekly study activity</p>
              <div className="mt-4 flex items-end gap-2">
                {[38, 52, 50, 68, 60, 74, 93].map((value, idx) => (
                  <div key={idx} className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500 to-blue-500" style={{ height: `${value}px` }} />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Domain mastery</p>
              <div className="mt-5 space-y-3">
                {[
                  ['Threats', 82],
                  ['Access Control', 57],
                  ['Network Security', 76],
                  ['Cloud Security', 49],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-1 flex justify-between text-xs text-slate-300">
                      <span>{label}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-full rounded-full bg-cyan-500" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
