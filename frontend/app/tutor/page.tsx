const conversation = [
  { role: 'assistant', text: 'How can I help you with Security+ today?' },
  { role: 'user', text: 'Explain the difference between symmetric and asymmetric encryption.' },
  { role: 'assistant', text: 'Symmetric encryption uses one shared key for both encryption and decryption, while asymmetric encryption uses a public and private key pair. This makes asymmetric encryption useful for secure key exchange, while symmetric encryption is faster for bulk data encryption.' },
]

export default function TutorPage() {
  return (
    <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
      <aside className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">AI tutor</p>
          <h1 className="mt-2 text-2xl font-bold text-white">Security+ Tutor</h1>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Certification</p>
            <p className="mt-1 font-medium text-white">CompTIA Security+</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Exam version</p>
            <p className="mt-1 font-medium text-white">SY0-701</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Domain</p>
            <p className="mt-1 font-medium text-white">Cryptography</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Topic</p>
            <p className="mt-1 font-medium text-white">Encryption Concepts</p>
          </div>
        </div>
      </aside>

      <main className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
        <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-xl font-semibold text-white">Conversation</h2>
          <button className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-300">New chat</button>
        </div>

        <div className="space-y-4">
          {conversation.map((message, index) => (
            <div key={index} className={`max-w-3xl rounded-2xl border p-4 ${message.role === 'assistant' ? 'border-cyan-500/25 bg-cyan-500/10 text-slate-100' : 'ml-auto border-slate-700 bg-slate-950 text-slate-100'}`}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">{message.role === 'assistant' ? 'AI Tutor' : 'You'}</p>
              <p className="mt-2 text-slate-200">{message.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/50 p-3">
          <textarea placeholder="Ask anything about cybersecurity..." className="min-h-[110px] w-full resize-none bg-transparent text-slate-200 outline-none placeholder:text-slate-500" />
          <div className="mt-3 flex items-center justify-between">
            <div className="text-xs text-slate-400">Use certified study content when available</div>
            <button className="rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950">Send</button>
          </div>
        </div>
      </main>
    </div>
  )
}
