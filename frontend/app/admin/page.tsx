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
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Admin</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Operations dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-3 text-3xl font-bold text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Document management</h2>
          <button className="rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950">Upload PDF</button>
        </div>

        <div className="space-y-3">
          {documents.map((doc) => (
            <div key={doc.name} className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium text-white">{doc.name}</p>
                <p className="text-sm text-slate-400">{doc.certification}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300">{doc.status}</span>
                <button className="text-sm text-cyan-300">Reprocess</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
