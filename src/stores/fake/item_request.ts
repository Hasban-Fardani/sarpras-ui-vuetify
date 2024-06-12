import type { ItemRequest, ItemRequestDetail } from '@/types/item_request'

const itemRequests: ItemRequest[] = [
  {
    id: 1,
    status: 'diajukan',
    id_unit: 1,
    unit: {
      id: 1,
      nama: 'BK'
    },
    jumlah_permintaan: 5,
    tanggal: '2024-05-01'
  },
  {
    id: 2,
    status: 'diajukan',
    id_unit: 2,
    unit: {
      id: 2,
      nama: 'Matematika'
    },
    jumlah_permintaan: 10,
    tanggal: '2024-05-02'
  },
  {
    id: 3,
    status: 'disetujui',
    id_unit: 3,
    unit: {
      id: 3,
      nama: 'RPL'
    },
    jumlah_permintaan: 7,
    tanggal: '2024-05-03'
  },
  {
    id: 4,
    status: 'disetujui',
    id_unit: 4,
    unit: {
      id: 4,
      nama: 'PJOK'
    },
    jumlah_permintaan: 12,
    tanggal: '2024-05-04'
  },
  {
    id: 5,
    status: 'ditolak',
    id_unit: 5,
    unit: {
      id: 5,
      nama: 'Bahasa Inggris'
    },
    jumlah_permintaan: 9,
    tanggal: '2024-05-05'
  },
  {
    id: 6,
    status: 'ditolak',
    id_unit: 6,
    unit: {
      id: 6,
      nama: 'Sarpras'
    },
    jumlah_permintaan: 4,
    tanggal: '2024-05-06'
  },
  {
    id: 7,
    status: 'selesai',
    id_unit: 7,
    unit: {
      id: 7,
      nama: 'RPL'
    },
    jumlah_permintaan: 15,
    tanggal: '2024-05-07'
  },
  {
    id: 8,
    status: 'selesai',
    id_unit: 8,
    unit: {
      id: 8,
      nama: 'DKV'
    },
    jumlah_permintaan: 8,
    tanggal: '2024-05-08'
  },
  {
    id: 9,
    status: 'diajukan',
    id_unit: 9,
    unit: {
      id: 9,
      nama: 'Sejarah'
    },
    jumlah_permintaan: 11,
    tanggal: '2024-05-09'
  },
  {
    id: 10,
    status: 'diajukan',
    id_unit: 10,
    unit: {
      id: 10,
      nama: 'MPLB'
    },
    jumlah_permintaan: 6,
    tanggal: '2024-05-10'
  }
]
const itemRequestDetail: ItemRequestDetail[] = [
  {
    id: 1,
    id_permintaan: 1,
    id_barang: 0,
    barang: {
      id: 0,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Spidol'
    },
    jumlah: 2,
    jumlah_acc: 2
  },
  {
    id: 14,
    id_permintaan: 1,
    id_barang: 13,
    barang: {
      id: 13,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Sticky Note'
    },
    jumlah: 1,
    jumlah_acc: 1
  },
  {
    id: 15,
    id_permintaan: 1,
    id_barang: 14,
    barang: {
      id: 14,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Highlighter'
    },
    jumlah: 2,
    jumlah_acc: 2
  },
  {
    id: 2,
    id_permintaan: 2,
    id_barang: 1,
    barang: {
      id: 1,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Pulpen'
    },
    jumlah: 5,
    jumlah_acc: 4
  },
  {
    id: 3,
    id_permintaan: 2,
    id_barang: 2,
    barang: {
      id: 2,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Penghapus'
    },
    jumlah: 3,
    jumlah_acc: 3
  },
  {
    id: 4,
    id_permintaan: 3,
    id_barang: 3,
    barang: {
      id: 3,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Pensil'
    },
    jumlah: 4,
    jumlah_acc: 4
  },
  {
    id: 16,
    id_permintaan: 3,
    id_barang: 15,
    barang: {
      id: 15,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Rautan'
    },
    jumlah: 1,
    jumlah_acc: 1
  },
  {
    id: 17,
    id_permintaan: 3,
    id_barang: 16,
    barang: {
      id: 16,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Penghapus Kertas'
    },
    jumlah: 2,
    jumlah_acc: 2
  },
  {
    id: 5,
    id_permintaan: 4,
    id_barang: 4,
    barang: {
      id: 4,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Kertas HVS'
    },
    jumlah: 7,
    jumlah_acc: 7
  },
  {
    id: 6,
    id_permintaan: 4,
    id_barang: 5,
    barang: {
      id: 5,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Buku Tulis'
    },
    jumlah: 5,
    jumlah_acc: 4
  },
  {
    id: 7,
    id_permintaan: 5,
    id_barang: 6,
    barang: {
      id: 6,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Map Plastik'
    },
    jumlah: 3,
    jumlah_acc: 3
  },
  {
    id: 18,
    id_permintaan: 5,
    id_barang: 17,
    barang: {
      id: 17,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Lem'
    },
    jumlah: 2,
    jumlah_acc: 2
  },
  {
    id: 19,
    id_permintaan: 5,
    id_barang: 18,
    barang: {
      id: 18,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Pita'
    },
    jumlah: 1,
    jumlah_acc: 1
  },
  {
    id: 8,
    id_permintaan: 6,
    id_barang: 7,
    barang: {
      id: 7,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Stiker Label'
    },
    jumlah: 2,
    jumlah_acc: 2
  },
  {
    id: 20,
    id_permintaan: 6,
    id_barang: 19,
    barang: {
      id: 19,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Tali'
    },
    jumlah: 1,
    jumlah_acc: 1
  },
  {
    id: 21,
    id_permintaan: 6,
    id_barang: 20,
    barang: {
      id: 20,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Klip Kertas'
    },
    jumlah: 2,
    jumlah_acc: 2
  },
  {
    id: 9,
    id_permintaan: 7,
    id_barang: 8,
    barang: {
      id: 8,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Tinta Printer'
    },
    jumlah: 6,
    jumlah_acc: 5
  },
  {
    id: 22,
    id_permintaan: 7,
    id_barang: 21,
    barang: {
      id: 21,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Kabel USB'
    },
    jumlah: 1,
    jumlah_acc: 1
  },
  {
    id: 23,
    id_permintaan: 7,
    id_barang: 22,
    barang: {
      id: 22,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Mouse Pad'
    },
    jumlah: 2,
    jumlah_acc: 2
  },
  {
    id: 10,
    id_permintaan: 8,
    id_barang: 9,
    barang: {
      id: 9,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Staples'
    },
    jumlah: 3,
    jumlah_acc: 3
  },
  {
    id: 24,
    id_permintaan: 8,
    id_barang: 23,
    barang: {
      id: 23,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Binder Clip'
    },
    jumlah: 2,
    jumlah_acc: 2
  },
  {
    id: 25,
    id_permintaan: 8,
    id_barang: 24,
    barang: {
      id: 24,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Tape'
    },
    jumlah: 1,
    jumlah_acc: 1
  },
  {
    id: 11,
    id_permintaan: 9,
    id_barang: 10,
    barang: {
      id: 10,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Penggaris'
    },
    jumlah: 5,
    jumlah_acc: 5
  },
  {
    id: 12,
    id_permintaan: 9,
    id_barang: 11,
    barang: {
      id: 11,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Correction Tape'
    },
    jumlah: 4,
    jumlah_acc: 4
  },
  {
    id: 13,
    id_permintaan: 10,
    id_barang: 12,
    barang: {
      id: 12,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Paper Clip'
    },
    jumlah: 6,
    jumlah_acc: 6
  },
  {
    id: 26,
    id_permintaan: 10,
    id_barang: 25,
    barang: {
      id: 25,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Amplop'
    },
    jumlah: 1,
    jumlah_acc: 1
  },
  {
    id: 27,
    id_permintaan: 10,
    id_barang: 26,
    barang: {
      id: 26,
      gambar: 'https://picsum.photos/200/200',
      nama: 'Memo'
    },
    jumlah: 2,
    jumlah_acc: 2
  }
]

export { itemRequests, itemRequestDetail }
