import type { ItemIn, ItemInDetail } from '@/types/item_in'

const itemIn: ItemIn[] = [
  {
    id: 1,
    id_unit: 1,
    unit: {
      id: 1,
      nama: 'Unit A'
    },
    id_supplier: 1,
    supplier: {
      id: 1,
      nama: 'Supplier X'
    },
    tanggal: '2024-01-01',
    deskripsi: 'Barang masuk dari...'
  },
  {
    id: 2,
    id_unit: 2,
    unit: {
      id: 2,
      nama: 'Unit B'
    },
    id_supplier: 2,
    supplier: {
      id: 2,
      nama: 'Supplier Y'
    },
    tanggal: '2024-01-02',
    deskripsi: 'Barang masuk dari...'
  },
  {
    id: 3,
    id_unit: 3,
    unit: {
      id: 3,
      nama: 'Unit C'
    },
    id_supplier: 3,
    supplier: {
      id: 3,
      nama: 'Supplier Z'
    },
    tanggal: '2024-01-03',
    deskripsi: 'Barang masuk dari...'
  },
  {
    id: 4,
    id_unit: 4,
    unit: {
      id: 4,
      nama: 'Unit D'
    },
    id_supplier: 4,
    supplier: {
      id: 4,
      nama: 'Supplier W'
    },
    tanggal: '2024-01-04',
    deskripsi: 'Barang masuk dari...'
  },
  {
    id: 5,
    id_unit: 5,
    unit: {
      id: 5,
      nama: 'Unit E'
    },
    id_supplier: 5,
    supplier: {
      id: 5,
      nama: 'Supplier V'
    },
    tanggal: '2024-01-05',
    deskripsi: 'Barang masuk dari...'
  },
  {
    id: 6,
    id_unit: 6,
    unit: {
      id: 6,
      nama: 'Unit F'
    },
    id_supplier: 6,
    supplier: {
      id: 6,
      nama: 'Supplier U'
    },
    tanggal: '2024-01-06',
    deskripsi: 'Barang masuk dari...'
  },
  {
    id: 7,
    id_unit: 7,
    unit: {
      id: 7,
      nama: 'Unit G'
    },
    id_supplier: 7,
    supplier: {
      id: 7,
      nama: 'Supplier T'
    },
    tanggal: '2024-01-07',
    deskripsi: 'Barang masuk dari...'
  },
  {
    id: 8,
    id_unit: 8,
    unit: {
      id: 8,
      nama: 'Unit H'
    },
    id_supplier: 8,
    supplier: {
      id: 8,
      nama: 'Supplier S'
    },
    tanggal: '2024-01-08',
    deskripsi: 'Barang masuk dari...'
  },
  {
    id: 9,
    id_unit: 9,
    unit: {
      id: 9,
      nama: 'Unit I'
    },
    id_supplier: 9,
    supplier: {
      id: 9,
      nama: 'Supplier R'
    },
    tanggal: '2024-01-09',
    deskripsi: 'Barang masuk dari...'
  },
  {
    id: 10,
    id_unit: 10,
    unit: {
      id: 10,
      nama: 'Unit J'
    },
    id_supplier: 10,
    supplier: {
      id: 10,
      nama: 'Supplier Q'
    },
    tanggal: '2024-01-10',
    deskripsi: 'Barang masuk dari...'
  }
]

