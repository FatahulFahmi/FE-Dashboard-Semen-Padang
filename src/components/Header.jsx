// src/components/Header.jsx
import { Calendar, User } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 z-10 shrink-0">
      <h2 className="text-xl font-semibold text-gray-800">Overview Kinerja</h2>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
          <Calendar size={18} className="text-blue-600" />
          01 Jun - 07 Jun 2026
        </button>
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold border border-blue-200 cursor-pointer">
          <User size={20} />
        </div>
      </div>
    </header>
  );
}
