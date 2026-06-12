// backend/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");

// Firebase Admin (Untuk Divisi P)
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./firebase-key.json");

// 1. Import Google APIs (Untuk Divisi IP)
const { google } = require("googleapis");

// Inisialisasi Firebase
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

app.use(cors());
app.use(express.json());

// --- RADAR REAL-TIME FIREBASE (Divisi P) ---
db.collection("divisi_p_logs").onSnapshot((snapshot) => {
  const logs = [];
  let readyToExecute = 0,
    waitingSparepart = 0,
    delayed = 0;

  snapshot.forEach((doc) => {
    const data = doc.data();
    logs.push(data);
    if (data.status === "Ready to Execute") readyToExecute += 1;
    else if (data.status === "Waiting Sparepart") waitingSparepart += 1;
    else if (data.status === "Delayed") delayed += 1;
  });

  io.emit("updateDataPlanner", {
    analitik_planner: {
      totalWorkOrder: logs.length,
      siapEksekusi: readyToExecute,
      menungguSparepart: waitingSparepart,
      tertunda: delayed,
      persentaseKesiapan:
        logs.length > 0
          ? Math.round((readyToExecute / logs.length) * 100) + "%"
          : "0%",
    },
    dataLogs: logs,
  });
});

// --- RADAR REAL-TIME GOOGLE SHEETS (POLLING) ---
let lastSheetData = ""; // Memori untuk menyimpan status data terakhir

setInterval(async () => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "A:F",
    });

    const rows = response.data.values;
    if (!rows || rows.length <= 1) return;

    // Format datanya persis seperti endpoint API
    const dataLogs = rows
      .slice(1)
      .map((row) => ({
        id: row[0] || "",
        area: row[1] || "",
        deskripsi: row[2] || "",
        prioritas: row[3] || "",
        tanggal: row[4] || "",
        status: row[5] || "",
      }))
      .filter((log) => log.id !== ""); // Singkirkan baris yang tidak sengaja kosong

    const currentDataString = JSON.stringify(dataLogs);

    // Bandingkan: Apakah isi excel sekarang berbeda dengan 5 detik yang lalu?
    if (lastSheetData !== "" && lastSheetData !== currentDataString) {
      console.log(
        "📡 [Socket.io] Ada perubahan di Google Sheets Divisi IP! Memancarkan ke Frontend...",
      );

      // Jika beda, pancarkan sinyal ke channel 'updateDataIP'
      io.emit("updateDataIP", {
        status: "Berhasil 📝",
        dataLogs: dataLogs,
      });
    }

    // Simpan data terbaru ke memori
    lastSheetData = currentDataString;
  } catch (error) {
    console.error("Gagal melakukan polling ke Google Sheets:", error.message);
  }
}, 5000); // Angka 5000 artinya mesin ini akan mengecek setiap 5.000 milidetik (5 detik)

// --- SETUP OTENTIKASI GOOGLE SHEETS ---
// Hebatnya, kita bisa pakai kunci Firebase yang sama untuk mengakses Sheets!
const auth = new google.auth.GoogleAuth({
  keyFile: "./firebase-key.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});
const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = "1hThScV2Tc5Ni-M2eZ8bL2aEa69q0OBXbaU-xDLpkGoY"; // ID Google Sheets kamu

app.get("/", (req, res) => {
  res.send("Server API Dashboard Industri Berjalan Normal!");
});

// --- ENDPOINT DIVISI IP (Menarik dari Google Sheets) ---
app.get("/api/divisi-ip", async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "A:F", // Mengambil semua data dari kolom A sampai F
    });

    const rows = response.data.values;

    // Jika sheet kosong atau hanya ada header
    if (!rows || rows.length <= 1) {
      return res.json({ analitik_ip: {}, dataLogs: [] });
    }

    // Mengubah array dari Google Sheets menjadi object yang rapi
    const dataLogs = rows.slice(1).map((row) => {
      return {
        id: row[0] || "",
        area: row[1] || "",
        deskripsi: row[2] || "",
        prioritas: row[3] || "",
        tanggal: row[4] || "",
        status: row[5] || "",
      };
    });

    // Mesin Analitik Sederhana Divisi IP
    const totalInspeksi = dataLogs.length;
    const prioritasTinggi = dataLogs.filter(
      (log) => log.prioritas === "High",
    ).length;
    const menungguAnalisa = dataLogs.filter(
      (log) => log.status === "Menunggu Analisa",
    ).length;

    res.json({
      status: "Berhasil 📝",
      analitik_ip: {
        totalInspeksi,
        prioritasTinggi,
        menungguAnalisa,
      },
      dataLogs: dataLogs,
    });
  } catch (error) {
    console.error("Waduh, error membaca Google Sheets:", error);
    res
      .status(500)
      .json({ pesan: "Gagal menarik data dari Sheets", error: error.message });
  }
});

// --- ENDPOINT DIVISI P ---
app.get("/api/divisi-p", async (req, res) => {
  try {
    const snapshot = await db.collection("divisi_p_logs").get();
    const logs = [];
    let readyToExecute = 0,
      waitingSparepart = 0,
      delayed = 0;

    snapshot.forEach((doc) => {
      const data = doc.data();
      logs.push(data);
      if (data.status === "Ready to Execute") readyToExecute += 1;
      else if (data.status === "Waiting Sparepart") waitingSparepart += 1;
      else if (data.status === "Delayed") delayed += 1;
    });

    res.json({
      analitik_planner: {
        totalWorkOrder: logs.length,
        siapEksekusi: readyToExecute,
        menungguSparepart: waitingSparepart,
        tertunda: delayed,
        persentaseKesiapan:
          logs.length > 0
            ? Math.round((readyToExecute / logs.length) * 100) + "%"
            : "0%",
      },
      dataLogs: logs,
    });
  } catch (error) {
    res.status(500).json({ pesan: "Gagal", error: error.message });
  }
});

server.listen(PORT, () => {
  console.log(
    `🚀 Server Backend & Mesin Socket.io menyala di http://localhost:${PORT}`,
  );
});
