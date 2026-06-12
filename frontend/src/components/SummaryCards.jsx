// src/components/SummaryCards.jsx
import { FileText, Clock } from "lucide-react";
// HAPUS import mockData di sini

// Tambahkan parameter { data } untuk menangkap "lemparan" dari Overview
export default function SummaryCards({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Card IP */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
          <FileText size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Divisi IP</p>
          <h3 className="text-2xl font-bold text-gray-800">
            {data.ip} Laporan
          </h3>
        </div>
      </div>

      {/* Card KS */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
        <div className="p-3 bg-green-50 text-green-600 rounded-lg">
          <FileText size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Divisi KS</p>
          <h3 className="text-2xl font-bold text-gray-800">
            {data.ks} Laporan
          </h3>
        </div>
      </div>

      {/* Card P */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
        <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
          <FileText size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Divisi P</p>
          <h3 className="text-2xl font-bold text-gray-800">{data.p} Laporan</h3>
        </div>
      </div>

      {/* Card Update Terakhir */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
        <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
          <Clock size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Update Terakhir</p>
          <h3 className="text-sm font-bold text-gray-800 mt-1">
            {data.lastUpdate}
          </h3>
        </div>
      </div>
    </div>
  );
}
