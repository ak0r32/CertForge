export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">404</p>
        <h1 className="mt-3 text-3xl font-bold text-white">Page not found</h1>
        <p className="mt-2 text-slate-400">This page is not available in the current MVP.</p>
      </div>
    </div>
  )
}
