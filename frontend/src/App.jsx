// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import DivisiPage from "./pages/DivisiPage";
import DivisiP from "./pages/DivisiP"; // 1. Tambahkan import komponen DivisiP di sini
import DivisiIP from "./pages/DivisiIP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route Induk: Memanggil Layout (Sidebar & Header) */}
        <Route path="/" element={<Layout />}>
          {/* Route Anak: Akan masuk ke dalam <Outlet /> di Layout */}
          <Route index element={<Overview />} />

          <Route path="divisi-ip" element={<DivisiIP />} />

          <Route
            path="divisi-ks"
            element={<DivisiPage namaDivisi="Divisi KS" />}
          />

          {/* 2. Ubah baris ini untuk menggunakan komponen DivisiP yang baru */}
          <Route path="divisi-p" element={<DivisiP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
