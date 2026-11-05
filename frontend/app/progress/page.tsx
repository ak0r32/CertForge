const mastery = [
  { name: 'Threats', score: 82 },
  { name: 'Identity & Access', score: 56 },
  { name: 'Network Security', score: 76 },
  { name: 'Cloud Security', score: 48 },
]

const activity = [48, 62, 58, 70, 76, 88, 91]

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Learning progress</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Analytics overview</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ['Overall mastery', '74%'],
          ['Certifications', '3'],
          ['Completed domains', '10'],
          ['Weak topics', '3'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-3 text-3xl font-bold text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <h2 className="text-xl font-semibold text-white">Weekly learning activity</h2>
          <div className="mt-5 flex h-52 items-end gap-3">
            {activity.map((value, index) => (
              <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-500 to-blue-500" style={{ height: `${value}%` }} />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <h2 className="text-xl font-semibold text-white">Domain performance</h2>
          <div className="mt-5 space-y-4">
            {mastery.map((item) => (
              <div key={item.name}>
                <div className="mb-1 flex justify-between text-sm text-slate-300">
                  <span>{item.name}</span>
                  <span>{item.score}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-cyan-500" style={{ width: `${item.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
