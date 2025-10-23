# API CRUD Backend untuk Layanan Cuci Sepatu

Proyek ini adalah REST API sederhana untuk mengelola daftar item dalam layanan cuci sepatu. API ini dibangun dengan Node.js dan Express.js, menggunakan Supabase sebagai database, dan di-deploy di Vercel.

---

### URL API Publik

API ini telah di-deploy dan dapat diakses melalui URL berikut:
`https://your-api-url.vercel.app`

---

### Teknologi yang Digunakan
* **Backend:** Node.js, Express.js
* **Database:** Supabase (PostgreSQL)
* **Deployment:** Vercel

---

### Endpoint API

Semua endpoint relatif terhadap URL dasar.

#### 1. Ambil Semua Data Item
* **Metode:** `GET`
* **Endpoint:** `/items`
* **Deskripsi:** Mengambil daftar semua pekerjaan cuci sepatu dari database.
* **Contoh `curl`:**
    ```bash
    curl [https://your-api-url.vercel.app/items](https://your-api-url.vercel.app/items)
    ```

#### 2. Ambil Item Berdasarkan Status (Filter)
* **Metode:** `GET`
* **Endpoint:** `/items?status={namaStatus}`
* **Deskripsi:** Mengambil semua pekerjaan yang cocok dengan status yang diberikan (contoh: "Washing", "Completed").
* **Contoh `curl`:**
    ```bash
    curl "[https://your-api-url.vercel.app/items?status=Completed](https://your-api-url.vercel.app/items?status=Completed)"
    ```

#### 3. Buat Item Baru
* **Metode:** `POST`
* **Endpoint:** `/items`
* **Deskripsi:** Menambahkan pekerjaan cuci sepatu baru ke dalam database.
* **Body Permintaan (JSON):**
    ```json
    {
      "customer_name": "Nama Pelanggan Baru",
      "status": "Washing"
    }
    ```
* **Contoh `curl`:**
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"customer_name":"Nama Pelanggan Baru","status":"Washing"}' [https://your-api-url.vercel.app/items](https://your-api-url.vercel.app/items)
    ```

#### 4. Perbarui Status Item
* **Metode:** `PUT`
* **Endpoint:** `/items/{id}`
* **Deskripsi:** Memperbarui status pekerjaan tertentu menggunakan ID uniknya.
* **Body Permintaan (JSON):**
    ```json
    {
      "status": "Completed"
    }
    ```
* **Contoh `curl`:**
    ```bash
    curl -X PUT -H "Content-Type: application/json" -d '{"status":"Completed"}' [https://your-api-url.vercel.app/items/1](https://your-api-url.vercel.app/items/1)
    ```

#### 5. Hapus Item
* **Metode:** `DELETE`
* **Endpoint:** `/items/{id}`
* **Deskripsi:** Menghapus pekerjaan tertentu dari database menggunakan ID uniknya.
* **Contoh `curl`:**
    ```bash
    curl -X DELETE [https://your-api-url.vercel.app/items/1](https://your-api-url.vercel.app/items/1)
    ```
