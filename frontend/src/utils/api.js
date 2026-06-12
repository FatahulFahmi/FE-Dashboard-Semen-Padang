// src/utils/api.js
import axios from "axios";

// Membuat instance axios dengan konfigurasi dasar
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Mengambil dari file .env
  timeout: 10000, // Maksimal waktu tunggu API (10 detik)
  headers: {
    "Content-Type": "application/json",
  },
});

// (Opsional) Tempat untuk menaruh interceptor nantinya jika butuh token login
api.interceptors.request.use((config) => {
  // Misalnya: const token = localStorage.getItem('token');
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
