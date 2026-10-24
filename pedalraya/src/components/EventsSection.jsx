import React, { useState } from 'react';
import { INITIAL_EVENTS } from '../data/mockData';

export default function EventsSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [regForm, setRegForm] = useState({
    eventId: 'event-1',
    namaLengkap: '',
    email: '',
    telepon: '',
    darurat: '',
    kategoriPesepeda: 'Road Bike',
    jerseySize: 'L',
    catatan: '',
  });
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [successModal, setSuccessModal] = useState(null);

  const filteredEvents = INITIAL_EVENTS.filter((ev) => {
    if (selectedFilter === 'all') return true;
    return ev.kategori === selectedFilter;
  });

  const handleRegister = (e) => {
    e.preventDefault();
    if (!regForm.namaLengkap.trim() || !regForm.email.trim()) return;

    const chosenEvent = INITIAL_EVENTS.find((ev) => ev.id === regForm.eventId) || INITIAL_EVENTS[0];
    const regDetail = {
      ...regForm,
      regId: `PDR-${Math.floor(100000 + Math.random() * 900000)}`,
      eventName: chosenEvent.nama,
      eventDate: `${chosenEvent.hari}, ${chosenEvent.tanggal} (${chosenEvent.tahun})`,
    };

    setRegisteredEvents([regDetail, ...registeredEvents]);
    setSuccessModal(regDetail);
    setRegForm({
      eventId: 'event-1',
      namaLengkap: '',
      email: '',
      telepon: '',
      darurat: '',
      kategoriPesepeda: 'Road Bike',
      jerseySize: 'L',
      catatan: '',
    });
  };

  return (
    <div className="space-y-12">
      
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#78916A] uppercase mb-2">
          <span>Kalender Gowes 2026</span>
          <span aria-hidden="true">·</span>
          <span>Uji Nyali & Rekreasi</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#183426] tracking-tight mb-4">
          Agenda & Event Bersepeda
        </h1>
        <p className="text-base text-[#292D28]/80 leading-relaxed max-w-2xl">
          Ikuti berbagai ajang bersepeda seru di berbagai daerah. Mulai dari gowes santai keluarga, reli kerikil (gravel rally), balapan aspal, hingga tantangan daya tahan jarak jauh.
        </p>
      </div>

      {/* Calendar Overview Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#244B37]/15 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#244B37]/10">
          <div>
            <h2 className="text-xl font-bold text-[#183426]">
              Kalender Musim Gowes: Oktober – Desember 2026
            </h2>
            <span className="text-xs text-[#292D28]/65">
              Gambaran jadwal statis untuk perencanaan latihan dan logistik
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-[#292D28]/80">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#244B37]" /> Hari Event Utama
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#D8C8A6]" /> Hari Latihan Bersama
            </span>
          </div>
        </div>

        {/* Calendar Grid Representation */}
        <div className="grid grid-cols-7 gap-2 text-center text-xs">
          {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((day, i) => (
            <div key={day} className={`font-bold py-2 ${i === 6 ? 'text-[#244B37]' : 'text-[#78916A]'}`}>
              {day}
            </div>
          ))}

          <div className="p-3 bg-[#F6F4ED] rounded-xl text-[#292D28]/40">19</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl text-[#292D28]/40">20</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl text-[#292D28]/40">21</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl text-[#292D28]/40">22</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl text-[#292D28]/40">23</div>
          <div className="p-3 bg-[#244B37] text-white font-bold rounded-xl shadow-sm relative group cursor-pointer" title="Bromo Gravel Odyssey">
            24
            <span className="block text-[9px] font-normal text-[#D8C8A6]">Bromo</span>
          </div>
          <div className="p-3 bg-[#D8C8A6]/30 rounded-xl font-bold">25</div>

          <div className="p-3 bg-[#F6F4ED] rounded-xl">26</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl">27</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl">28</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl">29</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl">30</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl">31</div>
          <div className="p-3 bg-[#D8C8A6]/30 rounded-xl font-bold">01 Nov</div>

          <div className="p-3 bg-[#F6F4ED] rounded-xl">09</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl">10</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl">11</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl">12</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl">13</div>
          <div className="p-3 bg-[#F6F4ED] rounded-xl">14</div>
          <div className="p-3 bg-[#244B37] text-white font-bold rounded-xl shadow-sm cursor-pointer" title="Tour de Borobudur">
            15
            <span className="block text-[9px] font-normal text-[#D8C8A6]">Borobudur</span>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-[#183426] mr-2 uppercase tracking-wider">
          Kategori Event:
        </span>
        {[
          { id: 'all', label: 'Semua Event (4)' },
          { id: 'road', label: 'Road Gran Fondo' },
          { id: 'mtb', label: 'Gravel & MTB' },
          { id: 'fun', label: 'Fun Ride & Charity' },
          { id: 'touring', label: 'Ultra Touring' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setSelectedFilter(f.id)}
            className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              selectedFilter === f.id
                ? 'bg-[#244B37] text-white'
                : 'border border-[#244B37]/20 bg-white text-[#292D28] hover:border-[#244B37]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Event Cards List */}
      <div className="space-y-6">
        {filteredEvents.map((ev) => (
          <article
            key={ev.id}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-[#244B37]/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            <div className="lg:col-span-3 text-center sm:text-left border-b lg:border-b-0 lg:border-r border-[#244B37]/10 pb-4 lg:pb-0 lg:pr-6">
              <span className="text-xs font-extrabold uppercase text-[#78916A] tracking-wider block">
                {ev.hari}
              </span>
              <strong className="text-4xl font-extrabold text-[#183426] tabular-nums block my-1">
                {ev.tanggal}
              </strong>
              <span className="text-xs font-semibold text-[#292D28]/70 block">{ev.tahun}</span>
              <span className="mt-3 inline-block text-[11px] font-bold text-[#244B37] bg-[#78916A]/15 px-3 py-1 rounded-full">
                {ev.kategoriLabel}
              </span>
            </div>

            <div className="lg:col-span-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#183426] mb-3">{ev.nama}</h3>
              {ev.foto && (
                <div className="rounded-xl overflow-hidden aspect-[16/9] bg-[#e8ede4] mb-3">
                  <img
                    src={ev.foto}
                    alt={ev.nama}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/pexels-run-ffwpu-5687405.jpg';
                    }}
                  />
                </div>
              )}
              <p className="text-xs font-semibold text-[#78916A] mb-3">{ev.lokasi}</p>
              <p className="text-sm text-[#292D28]/80 leading-relaxed mb-4">{ev.deskripsi}</p>
              <div className="flex flex-wrap gap-4 text-xs text-[#292D28]/70">
                <span>Jarak: <strong>{ev.jarak}</strong></span>
                <span>·</span>
                <span>Elevasi: <strong>{ev.elevasi}</strong></span>
                <span>·</span>
                <span>Peserta: <strong>{ev.kuota}</strong></span>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setRegForm((prev) => ({ ...prev, eventId: ev.id }));
                  const el = document.getElementById('daftar-event');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-[#244B37] hover:bg-[#183426] transition-colors text-center shadow-sm cursor-pointer"
              >
                Pilih & Daftar Event
              </button>
              <span className="text-[11px] text-[#292D28]/60 text-center">{ev.biaya}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Registration Form Section */}
      <section id="daftar-event" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#244B37]/15 shadow-sm max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-1">
            Formulir Pendaftaran Interaktif
          </span>
          <h2 className="text-2xl font-extrabold text-[#183426]">Pendaftaran Event PedalRaya</h2>
          <p className="text-xs text-[#292D28]/70 mt-1 max-w-md mx-auto">
            Isi formulir di bawah ini untuk mengamankan slot keikutsertaan Anda.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-[#292D28] uppercase tracking-wider mb-1">
              Pilih Event yang Diikuti *
            </label>
            <select
              value={regForm.eventId}
              onChange={(e) => setRegForm({ ...regForm, eventId: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            >
              {INITIAL_EVENTS.map((ev) => (
                <option key={ev.id} value={ev.id}>
                  {ev.nama} ({ev.tanggal} - {ev.jarak})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Nama Lengkap Peserta *
              </label>
              <input
                type="text"
                value={regForm.namaLengkap}
                onChange={(e) => setRegForm({ ...regForm, namaLengkap: e.target.value })}
                placeholder="Sesuai KTP / SIM"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm"
              />
            </div>
            <div>
              <label className="block font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Alamat Email *
              </label>
              <input
                type="email"
                value={regForm.email}
                onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                placeholder="nama@email.com"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Nomor WhatsApp *
              </label>
              <input
                type="tel"
                value={regForm.telepon}
                onChange={(e) => setRegForm({ ...regForm, telepon: e.target.value })}
                placeholder="081234567890"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm"
              />
            </div>
            <div>
              <label className="block font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Ukuran Jersey
              </label>
              <select
                value={regForm.jerseySize}
                onChange={(e) => setRegForm({ ...regForm, jerseySize: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm"
              >
                <option value="S">S (Small)</option>
                <option value="M">M (Medium)</option>
                <option value="L">L (Large)</option>
                <option value="XL">XL (Extra Large)</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div>
              <label className="block font-bold text-[#292D28] uppercase tracking-wider mb-1">
                Kontak Darurat (ICE)
              </label>
              <input
                type="text"
                value={regForm.darurat}
                onChange={(e) => setRegForm({ ...regForm, darurat: e.target.value })}
                placeholder="Nama & No. HP Kerabat"
                className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#292D28] uppercase tracking-wider mb-1">
              Catatan Medis / Golongan Darah
            </label>
            <input
              type="text"
              value={regForm.catatan}
              onChange={(e) => setRegForm({ ...regForm, catatan: e.target.value })}
              placeholder="Misal: Golongan Darah O, Alergi tertentu (opsional)"
              className="w-full px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-sm"
            />
          </div>

          <div className="pt-4 border-t border-[#244B37]/10">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#244B37] hover:bg-[#183426] transition-all shadow-md cursor-pointer"
            >
              Kirim Pendaftaran Event Sekarang
            </button>
          </div>
        </form>
      </section>

      {/* Confirmation Modal */}
      {successModal && (
        <div className="fixed inset-0 z-50 bg-[#183426]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-[#244B37]/15 shadow-2xl text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-extrabold text-[#183426] mb-1">
              Pendaftaran Berhasil Terkirim!
            </h3>
            <p className="text-xs text-[#292D28]/70 mb-4">
              Kode Registrasi Anda: <strong className="text-[#244B37] font-mono text-sm">{successModal.regId}</strong>
            </p>
            <div className="bg-[#F6F4ED] rounded-xl p-4 text-left text-xs space-y-1 mb-6 border border-[#244B37]/10">
              <div><strong>Peserta:</strong> {successModal.namaLengkap}</div>
              <div><strong>Event:</strong> {successModal.eventName}</div>
              <div><strong>Jadwal:</strong> {successModal.eventDate}</div>
              <div><strong>Ukuran Jersey:</strong> {successModal.jerseySize}</div>
              <div><strong>Email Konfirmasi:</strong> {successModal.email}</div>
            </div>
            <button
              onClick={() => setSuccessModal(null)}
              className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-[#244B37] hover:bg-[#183426] cursor-pointer"
            >
              Selesai & Tutup
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
