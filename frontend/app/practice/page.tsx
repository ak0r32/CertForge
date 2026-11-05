const questions = [
  {
    id: 1,
    question: 'Which control helps protect data in transit?',
    options: ['Firewall', 'VPN', 'Patch management', 'Antivirus'],
    correct: 'VPN',
  },
  {
    id: 2,
    question: 'What is the primary goal of least privilege?',
    options: ['Reduce cost', 'Minimize attack surface', 'Increase speed', 'Improve patching'],
    correct: 'Minimize attack surface',
  },
]

export default function PracticePage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Practice lab</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Security assessment</h1>
          </div>
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">Question 1 of 2</div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
        <p className="text-lg font-medium text-white">{questions[0].question}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {questions[0].options.map((option) => (
            <button key={option} className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-left text-slate-200 transition hover:border-cyan-500/50 hover:bg-slate-900">
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button className="rounded-xl border border-slate-700 px-4 py-2 text-slate-200">Previous</button>
          <div className="flex gap-3">
            <button className="rounded-xl border border-slate-700 px-4 py-2 text-slate-200">Mark for review</button>
            <button className="rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
