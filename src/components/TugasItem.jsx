import React from 'react';

function TugasItem({ tugas, onTugasUpdated, onTugasDeleted }) {

  // Fungsi ini dipanggil setiap kali dropdown status berubah
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    // Panggil fungsi update dari App.jsx
    // Kirim ID tugas dan data apa yang mau diubah
    onTugasUpdated(tugas.id, { status: newStatus });
  };

  // Fungsi untuk memformat tanggal (opsional, tapi bagus)
  const formatDeadline = (deadline) => {
    try {
      return new Date(deadline).toLocaleString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return deadline; // Tampilkan apa adanya jika format salah
    }
  };

  return (
    <div className="tugas-item">
      <div className="tugas-info">
        <strong>{tugas.nama}</strong>
        <span>Deadline: {formatDeadline(tugas.deadline)}</span>
      </div>
      
      {/* INI ADALAH FITUR TRACKER UTAMA */}
      <div className="tugas-actions">
        <select 
          value={tugas.status} 
          onChange={handleStatusChange} 
          className={`status-dropdown status-${tugas.status.replace(' ', '-')}`}
        >
          <option value="Belum Dikerjakan">Belum Dikerjakan</option>
          <option value="Sedang Dikerjakan">Sedang Dikerjakan</option>
          <option value="Selesai">Selesai</option>
        </select>
        
        <button 
          onClick={() => onTugasDeleted(tugas.id)} 
          className="delete-tugas-btn"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default TugasItem;