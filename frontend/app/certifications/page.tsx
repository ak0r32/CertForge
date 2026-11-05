import { ArrowRight, BookText, Search, ShieldCheck } from 'lucide-react'

const certifications = [
  { name: 'CompTIA Security+', exam: 'SY0-701', domains: 5, status: 'Enrolled', description: 'Core cybersecurity concepts, threat management, and secure operations.' },
  { name: 'CISSP', exam: '2025', domains: 8, status: 'New', description: 'Enterprise security architecture, governance, and risk management.' },
  { name: 'CEH', exam: '312-50', domains: 6, status: 'In progress', description: 'Ethical hacking, reconnaissance, and vulnerability assessment knowledge.' },
  { name: 'CompTIA Network+', exam: 'N10-008', domains: 4, status: 'New', description: 'Networking fundamentals, troubleshooting, and infrastructure essentials.' },
]

export default function CertificationsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Discover</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Certification library</h1>
        </div>
        <div className="flex w-full max-w-md items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3">
          <Search className="h-4 w-4 text-slate-400" />
          <input placeholder="Search certifications" className="w-full bg-transparent text-sm text-slate-200 outline-none placeholder:text-slate-500" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {certifications.map((cert) => (
          <div key={cert.name} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300">{cert.status}</span>
            </div>
            <p className="text-xl font-semibold text-white">{cert.name}</p>
            <p className="mt-1 text-sm text-cyan-300">{cert.exam}</p>
            <p className="mt-4 text-sm text-slate-300">{cert.description}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
              <span>{cert.domains} domains</span>
              <span>Updated</span>
            </div>
            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-500/15">
              Explore
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
