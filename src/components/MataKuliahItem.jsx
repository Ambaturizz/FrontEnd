import React from 'react';
import TugasItem from './TugasItem';
import TugasForm from './TugasForm';

function MataKuliahItem(props) {
  const { 
    matkul, 
    onMatkulDeleted, 
    onTugasAdded, 
    onTugasUpdated, 
    onTugasDeleted 
  } = props;

  return (
    <div className="matkul-item">
      <div className="matkul-header">
        {/*
          Data matkul ini aman, karena jika tidak ada, 
          komponen ini tidak akan dirender oleh App.jsx
        */}
        <h3>{matkul.nama}</h3>
        <p>{matkul.deskripsi}</p>
        <button 
          onClick={() => onMatkulDeleted(matkul.id)} 
          className="delete-matkul-btn"
        >
          Hapus Matkul
        </button>
      </div>

      <div className="tugas-section">
        <h4>Daftar Tugas:</h4>
        
        {/* VVV PERUBAHAN DI SINI VVV
          Tambahkan "?." sebelum .length
          Artinya: "Jika matkul.tugas ada, cek panjangnya"
        */}
        {matkul.tugas?.length === 0 && <p>Belum ada tugas untuk mata kuliah ini.</p>}

        {/* VVV PERUBAHAN DI SINI VVV
          Tambahkan "?." sebelum .map
          Artinya: "Jika matkul.tugas ada, lakukan loop"
        */}
        {matkul.tugas?.map(tugas => (
          <TugasItem
            key={tugas.id}
            tugas={tugas}
            onTugasUpdated={onTugasUpdated}
            onTugasDeleted={onTugasDeleted}
          />
        ))}
        
        <TugasForm 
          matakuliahId={matkul.id} 
          onTugasAdded={onTugasAdded} 
        />
      </div>
    </div>
  );
}

export default MataKuliahItem;