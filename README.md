# Final Project WebDev RISTEK 2025 Tugas Tracker

### Tugas Tracker adalah aplikasi web yang dikembangkan sebagai Final Project Open Class RISTEK Fasilkom UI 2025. Aplikasi ini bertujuan untuk memecahkan masalah mahasiswa yang sering kewalahan dalam mengelola tugas.

Website ini berfungsi sebagai sistem terpusat untuk melacak semua tugas, memungkinkan pengguna untuk:
* Mengelola mata kuliah (CRUD)
* Mengelola tugas yang terikat pada mata kuliah (CRUD)
* Melacak progres setiap tugas dengan status ('Belum Dikerjakan', 'Sedang Dikerjakan', 'Selesai')

## Struktur Folder

Berikut adalah struktur folder yang direncanakan untuk proyek Front-End ini:

### Deskripsi Direktori Utama

* **`/public`**: Berisi file statis yang tidak diproses oleh *bundler*. File di sini akan disalin langsung ke *build folder*.
* **`/src`**: Direktori utama yang berisi semua kode sumber aplikasi.
* **`/src/assets`**: Untuk menyimpan aset statis seperti gambar, ikon, dan file CSS global.
* **`/src/components`**: Berisi komponen-komponen React yang dapat digunakan kembali (reusable) di berbagai bagian aplikasi.
* **`/src/pages`**: Berisi komponen-komponen yang berfungsi sebagai halaman utama aplikasi. Setiap file di sini mewakili satu rute (route) atau tampilan.
* **`/src/services`**: (Kadang disebut juga `api`) Berisi logika untuk berkomunikasi dengan API. Ini akan sangat penting untuk Checkpoint 2 dan 3.
* **`/src/utils`**: Tempat untuk menyimpan fungsi-fungsi bantuan (helper functions) yang bersifat umum, seperti memformat tanggal atau validasi.
* **`App.jsx`**: Komponen akar (root) dari aplikasi.
* **`main.jsx`**: File *entry point* yang merender komponen `App.jsx` ke dalam DOM.

# README.md dari instalasi npm
## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
