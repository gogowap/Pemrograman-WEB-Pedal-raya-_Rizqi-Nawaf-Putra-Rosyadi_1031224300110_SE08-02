import { useState } from 'react'

const FORM_AWAL = {
  nama: '',
  lokasi: '',
  permukaan: '',
  kategori: 'road',
  tingkat: 'Menengah',
  jarak: '',
  elevasi: '',
  durasi: '',
  deskripsi: '',
}

const inputClass =
  'w-full rounded-xl border border-forest/20 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-forest focus:ring-2 focus:ring-forest/20'

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-forest-dark">
        {label}
      </label>
      {children}
    </div>
  )
}

function FormTambahRute({ daftarKategori, daftarTingkat, onTambah }) {
  const [form, setForm] = useState(FORM_AWAL)
  const [pesanError, setPesanError] = useState('')

  // Satu handler untuk semua input (controlled component)
  function handleChange(event) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.nama.trim() || !form.lokasi.trim()) {
      setPesanError('Nama rute dan lokasi wajib diisi.')
      return
    }
    if (Number(form.jarak) <= 0 || Number(form.durasi) <= 0) {
      setPesanError('Jarak dan durasi harus berupa angka lebih dari 0.')
      return
    }

    onTambah({
      nama: form.nama.trim(),
      lokasi: form.lokasi.trim(),
      permukaan: form.permukaan.trim(),
      kategori: form.kategori,
      tingkat: form.tingkat,
      jarak: Number(form.jarak),
      elevasi: Number(form.elevasi) || 0,
      durasi: Number(form.durasi),
      deskripsi: form.deskripsi.trim(),
    })

    setForm(FORM_AWAL)
    setPesanError('')
  }

  return (
    <form
      id="tambah"
      onSubmit={handleSubmit}
      className="scroll-mt-28 rounded-2xl border border-forest/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="mb-1 text-2xl font-extrabold tracking-tight text-forest-dark">Tambah Rute Baru</h2>
      <p className="mb-6 text-sm text-charcoal/70">
        Bagikan jalur favorit Anda ke katalog PedalRaya.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Nama Rute" htmlFor="nama">
          <input id="nama" name="nama" value={form.nama} onChange={handleChange} placeholder="Contoh: Tanjakan Gedong Songo" className={inputClass} />
        </Field>
        <Field label="Lokasi" htmlFor="lokasi">
          <input id="lokasi" name="lokasi" value={form.lokasi} onChange={handleChange} placeholder="Contoh: Bandungan, Semarang, Jawa Tengah" className={inputClass} />
        </Field>
        <Field label="Kondisi Jalur" htmlFor="permukaan">
          <input id="permukaan" name="permukaan" value={form.permukaan} onChange={handleChange} placeholder="Contoh: Aspal Mulus & Tanjakan Panjang" className={inputClass} />
        </Field>
        <div className="grid grid-cols-2 gap-5">
          <Field label="Kategori" htmlFor="kategori">
            <select id="kategori" name="kategori" value={form.kategori} onChange={handleChange} className={inputClass}>
              {daftarKategori.map((k) => (
                <option key={k.key} value={k.key}>{k.nama}</option>
              ))}
            </select>
          </Field>
          <Field label="Tingkat" htmlFor="tingkat">
            <select id="tingkat" name="tingkat" value={form.tingkat} onChange={handleChange} className={inputClass}>
              {daftarTingkat.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>
        </div>
        <Field label="Jarak (km)" htmlFor="jarak">
          <input id="jarak" name="jarak" type="number" min="0" step="0.1" value={form.jarak} onChange={handleChange} placeholder="42" className={inputClass} />
        </Field>
        <div className="grid grid-cols-2 gap-5">
          <Field label="Elevasi (m)" htmlFor="elevasi">
            <input id="elevasi" name="elevasi" type="number" min="0" value={form.elevasi} onChange={handleChange} placeholder="650" className={inputClass} />
          </Field>
          <Field label="Durasi (jam)" htmlFor="durasi">
            <input id="durasi" name="durasi" type="number" min="0" step="0.1" value={form.durasi} onChange={handleChange} placeholder="2.5" className={inputClass} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Deskripsi Singkat" htmlFor="deskripsi">
            <textarea id="deskripsi" name="deskripsi" rows="3" value={form.deskripsi} onChange={handleChange} placeholder="Ceritakan suasana jalur, pemandangan, dan tips untuk pesepeda lain." className={inputClass} />
          </Field>
        </div>
      </div>

      {pesanError && (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
          {pesanError}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 cursor-pointer rounded-xl bg-forest px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-forest-dark hover:shadow-lg"
      >
        Tambah
      </button>
    </form>
  )
}

export default FormTambahRute
