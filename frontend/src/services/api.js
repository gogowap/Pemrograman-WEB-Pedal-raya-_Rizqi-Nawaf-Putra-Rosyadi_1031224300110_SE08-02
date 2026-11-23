// ========================================================
// PEDALRAYA API CLIENT SERVICE (NestJS Backend Integration)
// ========================================================
const API_BASE_URL = 'http://localhost:3000/routes';

export const routeApi = {
  /**
   * Cek apakah backend NestJS sedang aktif
   */
  async checkHealth() {
    try {
      const res = await fetch(API_BASE_URL, {
        method: 'GET',
        headers: { Accept: 'application/json' },
      });
      return res.ok;
    } catch {
      return false;
    }
  },

  /**
   * GET /routes - Mengambil seluruh data rute dari backend
   */
  async getRoutes(params = {}) {
    const query = new URLSearchParams();
    if (params.kategori && params.kategori !== 'all') query.append('kategori', params.kategori);
    if (params.kesulitan && params.kesulitan !== 'all') query.append('kesulitan', params.kesulitan);
    if (params.search) query.append('search', params.search);

    const url = `${API_BASE_URL}${query.toString() ? `?${query.toString()}` : ''}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `Gagal mengambil rute (HTTP ${res.status})`);
    }

    return await res.json();
  },

  /**
   * GET /routes/:id - Mengambil satu rute berdasarkan ID
   */
  async getRouteById(id) {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `Rute tidak ditemukan (HTTP ${res.status})`);
    }

    return await res.json();
  },

  /**
   * POST /routes - Menambahkan rute baru ke backend
   */
  async createRoute(routeData) {
    const res = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(routeData),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      // Jika pesan error array (dari ValidationPipe) gabungkan jadi satu kalimat
      const message = Array.isArray(data.message)
        ? data.message.join(', ')
        : data.message || `Gagal menambah rute (HTTP ${res.status})`;
      throw new Error(message);
    }

    return data;
  },

  /**
   * PATCH /routes/:id - Memperbarui sebagian data rute di backend
   */
  async updateRoute(id, updateData) {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const message = Array.isArray(data.message)
        ? data.message.join(', ')
        : data.message || `Gagal memperbarui rute (HTTP ${res.status})`;
      throw new Error(message);
    }

    return data;
  },

  /**
   * DELETE /routes/:id - Menghapus rute dari backend
   */
  async deleteRoute(id) {
    const res = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: { Accept: 'application/json' },
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(data.message || `Gagal menghapus rute (HTTP ${res.status})`);
    }

    return data;
  },
};
