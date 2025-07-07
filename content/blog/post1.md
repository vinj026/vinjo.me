---
title: "Dummy Blog Post for Testing"
description: "A placeholder post to test the layout and design of this blog."
date: 2025-07-06
tags: ["placeholder", "testing", "lorem"]
---

## Panduan Penggunaan Prose Components dalam Nuxt Content

Berikut adalah panduan lengkap penggunaan berbagai **Prose Components** yang tersedia di [Nuxt Content](https://content.nuxtjs.org/). Artikel ini mencakup semua elemen penulisan yang sering digunakan untuk membuat dokumentasi, blog, atau halaman konten dinamis dalam proyek Nuxt 3+.

## Heading (`#` sampai `#####`)

Heading sangat penting untuk struktur dokumen Anda. Di Markdown, heading ditulis dengan tanda pagar (`#`). Berikut contohnya:

### H2: Pengantar

Ini adalah contoh teks di bawah heading level 2.

#### H3: Subbagian Penting

Bagian ini membahas poin-poin kecil dari topik utama.

##### H5: Detail Spesifik

Hanya digunakan jika diperlukan untuk rincian tambahan.

## Paragraf dengan Bold, Italic, dan Inline Code

Paragraf adalah blok dasar dari konten Markdown. Anda bisa menambahkan gaya seperti **bold**, _italic_, dan `inline code`.

Contoh paragraf:  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna quis ultricies lacinia, sapien nisl fermentum leo, nec dapibus nisi justo non nulla. **Suspendisse potenti**. _Donec vitae lacus euismod_, `nuxt.config.ts` adalah file konfigurasi utama dalam proyek Nuxt 3.

## Link (Eksternal dan Internal)

Anda dapat menautkan ke halaman lain menggunakan link internal maupun eksternal.

- [Dokumentasi Resmi Nuxt Content](https://content.nuxtjs.org)
- [Kunjungi GitHub saya](https://github.com/johndoe)
- [Navigasi ke bagian ini](#heading-hingga-)

## Blockquote

Gunakan blockquote untuk kutipan atau catatan penting:

> Nuxt Content memungkinkan Anda membuat konten statis dan dinamis dengan mudah menggunakan Markdown, YAML, JSON, hingga HTML.

## Daftar (Ordered dan Unordered)

### Ordered List

1. Buka terminal
2. Jalankan perintah `npm install`
3. Mulai aplikasi dengan `npm run dev`

### Unordered List

- Vue.js
- Nuxt 3
- Tailwind CSS
- TypeScript

## Tabel

| Nama File          | Lokasi            | Deskripsi                      |
| ------------------ | ----------------- | ------------------------------ |
| `content/index.md` | `/pages/content/` | Halaman utama dokumentasi      |
| `nuxt.config.ts`   | Root project      | Konfigurasi global proyek Nuxt |

## Gambar

![Logo Nuxt 3](/img/nuxt3.png)

Gambar juga bisa disertai caption:

```markdown
![Ilustrasi UI Dashboard](/img/dashboard-ui.png)
_Contoh tampilan dashboard aplikasi admin_
```

## Horizontal Rule

---

Horizontal rule digunakan untuk memisahkan bagian besar dalam dokumen.

## Code Block dengan Metadata

Anda bisa menyisipkan blok kode dengan informasi tambahan seperti nama file, baris yang di-highlight, dan metadata lainnya.

```ts [nuxt.config.ts] {highlightLines: [3]}
export default defineNuxtConfig({
  modules: [
    "@nuxt/content", // Aktifkan modul content
  ],
  content: {
    highlight: true,
  },
});
```

Metadata lain seperti bahasa, filename, dan info tambahan akan sangat membantu pembaca.

## Inline Code dengan Lang

Untuk menyebutkan kode sebaris dengan bahasa tertentu, gunakan sintaks khusus seperti ini:  
Gunakan komponen `<code inline lang="ts">useFetch</code>` untuk mengambil data secara asinkron dalam Nuxt 3.

---

Demikian panduan lengkap penggunaan **Prose Components** dalam Nuxt Content. Dengan memanfaatkan semua fitur ini, Anda bisa membuat dokumentasi yang profesional dan mudah dibaca oleh pengembang lain
