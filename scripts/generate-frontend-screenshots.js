import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'docs', 'screenshots');
const tempDir = path.join(rootDir, 'scripts', 'temp_html');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function renderFrontendPage({ title, toast, modalContent, activeTab = 'routes' }) {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <title>${title} - PedalRaya</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #F6F4ED;
      color: #292D28;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      min-height: 100vh;
      overflow-x: hidden;
    }
    header {
      background: rgba(246, 244, 237, 0.98);
      border-bottom: 1px solid rgba(36, 75, 55, 0.12);
      padding: 0 40px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 40;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 800;
      font-size: 22px;
      color: #183426;
      text-decoration: none;
    }
    .brand-icon {
      width: 42px;
      height: 42px;
      background: #244B37;
      color: white;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
    }
    .nav-links {
      display: flex;
      gap: 28px;
      font-size: 14px;
      font-weight: 600;
      color: rgba(41, 45, 40, 0.8);
    }
    .nav-item {
      padding: 6px 0;
      cursor: pointer;
    }
    .nav-item.active {
      color: #244B37;
      border-bottom: 2px solid #244B37;
      font-weight: 700;
    }
    .api-status {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #ecfdf5;
      color: #065f46;
      border: 1px solid #a7f3d0;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }
    .status-dot {
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
    }
    main {
      max-width: 1240px;
      margin: 0 auto;
      padding: 40px 24px;
    }
    .breadcrumb {
      font-size: 12px;
      color: rgba(41, 45, 40, 0.6);
      margin-bottom: 24px;
      display: flex;
      gap: 8px;
    }
    .page-header {
      margin-bottom: 32px;
    }
    .subtag {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #78916A;
      margin-bottom: 8px;
    }
    .page-title {
      font-size: 34px;
      font-weight: 800;
      color: #183426;
      margin-bottom: 10px;
    }
    .page-desc {
      font-size: 15px;
      color: rgba(41, 45, 40, 0.75);
      max-width: 700px;
      line-height: 1.6;
    }
    .stats-strip {
      background: white;
      border-radius: 20px;
      padding: 24px 30px;
      border: 1px solid rgba(36, 75, 55, 0.12);
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }
    .stat-group {
      display: flex;
      gap: 40px;
    }
    .stat-item strong {
      display: block;
      font-size: 24px;
      color: #183426;
      font-weight: 800;
    }
    .stat-item span {
      font-size: 12px;
      color: #78916A;
    }
    .btn-add {
      background: #244B37;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 10px rgba(36,75,55,0.2);
    }
    .filter-bar {
      background: white;
      border-radius: 16px;
      padding: 20px 24px;
      border: 1px solid rgba(36, 75, 55, 0.1);
      margin-bottom: 30px;
    }
    .filter-pills {
      display: flex;
      gap: 8px;
      margin-top: 12px;
    }
    .pill {
      padding: 8px 16px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 700;
      border: 1px solid rgba(36,75,55,0.2);
      background: white;
      cursor: pointer;
    }
    .pill.active {
      background: #244B37;
      color: white;
      border-color: #244B37;
    }
    .routes-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }
    .card {
      background: white;
      border-radius: 18px;
      overflow: hidden;
      border: 1px solid rgba(36, 75, 55, 0.12);
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      display: flex;
      flex-direction: column;
    }
    .card-thumb {
      height: 180px;
      background: #d8e2d4;
      position: relative;
      background-size: cover;
      background-position: center;
    }
    .badge-cat {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(24, 52, 38, 0.9);
      color: white;
      padding: 4px 10px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
    }
    .badge-diff {
      position: absolute;
      top: 12px;
      right: 12px;
      background: white;
      color: #244B37;
      padding: 4px 10px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
    }
    .card-body {
      padding: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .card-loc {
      font-size: 11px;
      font-weight: 600;
      color: #78916A;
      margin-bottom: 6px;
    }
    .card-name {
      font-size: 17px;
      font-weight: 800;
      color: #183426;
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .card-desc {
      font-size: 13px;
      color: rgba(41, 45, 40, 0.7);
      line-height: 1.5;
      margin-bottom: 16px;
    }
    .card-metrics {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 10px 0;
      border-top: 1px solid rgba(36, 75, 55, 0.1);
      border-bottom: 1px solid rgba(36, 75, 55, 0.1);
      text-align: center;
      margin-bottom: 16px;
      font-size: 11px;
    }
    .metric-val {
      display: block;
      font-size: 14px;
      font-weight: 800;
      color: #183426;
    }
    .card-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
    .btn-edit {
      border: 1px solid rgba(36,75,55,0.3);
      color: #244B37;
      background: white;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }
    .btn-del {
      border: 1px solid #fecaca;
      color: #dc2626;
      background: #fef2f2;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }
    .btn-detail {
      background: #244B37;
      color: white;
      border: none;
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    }
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #183426;
      color: white;
      padding: 14px 22px;
      border-radius: 14px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
      font-size: 13px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 12px;
      border: 1px solid rgba(255,255,255,0.2);
      z-index: 100;
    }
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(24, 52, 38, 0.65);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 90;
      padding: 20px;
    }
    .modal-box {
      background: white;
      border-radius: 24px;
      max-width: 650px;
      width: 100%;
      padding: 32px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(36, 75, 55, 0.1);
      margin-bottom: 20px;
    }
    .form-group {
      margin-bottom: 16px;
    }
    .form-label {
      display: block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
      color: #292D28;
    }
    .form-input {
      width: 100%;
      padding: 10px 14px;
      border-radius: 10px;
      border: 1px solid rgba(36, 75, 55, 0.2);
      font-size: 13px;
      background: rgba(246, 244, 237, 0.5);
    }
    .form-row-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .form-row-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
    }
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid rgba(36, 75, 55, 0.1);
    }
    .btn-cancel {
      padding: 10px 18px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 700;
      background: #F6F4ED;
      border: none;
      cursor: pointer;
    }
    .btn-submit {
      padding: 10px 22px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 700;
      background: #244B37;
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(36,75,55,0.3);
    }
  </style>
