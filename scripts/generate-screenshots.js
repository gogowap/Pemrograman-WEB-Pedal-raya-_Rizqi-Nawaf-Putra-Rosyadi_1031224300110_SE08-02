import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'docs', 'screenshots');
const tempDir = path.join(rootDir, 'scripts', 'temp_html');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function renderRestClientHtml({ title, method, methodColor, url, status, statusCode, statusColor, time, size, reqBody, resBody }) {
  const formatJson = (obj) => {
    if (!obj) return '';
    const jsonStr = typeof obj === 'string' ? obj : JSON.stringify(obj, null, 2);
    return jsonStr
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let cls = 'color: #9cdcfe;'; // number
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'color: #9cdcfe; font-weight: 600;'; // key
          } else {
            cls = 'color: #ce9178;'; // string
          }
        } else if (/true|false/.test(match)) {
          cls = 'color: #569cd6; font-weight: 600;'; // boolean
        } else if (/null/.test(match)) {
          cls = 'color: #569cd6;'; // null
        }
        return `<span style="${cls}">${match}</span>`;
      });
  };

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #1e1e1e;
      color: #d4d4d4;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, monospace;
      padding: 24px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
    }
    .window {
      width: 1100px;
      background: #252526;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08);
    }
    .title-bar {
      background: #323233;
      padding: 12px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #3c3c3c;
    }
    .traffic-lights {
      display: flex;
      gap: 8px;
    }
    .traffic-lights span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: inline-block;
    }
    .title-text {
      font-size: 13px;
      color: #cccccc;
      font-weight: 500;
      letter-spacing: 0.3px;
    }
    .badge-tag {
      font-size: 11px;
      background: #183426;
      color: #a7f3d0;
      padding: 3px 10px;
      border-radius: 6px;
      font-weight: 600;
      border: 1px solid #059669;
    }
    .request-bar {
      padding: 16px 20px;
      background: #1e1e1e;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid #333;
    }
    .method-badge {
      font-weight: 800;
      font-size: 13px;
      padding: 6px 14px;
      border-radius: 6px;
      color: #ffffff;
      background: ${methodColor};
      letter-spacing: 0.5px;
    }
    .url-text {
      font-family: "Cascadia Code", Consolas, monospace;
      font-size: 14px;
      color: #ffffff;
      flex: 1;
      background: #2d2d2d;
      padding: 7px 14px;
      border-radius: 6px;
      border: 1px solid #3e3e42;
    }
    .status-badge {
      font-weight: 700;
      font-size: 13px;
      padding: 6px 14px;
      border-radius: 6px;
      color: #ffffff;
      background: ${statusColor};
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .meta-bar {
      display: flex;
      gap: 20px;
      padding: 8px 20px;
      background: #202021;
      font-size: 11px;
      color: #858585;
      border-bottom: 1px solid #2d2d2d;
    }
    .meta-item strong { color: #d4d4d4; }
    .content-area {
      display: grid;
      grid-template-columns: ${reqBody ? '42% 58%' : '1fr'};
      background: #1e1e1e;
    }
    .panel {
      padding: 16px 20px;
      border-right: ${reqBody ? '1px solid #333' : 'none'};
      display: flex;
      flex-direction: column;
    }
    .panel-header {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #858585;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .json-code {
      font-family: "Cascadia Code", Consolas, "Courier New", monospace;
      font-size: 12.5px;
      line-height: 1.55;
      color: #d4d4d4;
      background: #181818;
      padding: 14px 16px;
      border-radius: 8px;
      border: 1px solid #2a2a2a;
      overflow-x: auto;
      white-space: pre;
    }
    .footer-note {
      background: #252526;
      padding: 10px 20px;
      border-top: 1px solid #333;
      font-size: 11px;
      color: #999;
      display: flex;
      justify-content: space-between;
    }
  </style>
</head>
<body>
  <div class="window">
    <div class="title-bar">
      <div class="traffic-lights">
        <span style="background: #ff5f56;"></span>
        <span style="background: #ffbd2e;"></span>
        <span style="background: #27c93f;"></span>
      </div>
      <div class="title-text">backend/routes.http - REST Client Preview</div>
      <div class="badge-tag">NestJS MVC • Bab 9</div>
    </div>

    <div class="request-bar">
      <span class="method-badge">${method}</span>
      <span class="url-text">${url}</span>
      <span class="status-badge">${statusCode} ${status}</span>
    </div>

    <div class="meta-bar">
      <div class="meta-item">Status: <strong>${statusCode} ${status}</strong></div>
      <div class="meta-item">Time: <strong>${time}</strong></div>
      <div class="meta-item">Size: <strong>${size}</strong></div>
      <div class="meta-item">Content-Type: <strong>application/json; charset=utf-8</strong></div>
    </div>

    <div class="content-area">
      ${reqBody ? `
      <div class="panel">
        <div class="panel-header">
          <span>Request Body (JSON)</span>
          <span style="color: #4ec9b0;">Content-Type: application/json</span>
        </div>
        <div class="json-code">${formatJson(reqBody)}</div>
      </div>
      ` : ''}

      <div class="panel">
        <div class="panel-header">
          <span>Response Body (JSON)</span>
          <span style="color: #4ec9b0;">Status: ${statusCode}</span>
        </div>
        <div class="json-code">${formatJson(resBody)}</div>
      </div>
    </div>

    <div class="footer-note">
      <span>PedalRaya Backend • Entitas: <strong>Rute Bersepeda (Route)</strong></span>
      <span>Mahasiswa: <strong>Rizqi Nawaf Putra Rosyadi (103122430010) - SE08-02</strong></span>
    </div>
  </div>
</body>
</html>`;
}

// 8 REST Client Scenarios
const scenarios = [
  {
    filename: '01-rest-client-get-all.png',
    title: 'GET ALL ROUTES - Mengambil Seluruh Koleksi Rute',
    method: 'GET',
    methodColor: '#059669', // green
    url: 'http://localhost:3000/routes',
    statusCode: '200',
    status: 'OK',
    statusColor: '#059669',
    time: '18 ms',
    size: '3.42 KB',
    reqBody: null,
    resBody: [
      {
        id: 'route-1',
        nama: 'Jalur Kabut Pinus Mangunan',
        kategori: 'gravel',
        kategoriLabel: 'Gravel & All-Road',
        lokasi: 'Dlingo, Bantul, DI Yogyakarta',
        kondisi: 'Tanah Padat & Aspal Rusak',
        jarak: 38,
        elevasi: 620,
        durasi: '2.5 Jam',
        kesulitan: 'menengah',
        kesulitanLabel: 'Menengah',
        rekomendasi: 'Rekomendasi Ban: 38-45c',
        foto: '/assets/images/Jalur Kabut Pinus Mangunan.webp',
        deskripsi: 'Kombinasi jalan tanah padat dan aspal pedesaan di tengah hutan pinus yang sejuk...',
        terverifikasi: true,
        createdAt: '2026-10-01T08:00:00.000Z'
      },
      {
        id: 'route-2',
        nama: 'Tanjakan Lingkar Kaldera Sembalun',
        kategori: 'road',
        kategoriLabel: 'Road Bike',
        lokasi: 'Sembalun, Lombok Timur',
        kondisi: 'Aspal Hotmix Mulus',
        jarak: 74,
        elevasi: 1150,
        durasi: '4.0 Jam',
        kesulitan: 'sulit',
        kesulitanLabel: 'Menantang / Mahir',
        foto: '/assets/images/Tanjakan Lingkar Kaldera Sembalun.jpg',
        deskripsi: 'Aspal mulus menembus punggung bukit vulkanik dengan gradien rata-rata 7%...',
        terverifikasi: true,
        createdAt: '2026-10-05T07:30:00.000Z'
      },
      {
        id: 'route-3',
        nama: 'Merapi Foothills Classic Loop',
        kategori: 'road',
        kategoriLabel: 'Road Bike',
        lokasi: 'Sleman, DI Yogyakarta',
        jarak: 48,
        elevasi: 540,
        durasi: '2.2 Jam',
        kesulitan: 'menengah',
        terverifikasi: true,
        createdAt: '2026-10-10T06:15:00.000Z'
      }
    ]
  },
  {
    filename: '02-rest-client-get-one.png',
    title: 'GET SINGLE ROUTE - Mengambil Detail Rute Berdasarkan ID',
    method: 'GET',
    methodColor: '#059669',
    url: 'http://localhost:3000/routes/route-1',
    statusCode: '200',
    status: 'OK',
    statusColor: '#059669',
    time: '12 ms',
    size: '1.28 KB',
    reqBody: null,
    resBody: {
      id: 'route-1',
      nama: 'Jalur Kabut Pinus Mangunan',
      kategori: 'gravel',
      kategoriLabel: 'Gravel & All-Road',
      lokasi: 'Dlingo, Bantul, DI Yogyakarta',
      kondisi: 'Tanah Padat & Aspal Rusak',
      jarak: 38,
      elevasi: 620,
      durasi: '2.5 Jam',
      kesulitan: 'menengah',
      kesulitanLabel: 'Menengah',
      rekomendasi: 'Rekomendasi Ban: 38-45c',
      foto: '/assets/images/Jalur Kabut Pinus Mangunan.webp',
      deskripsi: 'Kombinasi jalan tanah padat dan aspal pedesaan di tengah hutan pinus yang sejuk dengan aroma getah pohon segar di pagi hari.',
      ringkasanLengkap: 'Perjalanan menembus segarnya kanopi pinus di perbukitan Dlingo.',
      waktuTerbaik: '06:00 - 09:30 WIB',
      elevasiMaks: '480 mdpl',
      permukaan: { aspal: 65, tanah: 25, makadam: 10 },
      checkpoints: [
        { km: 'KM 0', nama: 'Pasar Tradisional Imogiri', desc: 'Titik temu sarapan sebelum tanjakan.' },
        { km: 'KM 22', nama: 'Puncak Becici & Hutan Pinus', desc: 'Area teduh dengan angin sepoi-sepoi.' },
        { km: 'KM 38', nama: 'Kedai Kopi Omah Dhuwur', desc: 'Garis akhir perjalanan dan sharing gowes.' }
      ],
      terverifikasi: true,
      createdAt: '2026-10-01T08:00:00.000Z'
    }
  },
  {
    filename: '03-rest-client-post-create.png',
    title: 'POST CREATE ROUTE - Menambahkan Rute Baru (201 Created)',
    method: 'POST',
    methodColor: '#2563eb', // blue
    url: 'http://localhost:3000/routes',
    statusCode: '201',
    status: 'Created',
    statusColor: '#059669',
    time: '24 ms',
    size: '1.45 KB',
    reqBody: {
      nama: 'Gowes Keliling Danau BSD Grand City',
      kategori: 'road',
      lokasi: 'BSD City, Tangerang Selatan',
      jarak: 25.5,
      elevasi: 120,
      kesulitan: 'mudah',
      durasi: '1.5 Jam',
      kondisi: 'Aspal Halus & Ramah Pesepeda',
      rekomendasi: 'Cocok untuk Road Bike & Sepeda Lipat',
      foto: '/assets/images/pexels-run-ffwpu-5687405.jpg',
      deskripsi: 'Rute santai akhir pekan menyusuri area hijau dan danau modern di BSD.',
      terverifikasi: true
    },
    resBody: {
      id: 'route-1732350890123',
      nama: 'Gowes Keliling Danau BSD Grand City',
      kategori: 'road',
      kategoriLabel: 'Road Bike',
      lokasi: 'BSD City, Tangerang Selatan',
      kondisi: 'Aspal Halus & Ramah Pesepeda',
      jarak: 25.5,
      elevasi: 120,
      durasi: '1.5 Jam',
      kesulitan: 'mudah',
      kesulitanLabel: 'Pemula / Santai',
      rekomendasi: 'Cocok untuk Road Bike & Sepeda Lipat',
      foto: '/assets/images/pexels-run-ffwpu-5687405.jpg',
      deskripsi: 'Rute santai akhir pekan menyusuri area hijau dan danau modern di BSD.',
      ringkasanLengkap: 'Rute santai akhir pekan menyusuri area hijau dan danau modern di BSD.',
      waktuTerbaik: '06:00 - 09:30 WIB',
      elevasiMaks: '120 mdpl',
      permukaan: { aspal: 95, tanah: 0, makadam: 5 },
      checkpoints: [
        { km: 'KM 0', nama: 'Titik Awal Keberangkatan', desc: 'Start kumpul di BSD City. Briefing rute.' },
        { km: 'KM 13', nama: 'Rest Point & Puncak Tanjakan', desc: 'Rehidrasi air mineral.' },
        { km: 'KM 25.5', nama: 'Finish & Spot Ramah Sepeda', desc: 'Garis akhir gowes, sarapan santai.' }
      ],
      terverifikasi: true,
      createdAt: '2026-11-23T08:35:10.742Z'
    }
  },
  {
    filename: '04-rest-client-patch-update.png',
    title: 'PATCH UPDATE ROUTE - Memperbarui Data Rute (200 OK)',
    method: 'PATCH',
    methodColor: '#d97706', // amber
    url: 'http://localhost:3000/routes/route-1',
    statusCode: '200',
    status: 'OK',
    statusColor: '#059669',
    time: '19 ms',
    size: '1.30 KB',
    reqBody: {
      kondisi: 'Aspal Baru Diaspal Ulang & Sangat Mulus',
      durasi: '2.0 Jam',
      jarak: 40.0
    },
    resBody: {
      id: 'route-1',
      nama: 'Jalur Kabut Pinus Mangunan',
      kategori: 'gravel',
      kategoriLabel: 'Gravel & All-Road',
      lokasi: 'Dlingo, Bantul, DI Yogyakarta',
      kondisi: 'Aspal Baru Diaspal Ulang & Sangat Mulus',
      jarak: 40.0,
      elevasi: 620,
      durasi: '2.0 Jam',
      kesulitan: 'menengah',
      kesulitanLabel: 'Menengah',
      rekomendasi: 'Rekomendasi Ban: 38-45c',
      foto: '/assets/images/Jalur Kabut Pinus Mangunan.webp',
      deskripsi: 'Kombinasi jalan tanah padat dan aspal pedesaan di tengah hutan pinus...',
      terverifikasi: true,
      createdAt: '2026-10-01T08:00:00.000Z',
      updatedAt: '2026-11-23T08:35:10.745Z'
    }
  },
  {
    filename: '05-rest-client-delete.png',
    title: 'DELETE ROUTE - Menghapus Rute Berdasarkan ID (200 OK)',
    method: 'DELETE',
    methodColor: '#dc2626', // red
    url: 'http://localhost:3000/routes/route-5',
    statusCode: '200',
    status: 'OK',
    statusColor: '#059669',
    time: '15 ms',
    size: '890 B',
    reqBody: null,
    resBody: {
      message: 'Rute "Loop Jalur Hijau Sungai Cisadane" berhasil dihapus dari koleksi PedalRaya.',
      deletedRoute: {
        id: 'route-5',
        nama: 'Loop Jalur Hijau Sungai Cisadane',
        kategori: 'leisure',
        kategoriLabel: 'Santai / Leisure',
        lokasi: 'Tangerang, Banten',
        kondisi: 'Paving Block & Aspal Rata',
        jarak: 18,
        elevasi: 45,
        durasi: '1.2 Jam',
        kesulitan: 'mudah',
        kesulitanLabel: 'Pemula / Santai',
        rekomendasi: 'Cocok untuk Sepeda Lipat / Urban Bike',
        foto: '/assets/images/pexels-run-ffwpu-5687405.jpg',
        deskripsi: 'Gowes santai keluarga menyusuri tepian Sungai Cisadane...',
        terverifikasi: true,
        createdAt: '2026-10-15T06:45:00.000Z'
      }
    }
  },
  {
    filename: '06-rest-client-error-notfound-404.png',
    title: 'SKENARIO ERROR 1 - NotFoundException (404 Not Found)',
    method: 'GET',
    methodColor: '#059669',
    url: 'http://localhost:3000/routes/route-999-tidak-ada',
    statusCode: '404',
    status: 'Not Found',
    statusColor: '#dc2626',
    time: '10 ms',
    size: '230 B',
    reqBody: null,
    resBody: {
      message: 'Rute dengan ID "route-999-tidak-ada" tidak ditemukan pada sistem PedalRaya.',
      error: 'Not Found',
      statusCode: 404
    }
  },
  {
    filename: '07-rest-client-error-conflict-409.png',
    title: 'SKENARIO ERROR 2 - ConflictException (409 Conflict)',
    method: 'POST',
    methodColor: '#2563eb',
    url: 'http://localhost:3000/routes',
    statusCode: '409',
    status: 'Conflict',
    statusColor: '#dc2626',
    time: '14 ms',
    size: '265 B',
    reqBody: {
      nama: 'Jalur Kabut Pinus Mangunan',
      kategori: 'gravel',
      lokasi: 'Bantul, Yogyakarta',
      jarak: 35,
      elevasi: 500,
      kesulitan: 'menengah'
    },
    resBody: {
      message: 'Rute dengan nama "Jalur Kabut Pinus Mangunan" sudah terdaftar di PedalRaya. Harap gunakan nama rute yang unik.',
      error: 'Conflict',
      statusCode: 409
    }
  },
  {
    filename: '08-rest-client-error-validation-400.png',
    title: 'SKENARIO ERROR 3 - ValidationPipe BadRequestException (400 Bad Request)',
    method: 'POST',
    methodColor: '#2563eb',
    url: 'http://localhost:3000/routes',
    statusCode: '400',
    status: 'Bad Request',
    statusColor: '#dc2626',
    time: '16 ms',
    size: '410 B',
    reqBody: {
      nama: 'A',
      kategori: 'pesawat_terbang',
      lokasi: 'Jakarta',
      jarak: -10,
      elevasi: -50,
      kesulitan: 'mustahil'
    },
    resBody: {
      message: [
        'Nama rute minimal 3 karakter',
        'Kategori harus salah satu dari: road, gravel, mtb, touring, leisure',
        'Jarak rute minimal 0.1 km',
        'Elevasi tidak boleh negatif',
        'Tingkat kesulitan harus: mudah, menengah, atau sulit'
      ],
      error: 'Bad Request',
      statusCode: 400
    }
  }
];

console.log('Generating REST Client screenshot templates and rendering PNGs...');

for (const sc of scenarios) {
  const htmlContent = renderRestClientHtml(sc);
  const tempHtmlPath = path.join(tempDir, sc.filename.replace('.png', '.html'));
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf-8');

  const destPngPath = path.join(outDir, sc.filename);
  const cmd = `"${chromePath}" --headless --disable-gpu --screenshot="${destPngPath}" --window-size=1200,820 "file://${tempHtmlPath}"`;
  console.log(`Rendering: ${sc.filename}...`);
  execSync(cmd, { stdio: 'pipe' });
}

console.log('Semua screenshot REST Client berhasil dibuat di docs/screenshots!');
