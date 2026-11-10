const mastery = [
  { name: 'Threats', score: 82 },
  { name: 'Identity & Access', score: 56 },
  { name: 'Network Security', score: 76 },
  { name: 'Cloud Security', score: 48 },
]

const activity = [48, 62, 58, 70, 76, 88, 91]
const metrics = [
  ['Overall mastery', '74%'],
  ['Certifications', '3'],
  ['Completed domains', '10'],
  ['Weak topics', '3'],
]

export default function ProgressPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="page-kicker">Learning progress</p>
        <h1 className="page-title text-2xl">Analytics overview</h1>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        {metrics.map(([label, value]) => (
          <div key={label} className="metric-card !min-h-[92px] p-3">
            <p className="text-xs text-slate-400">{label}</p>
            <p className="mt-3 text-2xl font-bold text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4">
          <h2 className="text-base font-semibold text-white">Weekly learning activity</h2>
          <div className="mt-4 flex h-28 items-end gap-1.5 sm:gap-2">
            {activity.map((value, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500 to-blue-500 shadow-[0_8px_16px_rgba(34,211,238,0.18)]"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4">
          <h2 className="text-base font-semibold text-white">Domain performance</h2>
          <div className="mt-4 space-y-3">
            {mastery.map((item) => (
              <div key={item.name}>
                <div className="mb-1 flex justify-between text-xs text-slate-300">
                  <span>{item.name}</span>
                  <span>{item.score}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
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
