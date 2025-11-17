import { useState, useEffect } from 'react';
import axios from 'axios';
import MataKuliahItem from './components/MataKuliahItem';
import MataKuliahForm from './components/MataKuliahForm';
import './App.css'; 

// ========================================================
// === KUNCI API ANDA ===
// ========================================================
const API_KEY = "utOVaWFOmI5cbCKQq0ww6YgjjbGSqSZN"; 

if (!API_KEY || API_KEY === "API_KEY_ANDA_DISINI") {
  alert("PENTING: Buka file App.jsx dan ganti 'API_KEY_ANDA_DISINI' dengan API Key Anda!");
}

const API_BASE_URL = 'https://pekris-webdev.vercel.app/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
// ========================================================

function App() {
  const [matkulList, setMatkulList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMataKuliah = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/matkul`);
      setMatkulList(response.data); 
      setError(null);
    } catch (err) {
      console.error("Error fetching mata kuliah:", err);
      const errMsg = err.response ? `${err.response.status}: ${err.response.data.message}` : err.message;
      setError(`Gagal mengambil data: ${errMsg}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMataKuliah();
  }, []);

  // --- HANDLER UNTUK MATA KULIAH ---

  // VVV PERUBAHAN DI SINI VVV
  const handleMatkulAdded = async (nama, deskripsi, sks) => { // Terima 'sks'
    try {
      // Kirim 'sks' ke API
      // Pastikan 'nama', 'deskripsi', dan 'sks' sesuai dengan yang diharapkan API
      await axios.post(`${API_BASE_URL}/matkul`, { nama, deskripsi, sks }); 
      fetchMataKuliah(); 
    } catch (err) {
      console.error("Error adding mata kuliah:", err.response ? err.response.data : err);
    }
  };
  // ^^^ PERUBAHAN DI SINI ^^^

  const handleMatkulDeleted = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/matkul/${id}`);
      fetchMataKuliah();
    } catch (err) {
      console.error("Error deleting mata kuliah:", err);
    }
  };

  // --- HANDLER UNTUK TUGAS ---
  const handleTugasAdded = async (nama, deadline, matakuliahId) => {
    try {
      await axios.post(`${API_BASE_URL}/tugas`, { nama, deadline, matakuliahId });
      fetchMataKuliah();
    } catch (err) {
      console.error("Error adding tugas:", err.response ? err.response.data : err);
    }
  };

  const handleTugasUpdated = async (tugasId, dataToUpdate) => {
    try {
      await axios.put(`${API_BASE_URL}/tugas/${tugasId}`, dataToUpdate);
      fetchMataKuliah();
    } catch (err) {
      console.error("Error updating tugas:", err);
    }
  };

  const handleTugasDeleted = async (tugasId) => {
    try {
      await axios.delete(`${API_BASE_URL}/tugas/${tugasId}`);
      fetchMataKuliah();
    } catch (err) {
      console.error("Error deleting tugas:", err);
    }
  };

  // --- TAMPILAN / RENDER ---
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app-container">
      <h1>Tugas Tracker</h1>
      <MataKuliahForm onMatkulAdded={handleMatkulAdded} />
      <hr />
      <div className="matakuliah-list">
        <h2>Daftar Mata Kuliah</h2>
        {matkulList.map(matkul => (
          <MataKuliahItem
            key={matkul.id}
            matkul={matkul}
            onMatkulDeleted={handleMatkulDeleted}
            onTugasAdded={handleTugasAdded}
            onTugasUpdated={handleTugasUpdated}
            onTugasDeleted={handleTugasDeleted}
          />
        ))}
      </div>
    </div>
  );
}

export default App;