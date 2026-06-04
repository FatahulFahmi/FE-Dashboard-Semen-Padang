import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Calendar,
  User,
  FileText,
  Clock,
  Activity,
  PieChart as PieChartIcon,
  List,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
// Pastikan semua data di-import dari mockData
import {
  summaryData,
  trendData,
  sourceData,
  recentLogs,
} from "./data/mockdata";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR KIRI */}
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

      {/* AREA KONTEN UTAMA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 z-10 shrink-0">
          <h2 className="text-xl font-semibold text-gray-800">
            Overview Kinerja
          </h2>
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

        {/* AREA KANVAS (Scrollable) */}
        <main className="flex-1 overflow-y-auto bg-slate-50 p-6">
          {/* BARIS 1: Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Laporan IP
                </p>
                <h3 className="text-2xl font-bold text-gray-800">
                  {summaryData.ip}
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
              <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Laporan KS
                </p>
                <h3 className="text-2xl font-bold text-gray-800">
                  {summaryData.ks}
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Laporan P
                </p>
                <h3 className="text-2xl font-bold text-gray-800">
                  {summaryData.p}
                </h3>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Update Terakhir
                </p>
                <h3 className="text-sm font-bold text-gray-800 mt-1">
                  {summaryData.lastUpdate}
                </h3>
              </div>
            </div>
          </div>

          {/* BARIS 2: Line Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <Activity size={20} className="text-blue-600" /> Tren Laporan
                Mingguan
              </h3>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={trendData}
                  margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#E5E7EB"
                  />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                    dx={-10}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: "20px" }} />
                  <Line
                    type="monotone"
                    dataKey="IP"
                    stroke="#2563EB"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="KS"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="P"
                    stroke="#F59E0B"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* BARIS 3 & 4: Pie Chart & Tabel (Grid 2 Kolom) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">
            {/* Pie Chart (Kiri - 1 Kolom) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-1">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
                <PieChartIcon size={20} className="text-blue-600" /> Sumber Data
              </h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Tabel Log (Kanan - 2 Kolom) */}
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
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