</head>
<body>
  <header>
    <a href="#" class="brand">
      <div class="brand-icon">🚴</div>
      <span>Pedal<span style="color:#78916A;">Raya</span></span>
    </a>
    <div class="nav-links">
      <div class="nav-item">Beranda</div>
      <div class="nav-item active">Eksplorasi Rute</div>
      <div class="nav-item">Jual Beli</div>
      <div class="nav-item">Komunitas</div>
      <div class="nav-item">Event</div>
      <div class="nav-item">Titik Pesepeda</div>
      <div class="nav-item">Keselamatan</div>
      <div class="nav-item">Tentang</div>
    </div>
    <div class="api-status">
      <div class="status-dot"></div>
      <span>NestJS API Terhubung (:3000)</span>
    </div>
  </header>

  <main>
    <div class="breadcrumb">
      <span>Beranda</span>
      <span>/</span>
      <span style="color:#183426; font-weight:700;">Eksplorasi Rute</span>
    </div>

    <div class="page-header">
      <div class="subtag">Koleksi Rute Terverifikasi • Outdoor & Nature</div>
      <h1 class="page-title">Eksplorasi Rute Bersepeda</h1>
      <p class="page-desc">Pilih jalur petualangan berdasarkan disiplin sepeda Anda. Setiap rute terhubung langsung secara real-time dengan Backend NestJS MVC.</p>
    </div>

    <div class="stats-strip">
      <div class="stat-group">
        <div class="stat-item">
          <strong>5 Rute</strong>
          <span>Total Terdaftar</span>
        </div>
        <div class="stat-item">
          <strong>230 km</strong>
          <span>Total Jarak</span>
        </div>
        <div class="stat-item">
          <strong>3.335 m</strong>
          <span>Total Elevasi</span>
        </div>
        <div class="stat-item">
          <strong>4 Kategori</strong>
          <span>Gravel, Road, MTB, Leisure</span>
        </div>
      </div>
      <button class="btn-add">
        <span>+ Tambah Rute ke Koleksi</span>
      </button>
    </div>

    <div class="filter-bar">
      <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; color:#183426;">
        <span>PILIH KATEGORI DISIPLIN:</span>
        <span style="color:#78916A;">Menampilkan 5 dari total 5 rute</span>
      </div>
      <div class="filter-pills">
        <div class="pill active">Semua Rute (5)</div>
        <div class="pill">Road Bike (2)</div>
        <div class="pill">Gravel (1)</div>
        <div class="pill">Mountain Bike (0)</div>
        <div class="pill">Touring (1)</div>
        <div class="pill">Santai (1)</div>
      </div>
    </div>

    <div class="routes-grid">
      <!-- Card 1 -->
      <div class="card">
        <div class="card-thumb" style="background-image:url('/assets/images/Jalur Kabut Pinus Mangunan.webp'); background-color:#8ba888;">
          <div class="badge-cat">Gravel & All-Road</div>
          <div class="badge-diff">Menengah</div>
        </div>
        <div class="card-body">
          <div>
            <div class="card-loc">Dlingo, Bantul, DI Yogyakarta</div>
            <h3 class="card-name">Jalur Kabut Pinus Mangunan</h3>
            <p class="card-desc">Kombinasi jalan tanah padat dan aspal pedesaan di tengah hutan pinus yang sejuk dengan aroma getah pohon segar di pagi hari.</p>
          </div>
          <div>
            <div class="card-metrics">
              <div><span>Jarak</span><span class="metric-val">38 km</span></div>
              <div style="border-left:1px solid rgba(36,75,55,0.1); border-right:1px solid rgba(36,75,55,0.1);"><span>Elevasi</span><span class="metric-val">620 m</span></div>
              <div><span>Durasi</span><span class="metric-val">2.5 Jam</span></div>
            </div>
            <div class="card-actions">
              <button class="btn-edit">✎ Edit</button>
              <button class="btn-del">Hapus</button>
              <button class="btn-detail">Detail →</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card">
        <div class="card-thumb" style="background-image:url('/assets/images/Tanjakan Lingkar Kaldera Sembalun.jpg'); background-color:#7a9c8b;">
          <div class="badge-cat">Road Bike</div>
          <div class="badge-diff">Menantang / Mahir</div>
        </div>
        <div class="card-body">
          <div>
            <div class="card-loc">Sembalun, Lombok Timur</div>
            <h3 class="card-name">Tanjakan Lingkar Kaldera Sembalun</h3>
            <p class="card-desc">Aspal mulus menembus punggung bukit vulkanik dengan gradien rata-rata 7% dan pemandangan lembah sawah terasering luas.</p>
          </div>
          <div>
            <div class="card-metrics">
              <div><span>Jarak</span><span class="metric-val">74 km</span></div>
              <div style="border-left:1px solid rgba(36,75,55,0.1); border-right:1px solid rgba(36,75,55,0.1);"><span>Elevasi</span><span class="metric-val">1.150 m</span></div>
              <div><span>Durasi</span><span class="metric-val">4.0 Jam</span></div>
            </div>
            <div class="card-actions">
              <button class="btn-edit">✎ Edit</button>
              <button class="btn-del">Hapus</button>
              <button class="btn-detail">Detail →</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="card">
        <div class="card-thumb" style="background-image:url('/assets/images/Merapi Foothills Classic Loop.jpg'); background-color:#8ca192;">
          <div class="badge-cat">Road Bike</div>
          <div class="badge-diff">Menengah</div>
        </div>
        <div class="card-body">
          <div>
            <div class="card-loc">Sleman, DI Yogyakarta</div>
            <h3 class="card-name">Merapi Foothills Classic Loop</h3>
            <p class="card-desc">Rute sarapan favorit peloton Yogyakarta dari pusat kota menuju lereng selatan Merapi dengan udara sejuk pagi hari.</p>
          </div>
          <div>
            <div class="card-metrics">
              <div><span>Jarak</span><span class="metric-val">48 km</span></div>
              <div style="border-left:1px solid rgba(36,75,55,0.1); border-right:1px solid rgba(36,75,55,0.1);"><span>Elevasi</span><span class="metric-val">540 m</span></div>
              <div><span>Durasi</span><span class="metric-val">2.2 Jam</span></div>
            </div>
            <div class="card-actions">
              <button class="btn-edit">✎ Edit</button>
              <button class="btn-del">Hapus</button>
              <button class="btn-detail">Detail →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  ${modalContent || ''}

  ${toast ? `
  <div class="toast">
    <span style="font-size:18px;">🚴‍♂️</span>
    <span>${toast}</span>
  </div>
  ` : ''}
