import React from 'react';

export default function AboutSection({ onExploreRoutes }) {
  const coreValues = [
    {
      title: 'Keselamatan Utama',
      desc: 'Setiap kayuhan harus pulang dengan selamat ke rumah. Helm berstandar dan sepeda terawat adalah syarat mutlak tanpa kompromi.',
      icon: '🛡️',
    },
    {
      title: 'Solidaritas Komunitas',
      desc: '"No One Left Behind." Kami saling menunggu, saling berbagi bekal dan pompa, serta mendukung rekan yang kelelahan.',
      icon: '🤝',
    },
    {
      title: 'Leave No Trace',
      desc: 'Menghormati alam bebas dengan tidak membuang sampah sachet gel/minuman dan tidak merusak vegetasi di jalur konservasi.',
      icon: '🌿',
    },
    {
      title: 'Inklusivitas Terbuka',
      desc: 'Terbuka bagi semua orang, segala jenis sepeda—dari road bike karbon termutakhir hingga sepeda lipat dan jengki tua.',
      icon: '🚲',
    },
    {
      title: 'Apresiasi Budaya Lokal',
      desc: 'Menghidupkan warung warga di pelosok desa, menyapa penduduk lokal dengan ramah, dan belajar kearifan nusantara.',
      icon: '🏡',
    },
    {
      title: 'Eksplorasi Tanpa Batas',
      desc: 'Mendorong pesepeda keluar dari zona nyaman rute perkotaan untuk menemukan keelokan bukit, danau, dan pantai.',
      icon: '🧭',
    },
  ];

  return (
    <div className="space-y-16">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#78916A] uppercase mb-2">
          <span>Manifesto & Inisiatif</span>
          <span aria-hidden="true">·</span>
          <span>Outdoor Community Movement</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#183426] tracking-tight mb-4">
          Tentang PedalRaya
        </h1>
        <p className="text-base sm:text-lg text-[#292D28]/80 leading-relaxed max-w-2xl">
          "Find Your Route. Meet Your People. Ride Beyond." — Mengajak setiap orang menikmati kebebasan berkayuh dan keindahan bentang alam Indonesia.
        </p>
      </div>

      {/* Vision & Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#244B37]/15 shadow-sm">
          <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-2">
            Visi Kami
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#183426] mb-4">
            Menghubungkan Pesepeda dengan Keindahan Alam Nusantara
          </h2>
          <div className="text-sm text-[#292D28]/80 space-y-4 leading-relaxed">
            <p>
              PedalRaya lahir dari obrolan hangat sekelompok pesepeda di sebuah warung kopi lereng gunung setelah melintasi jalur kabut pagi. Kami menyadari bahwa Indonesia menyimpan ribuan kilometer jalur luar biasa—dari aspal pegunungan hingga lintasan tanah hutan pinus—namun informasinya sering terpecah dan sulit diakses oleh pemula.
            </p>
            <p>
              PedalRaya hadir sebagai platform kurasi informasi terpercaya: tempat bagi siapa saja untuk menemukan jalur baru yang telah diverifikasi kelayakannya, terhubung dengan komunitas setempat yang ramah, serta mengadopsi budaya gowes yang mengedepankan etika dan keselamatan.
            </p>
            <p>
              Bagi kami, sepeda bukan sekadar alat olahraga, melainkan jendela untuk menghirup udara segar, merajut persaudaraan tanpa sekat status, dan menghidupkan perekonomian pedesaan yang kami lewati.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#e8ede4] border border-[#244B37]/15 shadow-lg">
            <img
              src="/assets/images/about.jpg"
              alt="Pemandangan punggung bukit luas jalur sepeda petualangan"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/assets/images/pexels-run-ffwpu-5687405.jpg';
              }}
            />
          </div>
          <div className="bg-[#244B37] text-white p-6 rounded-2xl shadow-sm">
            <span className="text-xs font-bold text-[#D8C8A6] uppercase tracking-wider block mb-1">
              Komitmen Keberlanjutan
            </span>
            <p className="text-xs text-white/90 leading-relaxed">
              "Leave No Trace" — Setiap perjalanan bersepeda wajib menjaga kebersihan alam, tidak membuang sampah sachet gel/minuman sembarangan, dan menghormati ketenangan satwa liar serta warga lokal.
            </p>
          </div>
        </div>
      </div>

      {/* 6 Core Values */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#78916A] uppercase tracking-wider block mb-1">
            Prinsip Panduan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#183426]">
            Nilai Utama PedalRaya
          </h2>
          <p className="text-xs text-[#292D28]/70 mt-1">
            Enam fondasi yang menjiwai setiap rute dan kegiatan yang kami kurasi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#244B37]/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block">{v.icon}</span>
                <h3 className="text-lg font-bold text-[#183426] mb-2">{v.title}</h3>
                <p className="text-xs text-[#292D28]/75 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-[#244B37] rounded-3xl p-8 sm:p-12 text-white text-center max-w-3xl mx-auto shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Siap Memulai Petualangan Bersepeda Anda?
        </h2>
        <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto mb-6 leading-relaxed">
          Temukan rute yang cocok untuk Anda akhir pekan ini, pelajari jalurnya, siapkan perlengkapan, dan nikmati setiap kayuhannya.
        </p>
        <button
          onClick={onExploreRoutes}
          className="px-6 py-3 rounded-xl text-xs font-bold text-[#183426] bg-[#F6F4ED] hover:bg-white transition-all shadow-md cursor-pointer"
        >
          Eksplorasi Rute Sekarang →
        </button>
      </div>

    </div>
  );
}
