// src/App.jsx
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import TrendChart from "./components/TrendChart";
import SourceChart from "./components/SourceChart";
import LogTable from "./components/LogTable";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-slate-50 p-6">
          <SummaryCards />
          <TrendChart />

          {/* Grid 2 Kolom untuk Pie Chart dan Tabel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">
            <SourceChart />
            <LogTable />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
