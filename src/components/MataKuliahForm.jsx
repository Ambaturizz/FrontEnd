import React, { useState } from 'react';

function MataKuliahForm({ onMatkulAdded }) {
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [sks, setSks] = useState(''); // <-- INI GANTINYA, dari 'aks' ke 'sks'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi baru: pastikan nama dan SKS tidak kosong
    if (!nama || !sks) { 
      alert("Nama mata kuliah dan SKS tidak boleh kosong!");
      return;
    }
    // Panggil fungsi dari App.jsx dengan data 'sks'
    // Ubah sks menjadi Angka
    onMatkulAdded(nama, deskripsi, parseInt(sks)); // <-- 'sks' DITAMBAHKAN
    
    // Kosongkan form
    setNama('');
    setDeskripsi('');
    setSks(''); // <-- INI GANTINYA
  };

  return (
    <form onSubmit={handleSubmit} className="matkul-form">
      <h3>Tambah Mata Kuliah Baru</h3>
      <input
        type="text"
        placeholder="Nama Mata Kuliah (Wajib)"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        type="text"
        placeholder="Deskripsi (cth: Dosen)"
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
      />
      {/* INPUT BARU UNTUK 'SKS' */}
      <input
        type="number" // Kita ubah jadi number
        placeholder="SKS (Wajib diisi, cth: 3)"
        value={sks}
        onChange={(e) => setSks(e.target.value)}
      />
      <button type="submit">Tambah Matkul</button>
    </form>
  );
}

export default MataKuliahForm;