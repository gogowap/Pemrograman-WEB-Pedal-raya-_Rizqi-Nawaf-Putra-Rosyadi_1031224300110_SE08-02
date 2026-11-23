import React, { useState, useEffect, useRef } from 'react';
import { INITIAL_COMMUNITIES } from '../data/mockData';

const CHAT_STORAGE_KEY = 'pedalraya-community-chats';
const CHAT_NAME_KEY = 'pedalraya-chat-name';

const AUTO_REPLIES = [
  'Siap, noted! Nanti detailnya kami info di grup ya 👍',
  'Mantap! Jangan lupa bawa air minum, helm, dan ban serep 🚴',
  'Boleh banget ikut, semua level diterima di sini.',
  'Titik kumpul dan jam start biasanya kami umumkan sehari sebelumnya.',
];

// Pesan pembuka tiap komunitas (contoh/demo)
const seedChat = (c) => [
  { id: `${c.id}-s1`, sender: 'Road Captain', mine: false, time: '06.12', text: `Selamat datang di ruang obrolan ${c.nama}! 👋` },
  { id: `${c.id}-s2`, sender: 'Rina', mine: false, time: '06.15', text: `Jadwal rutin kita: ${c.jadwal}. Titik kumpul diumumkan di sini ya.` },
  { id: `${c.id}-s3`, sender: 'Dimas', mine: false, time: '06.20', text: 'Pemula boleh ikut? Sepeda saya masih standar.' },
  { id: `${c.id}-s4`, sender: 'Road Captain', mine: false, time: '06.22', text: 'Boleh banget, no one left behind. Bawa air, helm, dan ban serep ya 🚴' },
];

const nowTime = () =>
  new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }).replace(':', '.');