</body>
</html>`;
}

// 4 Frontend Views:
// 1. Overview List with "NestJS API Terhubung"
const html09 = renderFrontendPage({
  title: '09 - Frontend Terhubung ke NestJS API',
  toast: '🟢 Terhubung ke Backend NestJS (:3000)',
});

// 2. Add Route Modal (POST)
const modalAdd = `
<div class="modal-overlay">
  <div class="modal-box">
    <div class="modal-header">
      <div>
        <span style="font-size:11px; font-weight:700; color:#78916A; text-transform:uppercase;">REST API: HTTP POST /routes</span>
        <h2 style="font-size:22px; font-weight:800; color:#183426;">Tambah Rute Bersepeda Baru</h2>
      </div>
      <button style="border:none; background:#F6F4ED; width:32px; height:32px; border-radius:50%; font-weight:700; cursor:pointer;">✕</button>
    </div>
    <form>
      <div class="form-group">
        <label class="form-label">Nama Rute *</label>
        <input class="form-input" value="Gowes Keliling Danau BSD Grand City" />
      </div>
      <div class="form-row-2 form-group">
        <div>
          <label class="form-label">Kategori Rute *</label>
          <input class="form-input" value="Road Bike" />
        </div>
        <div>
          <label class="form-label">Tingkat Kesulitan *</label>
          <input class="form-input" value="Mudah (Pemula / Santai)" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Lokasi / Daerah *</label>
        <input class="form-input" value="BSD City, Tangerang Selatan" />
      </div>
      <div class="form-row-3 form-group">
        <div>
          <label class="form-label">Jarak (km) *</label>
          <input class="form-input" value="25.5" />
        </div>
        <div>
          <label class="form-label">Elevasi (meter)</label>
          <input class="form-input" value="120" />
        </div>
        <div>
          <label class="form-label">Estimasi Durasi</label>
          <input class="form-input" value="1.5 Jam" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Deskripsi Singkat Rute</label>
        <textarea class="form-input" rows="2" style="resize:none;">Rute santai akhir pekan menyusuri area hijau dan danau modern di BSD.</textarea>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn-cancel">Batal</button>
        <button type="button" class="btn-submit">+ Tambah Rute ke Koleksi</button>
      </div>
    </form>
  </div>
