// src/components/Sidebar.jsx
import { LayoutDashboard, BarChart3, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
      <div className="h-16 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-xl font-bold tracking-wider">DASHBOARD</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2 mt-4">
        <a
          href="#"
          className="flex items-center gap-3 bg-blue-600 px-4 py-3 rounded-lg text-white font-medium shadow-md"
        >
          <LayoutDashboard size={20} /> Overview
        </a>
        <a
          href="#"
          className="flex items-center gap-3 hover:bg-slate-800 text-slate-300 hover:text-white px-4 py-3 rounded-lg transition-colors"
        >
          <BarChart3 size={20} /> Divisi IP
        </a>
        <a
          href="#"
          className="flex items-center gap-3 hover:bg-slate-800 text-slate-300 hover:text-white px-4 py-3 rounded-lg transition-colors"
        >
          <BarChart3 size={20} /> Divisi KS
        </a>
        <a
          href="#"
          className="flex items-center gap-3 hover:bg-slate-800 text-slate-300 hover:text-white px-4 py-3 rounded-lg transition-colors"
        >
          <BarChart3 size={20} /> Divisi P
        </a>
      </nav>
      <div className="p-4 border-t border-slate-700">
        <a
          href="#"
          className="flex items-center gap-3 hover:bg-slate-800 text-slate-300 hover:text-white px-4 py-3 rounded-lg transition-colors"
        >
          <Settings size={20} /> Pengaturan
        </a>
      </div>
    </aside>
  );
}
