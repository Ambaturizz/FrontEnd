import React, { useState } from 'react';

function TugasForm({ matakuliahId, onTugasAdded }) {
  const [nama, setNama] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !deadline) {
      alert("Nama tugas dan deadline tidak boleh kosong!");
      return;
    }
    // Panggil fungsi dari App.jsx
    onTugasAdded(nama, deadline, matakuliahId);
    // Kosongkan form
    setNama('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} className="tugas-form">
      <input
        type="text"
        placeholder="Nama Tugas (cth: Tugas 1)"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <input
        type="datetime-local" // Input tanggal dan waktu
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Tambah Tugas</button>
    </form>
  );
}

export default TugasForm;