export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="page-kicker">Settings</p>
        <h1 className="page-title">Account preferences</h1>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
          <h2 className="text-lg font-semibold text-white">Profile</h2>
          <div className="mt-5 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Full name</label>
              <input defaultValue="Alex Johnson" className="app-form-input" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">Email</label>
              <input defaultValue="alex@cyberprep.ai" className="app-form-input" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
          <h2 className="text-lg font-semibold text-white">Preferences</h2>
          <div className="mt-5 space-y-3 text-slate-300">
            <label className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 px-3.5 py-3">
              <span>Study reminders</span>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </label>
            <label className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 px-3.5 py-3">
              <span>AI tutor suggestions</span>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </label>
            <label className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 px-3.5 py-3">
              <span>Assessment notifications</span>
              <input type="checkbox" className="h-4 w-4" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
