import { useState } from 'react'
import Header from './components/Header'
import RingkasanRute from './components/RingkasanRute'
import FilterKategori from './components/FilterKategori'
import DaftarRute from './components/DaftarRute'
import FormTambahRute from './components/FormTambahRute'
import Footer from './components/Footer'
import { dataAwalRute, KATEGORI, TINGKAT, GAMBAR_DEFAULT } from './data/dataRute'

function App() {
  // State utama: daftar rute (array) + kategori filter yang sedang aktif
  const [daftarRute, setDaftarRute] = useState(dataAwalRute)
  const [kategoriAktif, setKategoriAktif] = useState('semua')

  function tambahRute(ruteBaru) {
    const kategori = KATEGORI.find((k) => k.key === ruteBaru.kategori)
    const rute = {
      ...ruteBaru,
      id: crypto.randomUUID(),
      tipe: kategori.nama,
      catatan: 'Ditambahkan oleh anggota komunitas',
      gambar: GAMBAR_DEFAULT[ruteBaru.kategori],
    }
    // Rute terbaru ditaruh di depan agar langsung terlihat
    setDaftarRute([rute, ...daftarRute])
  }

  function hapusRute(id) {
    setDaftarRute(daftarRute.filter((rute) => rute.id !== id))
  }

  const ruteTampil =
    kategoriAktif === 'semua' ? daftarRute : daftarRute.filter((rute) => rute.kategori === kategoriAktif)

  const jumlahPerKategori = KATEGORI.reduce((hasil, k) => {
    hasil[k.key] = daftarRute.filter((rute) => rute.kategori === k.key).length
    return hasil
  }, {})

  const totalJarak = Math.round(daftarRute.reduce((total, rute) => total + rute.jarak, 0))
  const totalElevasi = daftarRute.reduce((total, rute) => total + rute.elevasi, 0)

  return (
    <div id="atas" className="flex min-h-screen flex-col">
      <Header namaAplikasi={{ awal: 'Pedal', akhir: 'Raya' }} />

      <main className="flex-1 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sage">
              <span>Koleksi Rute Terverifikasi</span>
              <span aria-hidden="true">·</span>
              <span>Outdoor &amp; Nature</span>
            </div>
            <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-forest-dark sm:text-4xl">
              Katalog Rute Bersepeda
            </h1>
            <p className="max-w-2xl text-base text-charcoal/75">
              Pilih jalur petualangan berdasarkan disiplin sepeda Anda, atau tambahkan rute favorit Anda sendiri ke katalog.
            </p>
          </div>

          <RingkasanRute totalRute={daftarRute.length} totalJarak={totalJarak} totalElevasi={totalElevasi} />

          <section id="rute" className="scroll-mt-28">
            <FilterKategori
              daftarKategori={KATEGORI}
              kategoriAktif={kategoriAktif}
              onPilih={setKategoriAktif}
              jumlahPerKategori={jumlahPerKategori}
              totalRute={daftarRute.length}
            />
            <DaftarRute daftarRute={ruteTampil} totalSemuaRute={daftarRute.length} onHapus={hapusRute} />
          </section>

          <div className="mt-16">
            <FormTambahRute daftarKategori={KATEGORI} daftarTingkat={TINGKAT} onTambah={tambahRute} />
          </div>
        </div>
      </main>

      <Footer namaAplikasi="PedalRaya" />
    </div>
  )
}

export default App