const loadStored = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export default function CommunitySection() {
  const [communities, setCommunities] = useState(INITIAL_COMMUNITIES);
  const [chatCommunity, setChatCommunity] = useState(null);
  const [chats, setChats] = useState(() => loadStored(CHAT_STORAGE_KEY, {}));
  const [chatName, setChatName] = useState(() => loadStored(CHAT_NAME_KEY, ''));
  const [chatInput, setChatInput] = useState('');
  const chatBodyRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showRegModal, setShowRegModal] = useState(false);
  const [newComm, setNewComm] = useState({
    nama: '',
    kategori: 'Gravel & Bikepacking',
    lokasi: '',
    deskripsi: '',
    jadwal: '',
    kontak: '',
  });
  const [successBanner, setSuccessBanner] = useState('');

  const activeMessages = chatCommunity ? chats[chatCommunity.id] ?? seedChat(chatCommunity) : [];

  useEffect(() => {
    try {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chats));
    } catch {
      /* penyimpanan tidak tersedia, abaikan */
    }
  }, [chats]);

  useEffect(() => {
    try {
      localStorage.setItem(CHAT_NAME_KEY, JSON.stringify(chatName));
    } catch {
      /* abaikan */
    }
  }, [chatName]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [activeMessages.length, chatCommunity]);

  const appendMessage = (community, message) => {
    setChats((prev) => ({
      ...prev,
      [community.id]: [...(prev[community.id] ?? seedChat(community)), message],
    }));
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    const text = chatInput.trim();
    if (!text || !chatCommunity) return;

    const community = chatCommunity;
    appendMessage(community, {
      id: `m-${Date.now()}`,
      sender: chatName.trim() || 'Kamu',
      mine: true,
      time: nowTime(),
      text,
    });
    setChatInput('');

    // Balasan otomatis (demo, belum terhubung ke server chat sungguhan)
    setTimeout(() => {
      appendMessage(community, {
        id: `r-${Date.now()}`,
        sender: 'Road Captain',
        mine: false,
        time: nowTime(),
        text: AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)],
      });
    }, 1200);
  };

  const filteredCommunities = communities.filter((c) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      c.nama.toLowerCase().includes(q) ||
      c.lokasi.toLowerCase().includes(q) ||
      c.kategori.toLowerCase().includes(q)
    );
  });

  const handleRegisterCommunity = (e) => {
    e.preventDefault();
    if (!newComm.nama.trim() || !newComm.lokasi.trim()) return;

    const created = {
      id: `comm-${Date.now()}`,
      nama: newComm.nama.trim(),
      kategori: newComm.kategori,
      anggota: '10+ Anggota (Baru)',
      lokasi: newComm.lokasi.trim(),
      deskripsi: newComm.deskripsi.trim() || 'Komunitas pesepeda antusias pecinta olahraga dan alam bebas.',
      jadwal: newComm.jadwal.trim() || 'Akhir Pekan',
      kontak: newComm.kontak.trim() || '@komunitas_gowes',
    };

    setCommunities([created, ...communities]);
    setSuccessBanner(`Komunitas "${created.nama}" berhasil didaftarkan ke jejaring PedalRaya!`);
    setShowRegModal(false);
    setNewComm({
      nama: '',
      kategori: 'Gravel & Bikepacking',
      lokasi: '',
      deskripsi: '',
      jadwal: '',
      kontak: '',
    });
    setTimeout(() => setSuccessBanner(''), 6000);
  };

  return (
    <div className="space-y-12">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#78916A] uppercase mb-2">
          <span>Jejaring Gowes Seluruh Indonesia</span>
          <span aria-hidden="true">·</span>
          <span>Solidaritas & Keberagaman</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#183426] tracking-tight mb-3">
              Komunitas Pesepeda PedalRaya
            </h1>
            <p className="text-base text-[#292D28]/80 max-w-2xl">
              Bersepeda sendiri memang membebaskan, tetapi bersepeda bersama membuka pertemanan sejati. Temukan kelompok gowes di kota Anda yang sesuai dengan minat dan jadwal luang Anda.
            </p>
          </div>
          <button
            onClick={() => setShowRegModal(true)}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            + Daftarkan Komunitas
          </button>
        </div>
      </div>

      {successBanner && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-semibold flex items-center justify-between">
          <span>🎉 {successBanner}</span>
          <button onClick={() => setSuccessBanner('')} className="font-bold ml-2">✕</button>
        </div>
      )}

      {/* Hero Spotlight Banner */}
      <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#244B37]/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-2">
            Budaya Komunitas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#183426] mb-4">
            "No One Left Behind" — Filosofi Pelindung Peloton
          </h2>
          <p className="text-sm text-[#292D28]/80 leading-relaxed mb-6">
            Di PedalRaya, kami memprioritaskan keselamatan dan kebersamaan di atas kecepatan. Setiap kelompok binaan menerapkan sistem Road Captain dan Sweeper terlatih untuk memastikan tidak ada rekan yang tertinggal akibat masalah mekanik atau kelelahan fisik.
          </p>
          <div className="grid grid-cols-3 gap-4 border-t border-[#244B37]/10 pt-6 text-xs">
            <div>
              <strong className="text-lg font-bold text-[#183426] block">
                {communities.length}+
              </strong>
              <span className="text-[#78916A]">Komunitas Terdaftar</span>
            </div>
            <div>
              <strong className="text-lg font-bold text-[#183426] block">18 Kota</strong>
              <span className="text-[#78916A]">Jangkauan Wilayah</span>
            </div>
            <div>
              <strong className="text-lg font-bold text-[#183426] block">100% Terbuka</strong>
              <span className="text-[#78916A]">Tanpa Biaya Masuk</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#e8ede4] border border-[#244B37]/15 shadow-md">
            <img
              src="/assets/images/komunitas.jpg"
              alt="Suasana kumpul komunitas pesepeda di teras kafe alam"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/assets/images/pexels-run-ffwpu-5687405.jpg';
              }}
            />
          </div>
        </div>
      </div>

      {/* Directory & Search */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-extrabold text-[#183426]">
            Direktori Komunitas Aktif ({filteredCommunities.length})
          </h2>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari nama komunitas atau kota..."
              className="w-full pl-8 pr-3 py-2 rounded-xl border border-[#244B37]/20 bg-white text-xs text-[#292D28] focus:outline-none focus:ring-2 focus:ring-[#244B37]"
            />
            <span className="absolute left-2.5 top-2.5 text-xs text-[#292D28]/40">🔍</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((c) => (
            <article
              key={c.id}
              className="bg-white rounded-2xl p-6 border border-[#244B37]/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#244B37] bg-[#78916A]/15 px-3 py-1 rounded-lg">
                    {c.kategori}
                  </span>
                  <span className="text-xs text-[#78916A] font-medium">{c.anggota}</span>
                </div>
                <h3 className="text-xl font-bold text-[#183426] mb-2">{c.nama}</h3>
                <p className="text-xs text-[#292D28]/60 mb-3 flex items-center gap-1.5">
                  <span>📍 {c.lokasi}</span>
                </p>
                <p className="text-sm text-[#292D28]/75 mb-6 leading-relaxed">
                  {c.deskripsi}
                </p>
              </div>

              <div className="border-t border-[#244B37]/10 pt-4">
                <div className="text-xs text-[#292D28]/70 mb-3 space-y-1">
                  <div>⏰ <strong>Jadwal:</strong> {c.jadwal}</div>
                  <div>📱 <strong>Instagram:</strong> {c.kontak}</div>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setChatCommunity(c)}
                    className="w-full py-2 px-3 rounded-xl text-center text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] transition-colors cursor-pointer"
                  >
                    💬 Buka Chat Komunitas
                  </button>
                  <a
                    href={`https://instagram.com`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 px-3 rounded-xl text-center text-xs font-bold text-[#244B37] bg-[#F6F4ED] hover:bg-[#244B37] hover:text-white transition-colors block"
                  >
                    Hubungi Komunitas
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Chat Komunitas */}
      {chatCommunity && (
        <div
          className="fixed inset-0 z-50 bg-[#183426]/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setChatCommunity(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-lg h-[80vh] max-h-[640px] flex flex-col border border-[#244B37]/15 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header chat */}
            <div className="px-5 py-4 bg-[#244B37] text-white flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-base font-bold truncate">💬 {chatCommunity.nama}</h3>
                <span className="text-[11px] text-[#D8C8A6] block truncate">
                  {chatCommunity.anggota} · {chatCommunity.lokasi}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setChatCommunity(null)}
                className="w-8 h-8 shrink-0 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center cursor-pointer"
                aria-label="Tutup chat"
              >
                ✕
              </button>
            </div>

            {/* Nama pengirim */}
            <div className="px-5 py-2.5 border-b border-[#244B37]/10 bg-[#F6F4ED] flex items-center gap-2 text-xs">
              <label htmlFor="chat-name" className="font-bold text-[#183426] whitespace-nowrap">
                Nama kamu:
              </label>
              <input
                id="chat-name"
                type="text"
                value={chatName}
                onChange={(e) => setChatName(e.target.value)}
                placeholder="Misal: Andi"
                maxLength={20}
                className="flex-1 min-w-0 px-3 py-1.5 rounded-lg border border-[#244B37]/20 bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
            </div>

            {/* Daftar pesan */}
            <div ref={chatBodyRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3 bg-[#F6F4ED]/50">
              {activeMessages.map((m) => (
                <div key={m.id} className={`flex ${m.mine ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed shadow-sm ${
                      m.mine
                        ? 'bg-[#244B37] text-white rounded-br-md'
                        : 'bg-white text-[#292D28] border border-[#244B37]/10 rounded-bl-md'
                    }`}
                  >
                    {!m.mine && (
                      <strong className="block text-[11px] text-[#78916A] mb-0.5">{m.sender}</strong>
                    )}
                    <span className="whitespace-pre-line break-words">{m.text}</span>
                    <span className={`block text-[10px] mt-1 text-right ${m.mine ? 'text-white/60' : 'text-[#292D28]/40'}`}>
                      {m.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input pesan */}
            <form onSubmit={handleSendChat} className="p-3 border-t border-[#244B37]/10 flex items-center gap-2 bg-white">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Tulis pesan untuk komunitas..."
                className="flex-1 min-w-0 px-4 py-2.5 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#244B37]"
              />
              <button
                type="submit"
                disabled={!chatInput.trim()}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#244B37] hover:bg-[#183426] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                Kirim
              </button>
            </form>
            <p className="px-4 pb-2.5 text-[10px] text-center text-[#292D28]/45 bg-white">
              Mode demo: pesan tersimpan di browser ini dan balasan Road Captain bersifat otomatis.
            </p>
          </div>
        </div>
      )}

      {/* Modal Daftarkan Komunitas */}
      {showRegModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#183426]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#244B37]/15 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#244B37]/10 mb-4">
              <h3 className="text-xl font-bold text-[#183426]">Daftarkan Komunitas Gowes</h3>
              <button
                onClick={() => setShowRegModal(false)}
                className="w-8 h-8 rounded-full bg-[#F6F4ED] text-[#292D28] flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleRegisterCommunity} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Nama Komunitas *</label>
                <input
                  type="text"
                  value={newComm.nama}
                  onChange={(e) => setNewComm({ ...newComm, nama: e.target.value })}
                  placeholder="Misal: Bandung Gravel Explorers"
                  required
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                />
              </div>

              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Wilayah / Kota *</label>
                <input
                  type="text"
                  value={newComm.lokasi}
                  onChange={(e) => setNewComm({ ...newComm, lokasi: e.target.value })}
                  placeholder="Misal: Bandung & Lembang, Jawa Barat"
                  required
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                />
              </div>

              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Fokus Disiplin</label>
                <select
                  value={newComm.kategori}
                  onChange={(e) => setNewComm({ ...newComm, kategori: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                >
                  <option value="Road Bike & Peloton">Road Bike & Peloton</option>
                  <option value="Gravel & Bikepacking">Gravel & Bikepacking</option>
                  <option value="MTB Enduro & XC">MTB Enduro & XC</option>
                  <option value="Touring & Randonneurs">Touring & Randonneurs</option>
                  <option value="Fun Ride & Leisure">Fun Ride & Leisure</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Jadwal Gowes Rutin</label>
                <input
                  type="text"
                  value={newComm.jadwal}
                  onChange={(e) => setNewComm({ ...newComm, jadwal: e.target.value })}
                  placeholder="Misal: Sabtu Pagi 06.00 WIB"
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                />
              </div>

              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Akun Media Sosial / Kontak</label>
                <input
                  type="text"
                  value={newComm.kontak}
                  onChange={(e) => setNewComm({ ...newComm, kontak: e.target.value })}
                  placeholder="Misal: @bdg_gravel"
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                />
              </div>

              <div>
                <label className="block font-bold text-[#292D28] uppercase mb-1">Deskripsi Singkat</label>
                <textarea
                  value={newComm.deskripsi}
                  onChange={(e) => setNewComm({ ...newComm, deskripsi: e.target.value })}
                  rows="2"
                  placeholder="Tujuan komunitas, titik kumpul favorit, dll..."
                  className="w-full px-3 py-2 rounded-xl border border-[#244B37]/20 bg-[#F6F4ED]/50"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#244B37]/10">
                <button
                  type="button"
                  onClick={() => setShowRegModal(false)}
                  className="px-4 py-2 rounded-xl bg-[#F6F4ED] font-bold text-[#292D28]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#244B37] hover:bg-[#183426] text-white font-bold"
                >
                  Simpan Komunitas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
