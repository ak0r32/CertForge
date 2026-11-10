const stats = [
  { label: 'Total users', value: '1,248' },
  { label: 'Certifications', value: '14' },
  { label: 'Documents', value: '83' },
  { label: 'Processing', value: '6' },
]

const documents = [
  { name: 'Security+ Study Guide.pdf', certification: 'CompTIA Security+', status: 'Processed' },
  { name: 'Network Fundamentals.pdf', certification: 'CompTIA Network+', status: 'Queued' },
  { name: 'CEH Lab Notes.pdf', certification: 'CEH', status: 'Processing' },
]

export default function AdminPage() {
  return (
    <div className="space-y-4">
      <div className="page-header mb-2">
        <p className="page-kicker">Admin</p>
        <h1 className="page-title text-2xl">Operations dashboard</h1>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="metric-card !min-h-[90px] p-3">
            <p className="text-xs text-slate-400">{item.label}</p>
            <p className="mt-3 text-2xl font-bold text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4">
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-base font-semibold text-white">Document management</h2>
          <button className="app-button-primary px-3.5 py-2 text-sm">Upload PDF</button>
        </div>

        <div className="space-y-2.5">
          {documents.map((doc) => (
            <div
              key={doc.name}
              className="flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-950/50 p-3 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-sm font-medium text-white">{doc.name}</p>
                <p className="text-xs text-slate-400">{doc.certification}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] text-slate-300">{doc.status}</span>
                <button className="text-xs text-cyan-300">Reprocess</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
