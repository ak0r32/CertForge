const tasks = [
  { topic: 'Access Control', type: 'Learn', duration: '30 min', status: 'In progress' },
  { topic: 'Zero Trust', type: 'Revise', duration: '25 min', status: 'Scheduled' },
  { topic: 'Network Security', type: 'Practice', duration: '40 min', status: 'Pending' },
  { topic: 'Incident Response', type: 'Review mistakes', duration: '20 min', status: 'Completed' },
]

export default function StudyPlanPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Study planner</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Personalized plan</h1>
        </div>
        <button className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2.5 text-sm font-medium text-cyan-200">Generate plan</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tasks.map((task) => (
          <div key={task.topic} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-medium text-white">{task.topic}</p>
              <span className="text-xs text-cyan-300">{task.type}</span>
            </div>
            <p className="text-sm text-slate-300">{task.duration}</p>
            <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm text-slate-300">
              {task.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