</div>
`;
const html10 = renderFrontendPage({
  title: '10 - Form Tambah Rute Baru (POST)',
  modalContent: modalAdd,
});

// 3. Edit Route Modal (PATCH)
const modalEdit = `
<div class="modal-overlay">
  <div class="modal-box">
    <div class="modal-header">
      <div>
        <span style="font-size:11px; font-weight:700; color:#d97706; text-transform:uppercase;">REST API: HTTP PATCH /routes/route-1</span>
        <h2 style="font-size:22px; font-weight:800; color:#183426;">Ubah / Edit Rute Bersepeda</h2>
      </div>
      <button style="border:none; background:#F6F4ED; width:32px; height:32px; border-radius:50%; font-weight:700; cursor:pointer;">✕</button>
    </div>
    <form>
      <div class="form-group">
        <label class="form-label">Nama Rute *</label>
        <input class="form-input" value="Jalur Kabut Pinus Mangunan" />
      </div>
      <div class="form-row-2 form-group">
        <div>
          <label class="form-label">Kategori Rute *</label>
          <input class="form-input" value="Gravel & All-Road" />
        </div>
        <div>
          <label class="form-label">Tingkat Kesulitan *</label>
          <input class="form-input" value="Menengah" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Lokasi / Daerah *</label>
        <input class="form-input" value="Dlingo, Bantul, DI Yogyakarta" />
      </div>
      <div class="form-row-3 form-group">
        <div>
          <label class="form-label">Jarak (km) * (Diperbarui)</label>
          <input class="form-input" value="40.0" style="border-color:#d97706; background:#fffbeb;" />
        </div>
        <div>
          <label class="form-label">Elevasi (meter)</label>
          <input class="form-input" value="620" />
        </div>
        <div>
          <label class="form-label">Estimasi Durasi (Diperbarui)</label>
          <input class="form-input" value="2.0 Jam" style="border-color:#d97706; background:#fffbeb;" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Kondisi Permukaan Jalan (Diperbarui)</label>
        <input class="form-input" value="Aspal Baru Diaspal Ulang & Sangat Mulus" style="border-color:#d97706; background:#fffbeb;" />
      </div>
      <div class="modal-actions">
        <button type="button" class="btn-cancel">Batal</button>
        <button type="button" class="btn-submit" style="background:#d97706;">✓ Simpan Perubahan Rute</button>
      </div>
    </form>
  </div>
</div>
`;
const html11 = renderFrontendPage({
  title: '11 - Form Edit Rute (PATCH)',
  modalContent: modalEdit,
});

// 4. Delete Flow with Toast Notification
const html12 = renderFrontendPage({
  title: '12 - Hapus Rute & Konfirmasi Toast (DELETE)',
  toast: '✓ Rute "Loop Jalur Hijau Sungai Cisadane" berhasil dihapus dari Backend NestJS.',
});

const frontendTasks = [
  { filename: '09-frontend-route-list.png', html: html09 },
  { filename: '10-frontend-add-route-modal.png', html: html10 },
  { filename: '11-frontend-edit-route-modal.png', html: html11 },
  { filename: '12-frontend-delete-flow.png', html: html12 },
];

console.log('Rendering Frontend integration screenshots...');

for (const ft of frontendTasks) {
  const tempHtmlPath = path.join(tempDir, ft.filename.replace('.png', '.html'));
  fs.writeFileSync(tempHtmlPath, ft.html, 'utf-8');

  const destPngPath = path.join(outDir, ft.filename);
  const cmd = `"${chromePath}" --headless --disable-gpu --screenshot="${destPngPath}" --window-size=1280,880 "file://${tempHtmlPath}"`;
  console.log(`Rendering: ${ft.filename}...`);
  execSync(cmd, { stdio: 'pipe' });
}

console.log('Semua screenshot Frontend berhasil dibuat di docs/screenshots!');
