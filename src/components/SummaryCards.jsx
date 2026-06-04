// src/components/SummaryCards.jsx
import { FileText, Clock } from "lucide-react";
import { summaryData } from "../data/mockdata.js";

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
          <FileText size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Total Laporan IP</p>
          <h3 className="text-2xl font-bold text-gray-800">{summaryData.ip}</h3>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
        <div className="p-3 bg-green-50 text-green-600 rounded-lg">
          <FileText size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Total Laporan KS</p>
          <h3 className="text-2xl font-bold text-gray-800">{summaryData.ks}</h3>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
        <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
          <FileText size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Total Laporan P</p>
          <h3 className="text-2xl font-bold text-gray-800">{summaryData.p}</h3>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
        <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
          <Clock size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Update Terakhir</p>
          <h3 className="text-sm font-bold text-gray-800 mt-1">
            {summaryData.lastUpdate}
          </h3>
        </div>
      </div>
    </div>
  );
}
