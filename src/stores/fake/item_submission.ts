import type { ItemSubmission, ItemSubmissionDetail } from '@/types/item_submission'

const itemSubmissions: ItemSubmission[] = [
  {
    id: 1,
    id_unit: 1,
    unit: {
      id: 1,
      nama: 'BK'
    },
    jumlah_ajuan: 4,
    status: 'diproses',
    tanggal: '2024-05-11'
  },
  {
    id: 2,
    id_unit: 2,
    unit: {
      id: 2,
      nama: 'MTK'
    },
    jumlah_ajuan: 9,
    status: 'diproses',
    tanggal: '2024-05-12'
  },
  {
    id: 3,
    id_unit: 3,
    unit: {
      id: 3,
      nama: 'RPL'
    },
    jumlah_ajuan: 6,
    status: 'diproses',
    tanggal: '2024-05-13'
  },
  {
    id: 4,
    id_unit: 4,
    unit: {
      id: 4,
      nama: 'PJOK'
    },
    jumlah_ajuan: 14,
    status: 'diproses',
    tanggal: '2024-05-14'
  },
  {
    id: 5,
    id_unit: 5,
    unit: {
      id: 5,
      nama: 'Bahasa Inggris'
    },
    jumlah_ajuan: 8,
    status: 'diproses',
    tanggal: '2024-05-15'
  },
  {
    id: 6,
    id_unit: 6,
    unit: {
      id: 6,
      nama: 'Bahasa Indonesia'
    },
    jumlah_ajuan: 3,
    status: 'diproses',
    tanggal: '2024-05-16'
  },
  {
    id: 7,
    id_unit: 7,
    unit: {
      id: 7,
      nama: 'RPL'
    },
    jumlah_ajuan: 13,
    status: 'diproses',
    tanggal: '2024-05-17'
  },
  {
    id: 8,
    id_unit: 8,
    unit: {
      id: 8,
      nama: 'DKV'
    },
    jumlah_ajuan: 7,
    status: 'diproses',
    tanggal: '2024-05-18'
  },
  {
    id: 9,
    id_unit: 9,
    unit: {
      id: 9,
      nama: 'Sejarah'
    },
    jumlah_ajuan: 10,
    status: 'diproses',
    tanggal: '2024-05-19'
  },
  {
    id: 10,
    id_unit: 10,
    unit: {
      id: 10,
      nama: 'Pemasaran'
    },
    jumlah_ajuan: 5,
    status: 'diproses',
    tanggal: '2024-05-20'
  }
]

const itemSubmissionDetail: ItemSubmissionDetail[] = [
  {
    id: 1,
    id_pengajuan: 1,
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
    id: 2,
    id_pengajuan: 2,
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
    id_pengajuan: 2,
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
    id_pengajuan: 3,
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
    id: 5,
    id_pengajuan: 4,
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
    id_pengajuan: 4,
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
    id_pengajuan: 5,
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
    id: 8,
    id_pengajuan: 6,
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
    id: 9,
    id_pengajuan: 7,
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
    id: 10,
    id_pengajuan: 8,
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
    id: 11,
    id_pengajuan: 9,
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
    id_pengajuan: 9,
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
    id_pengajuan: 10,
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
    id: 14,
    id_pengajuan: 1,
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
    id_pengajuan: 1,
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
    id: 16,
    id_pengajuan: 3,
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
    id_pengajuan: 3,
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
    id: 18,
    id_pengajuan: 5,
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
    id_pengajuan: 5,
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
    id: 20,
    id_pengajuan: 6,
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
    id_pengajuan: 6,
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
    id: 22,
    id_pengajuan: 7,
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
    id_pengajuan: 7,
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
    id: 24,
    id_pengajuan: 8,
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
    id_pengajuan: 8,
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
    id: 26,
    id_pengajuan: 10,
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
    id_pengajuan: 10,
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

export { itemSubmissions, itemSubmissionDetail }
