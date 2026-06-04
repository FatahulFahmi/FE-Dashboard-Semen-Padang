// src/components/LogTable.jsx
import { List } from "lucide-react";
import { recentLogs } from "../data/mockdata";

export default function LogTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
        <List size={20} className="text-blue-600" /> Log Data Terbaru
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 rounded-t-lg">
            <tr>
              <th className="px-4 py-3">ID Log</th>
              <th className="px-4 py-3">Divisi</th>
              <th className="px-4 py-3">Platform</th>
              <th className="px-4 py-3">Tanggal</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentLogs.map((log, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">
                  {log.id}
                </td>
                <td className="px-4 py-3 font-bold text-blue-600">
                  {log.divisi}
                </td>
                <td className="px-4 py-3">{log.sumber}</td>
                <td className="px-4 py-3">{log.tanggal}</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
