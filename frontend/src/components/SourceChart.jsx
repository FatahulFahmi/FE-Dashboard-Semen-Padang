// src/components/SourceChart.jsx
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as PieTooltip,
} from "recharts";
import { Database } from "lucide-react";

export default function SourceChart({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-1 flex flex-col">
      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-6">
        <Database size={20} className="text-blue-600" /> Sumber Data
      </h3>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={1}
          minHeight={1}
        >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="transparent"
                />
              ))}
            </Pie>
            <PieTooltip
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600 font-medium">
                {item.name}
              </span>
            </div>
            <span className="text-sm font-bold text-gray-800">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
