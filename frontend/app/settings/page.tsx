export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="page-kicker">Settings</p>
        <h1 className="page-title text-2xl">Account preferences</h1>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4">
          <h2 className="text-base font-semibold text-white">Profile</h2>
          <div className="mt-4 space-y-3">
            <div>
              <label className="mb-1.5 block text-sm text-slate-300">Full name</label>
              <input defaultValue="Alex Johnson" className="app-form-input py-2.5" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-slate-300">Email</label>
              <input defaultValue="alex@cyberprep.ai" className="app-form-input py-2.5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4">
          <h2 className="text-base font-semibold text-white">Preferences</h2>
          <div className="mt-4 space-y-2.5 text-slate-300">
            <label className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 px-3 py-2.5">
              <span className="text-sm">Study reminders</span>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </label>
            <label className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 px-3 py-2.5">
              <span className="text-sm">AI tutor suggestions</span>
              <input type="checkbox" defaultChecked className="h-4 w-4" />
            </label>
            <label className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 px-3 py-2.5">
              <span className="text-sm">Assessment notifications</span>
              <input type="checkbox" className="h-4 w-4" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