const itemInDetails: ItemInDetail[] = [
  {
    id_barang_masuk: 1,
    id_barang: 1,
    barang: {
      id: 1,
      nama: 'Pulpen'
    },
    id_unit: 1,
    unit: {
      id: 1,
      nama: 'BK'
    },
    id_supplier: 1,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 1,
    id_barang: 2,
    barang: {
      id: 2,
      nama: 'Spidol'
    },
    id_unit: 2,
    unit: {
      id: 2,
      nama: 'Sarpras'
    },
    id_supplier: 2,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 1,
    id_barang: 3,
    barang: {
      id: 3,
      nama: 'Kertas'
    },
    id_unit: 3,
    unit: {
      id: 3,
      nama: 'RPL'
    },
    id_supplier: 3,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 1,
    id_barang: 4,
    barang: {
      id: 4,
      nama: 'Pensil'
    },
    id_unit: 4,
    unit: {
      id: 4,
      nama: 'AKL'
    },
    id_supplier: 4,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 1,
    id_barang: 5,
    barang: {
      id: 5,
      nama: 'Penghapus'
    },
    id_unit: 5,
    unit: {
      id: 5,
      nama: 'Pemasaran'
    },
    id_supplier: 5,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 1,
    id_barang: 6,
    barang: {
      id: 6,
      nama: 'Stapler'
    },
    id_unit: 6,
    unit: {
      id: 6,
      nama: 'MPLB'
    },
    id_supplier: 6,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 1,
    id_barang: 7,
    barang: {
      id: 7,
      nama: 'Penggaris'
    },
    id_unit: 7,
    unit: {
      id: 7,
      nama: 'TJKT'
    },
    id_supplier: 7,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 1,
    id_barang: 8,
    barang: {
      id: 8,
      nama: 'Tipe-X'
    },
    id_unit: 8,
    unit: {
      id: 8,
      nama: 'BK'
    },
    id_supplier: 8,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 1,
    id_barang: 9,
    barang: {
      id: 9,
      nama: 'Binder'
    },
    id_unit: 9,
    unit: {
      id: 9,
      nama: 'Sarpras'
    },
    id_supplier: 9,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 1,
    id_barang: 10,
    barang: {
      id: 10,
      nama: 'Map'
    },
    id_unit: 10,
    unit: {
      id: 10,
      nama: 'RPL'
    },
    id_supplier: 10,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 2,
    id_barang: 11,
    barang: {
      id: 11,
      nama: 'Pulpen'
    },
    id_unit: 1,
    unit: {
      id: 1,
      nama: 'AKL'
    },
    id_supplier: 1,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 2,
    id_barang: 12,
    barang: {
      id: 12,
      nama: 'Spidol'
    },
    id_unit: 2,
    unit: {
      id: 2,
      nama: 'Pemasaran'
    },
    id_supplier: 2,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 2,
    id_barang: 13,
    barang: {
      id: 13,
      nama: 'Kertas'
    },
    id_unit: 3,
    unit: {
      id: 3,
      nama: 'MPLB'
    },
    id_supplier: 3,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 2,
    id_barang: 14,
    barang: {
      id: 14,
      nama: 'Pensil'
    },
    id_unit: 4,
    unit: {
      id: 4,
      nama: 'TJKT'
    },
    id_supplier: 4,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 2,
    id_barang: 15,
    barang: {
      id: 15,
      nama: 'Penghapus'
    },
    id_unit: 5,
    unit: {
      id: 5,
      nama: 'BK'
    },
    id_supplier: 5,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 2,
    id_barang: 16,
    barang: {
      id: 16,
      nama: 'Stapler'
    },
    id_unit: 6,
    unit: {
      id: 6,
      nama: 'Sarpras'
    },
    id_supplier: 6,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 2,
    id_barang: 17,
    barang: {
      id: 17,
      nama: 'Penggaris'
    },
    id_unit: 7,
    unit: {
      id: 7,
      nama: 'RPL'
    },
    id_supplier: 7,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 2,
    id_barang: 18,
    barang: {
      id: 18,
      nama: 'Tipe-X'
    },
    id_unit: 8,
    unit: {
      id: 8,
      nama: 'AKL'
    },
    id_supplier: 8,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 2,
    id_barang: 19,
    barang: {
      id: 19,
      nama: 'Binder'
    },
    id_unit: 9,
    unit: {
      id: 9,
      nama: 'Pemasaran'
    },
    id_supplier: 10,
    jumlah: 12,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 2,
    id_barang: 20,
    barang: {
      id: 20,
      nama: 'Map'
    },
    id_unit: 10,
    unit: {
      id: 10,
      nama: 'MPLB'
    },
    id_supplier: 10,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 3,
    id_barang: 21,
    barang: {
      id: 21,
      nama: 'Pulpen'
    },
    id_unit: 1,
    unit: {
      id: 1,
      nama: 'TJKT'
    },
    id_supplier: 1,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 3,
    id_barang: 22,
    barang: {
      id: 22,
      nama: 'Spidol'
    },
    id_unit: 2,
    unit: {
      id: 2,
      nama: 'BK'
    },
    id_supplier: 2,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 3,
    id_barang: 23,
    barang: {
      id: 23,
      nama: 'Kertas'
    },
    id_unit: 3,
    unit: {
      id: 3,
      nama: 'Sarpras'
    },
    id_supplier: 3,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 3,
    id_barang: 24,
    barang: {
      id: 24,
      nama: 'Pensil'
    },
    id_unit: 4,
    unit: {
      id: 4,
      nama: 'RPL'
    },
    id_supplier: 4,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 3,
    id_barang: 25,
    barang: {
      id: 25,
      nama: 'Penghapus'
    },
    id_unit: 5,
    unit: {
      id: 5,
      nama: 'AKL'
    },
    id_supplier: 5,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 3,
    id_barang: 26,
    barang: {
      id: 26,
      nama: 'Stapler'
    },
    id_unit: 6,
    unit: {
      id: 6,
      nama: 'Pemasaran'
    },
    id_supplier: 6,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 3,
    id_barang: 27,
    barang: {
      id: 27,
      nama: 'Penggaris'
    },
    id_unit: 7,
    unit: {
      id: 7,
      nama: 'MPLB'
    },
    id_supplier: 7,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 3,
    id_barang: 28,
    barang: {
      id: 28,
      nama: 'Tipe-X'
    },
    id_unit: 8,
    unit: {
      id: 8,
      nama: 'TJKT'
    },
    id_supplier: 8,
    jumlah: 10,
    sumber_dana: 'SPP'
  },
  {
    id_barang_masuk: 3,
    id_barang: 29,
    barang: {
      id: 29,
      nama: 'Binder'
    },
    id_unit: 9,
    unit: {
      id: 9,
      nama: 'BK'
    },
    id_supplier: 9,
    jumlah: 10,
    sumber_dana: 'BOS'
  },
  {
    id_barang_masuk: 3,
    id_barang: 30,
    barang: {
      id: 30,
      nama: 'Map'
    },
    id_unit: 10,
    unit: {
      id: 10,
      nama: 'Sarpras'
    },
    id_supplier: 10,
    jumlah: 10,
    sumber_dana: 'SPP'
  }
];


export { itemIn, itemInDetails }
