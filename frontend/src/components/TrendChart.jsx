// src/components/TrendChart.jsx
import { Activity } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TrendChart({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-6">
        <Activity size={20} className="text-blue-600" /> Tren Laporan Mingguan
      </h3>
      <div className="h-80 w-full">
        {/* Tambahkan minWidth={1} minHeight={1} untuk menghilangkan warning kuning */}
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={1}
          minHeight={1}
        >
          <LineChart
            data={data}
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
            <Line
              type="monotone"
              dataKey="IP"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 4, fill: "#2563EB" }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="KS"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 4, fill: "#10B981" }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="P"
              stroke="#F59E0B"
              strokeWidth={3}
              dot={{ r: 4, fill: "#F59E0B" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
