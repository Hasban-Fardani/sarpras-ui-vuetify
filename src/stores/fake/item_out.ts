import type { ItemOut, ItemOutDetail } from '@/types/item_out'

const itemOut: ItemOut[] = [
  {
    id: 1,
    id_unit: 1,
    unit: {
      id: 1,
      name: 'BK'
    },
    tanggal: '2024-05-01'
  },
  {
    id: 2,
    id_unit: 2,
    unit: {
      id: 2,
      name: 'MTK'
    },
    tanggal: '2024-05-02'
  },
  {
    id: 3,
    id_unit: 3,
    unit: {
      id: 3,
      name: 'RPL'
    },
    tanggal: '2024-05-03'
  },
  {
    id: 4,
    id_unit: 4,
    unit: {
      id: 4,
      name: 'MPLB'
    },
    tanggal: '2024-05-04'
  },
  {
    id: 5,
    id_unit: 5,
    unit: {
      id: 5,
      name: 'AKL'
    },
    tanggal: '2024-05-05'
  },
  {
    id: 6,
    id_unit: 6,
    unit: {
      id: 6,
      name: 'Sarpras'
    },
    tanggal: '2024-05-06'
  },
  {
    id: 7,
    id_unit: 1,
    unit: {
      id: 1,
      name: 'BK'
    },
    tanggal: '2024-05-07'
  },
  {
    id: 8,
    id_unit: 2,
    unit: {
      id: 2,
      name: 'MTK'
    },
    tanggal: '2024-05-08'
  },
  {
    id: 9,
    id_unit: 3,
    unit: {
      id: 3,
      name: 'RPL'
    },
    tanggal: '2024-05-09'
  },
  {
    id: 10,
    id_unit: 4,
    unit: {
      id: 4,
      name: 'MPLB'
    },
    tanggal: '2024-05-10'
  }
]

const itemOutDetail: ItemOutDetail[] = [
  {
    id_barang_keluar: 1,
    id_barang: 1,
    barang: {
      id: 1,
      name: 'Pensil'
    },
    jumlah: 10
  },
  {
    id_barang_keluar: 2,
    id_barang: 2,
    barang: {
      id: 2,
      name: 'Pulpen'
    },
    jumlah: 20
  },
  {
    id_barang_keluar: 3,
    id_barang: 3,
    barang: {
      id: 3,
      name: 'Penghapus'
    },
    jumlah: 30
  },
  {
    id_barang_keluar: 4,
    id_barang: 4,
    barang: {
      id: 4,
      name: 'Spidol'
    },
    jumlah: 40
  },
  {
    id_barang_keluar: 5,
    id_barang: 5,
    barang: {
      id: 5,
      name: 'Penggaris'
    },
    jumlah: 50
  },
  {
    id_barang_keluar: 6,
    id_barang: 6,
    barang: {
      id: 6,
      name: 'Tinta Printer'
    },
    jumlah: 60
  },
  {
    id_barang_keluar: 7,
    id_barang: 7,
    barang: {
      id: 7,
      name: 'Kertas HVS'
    },
    jumlah: 70
  },
  {
    id_barang_keluar: 8,
    id_barang: 8,
    barang: {
      id: 8,
      name: 'Stiker Label'
    },
    jumlah: 80
  },
  {
    id_barang_keluar: 9,
    id_barang: 9,
    barang: {
      id: 9,
      name: 'Correction Tape'
    },
    jumlah: 90
  },
  {
    id_barang_keluar: 10,
    id_barang: 10,
    barang: {
      id: 10,
      name: 'Paper Clip'
    },
    jumlah: 100
  },
  {
    id_barang_keluar: 1,
    id_barang: 11,
    barang: {
      id: 11,
      name: 'Binder Clip'
    },
    jumlah: 110
  },
  {
    id_barang_keluar: 2,
    id_barang: 12,
    barang: {
      id: 12,
      name: 'Amplop'
    },
    jumlah: 120
  },
  {
    id_barang_keluar: 3,
    id_barang: 13,
    barang: {
      id: 13,
      name: 'Sticky Note'
    },
    jumlah: 130
  },
  {
    id_barang_keluar: 4,
    id_barang: 14,
    barang: {
      id: 14,
      name: 'Memo'
    },
    jumlah: 140
  },
  {
    id_barang_keluar: 5,
    id_barang: 15,
    barang: {
      id: 15,
      name: 'Map Plastik'
    },
    jumlah: 150
  },
  {
    id_barang_keluar: 6,
    id_barang: 16,
    barang: {
      id: 16,
      name: 'Rautan'
    },
    jumlah: 160
  },
  {
    id_barang_keluar: 7,
    id_barang: 17,
    barang: {
      id: 17,
      name: 'Buku Tulis'
    },
    jumlah: 170
  },
  {
    id_barang_keluar: 8,
    id_barang: 18,
    barang: {
      id: 18,
      name: 'Stabilo'
    },
    jumlah: 180
  },
  {
    id_barang_keluar: 9,
    id_barang: 19,
    barang: {
      id: 19,
      name: 'Staples'
    },
    jumlah: 190
  },
  {
    id_barang_keluar: 10,
    id_barang: 20,
    barang: {
      id: 20,
      name: 'Lem'
    },
    jumlah: 200
  },
  {
    id_barang_keluar: 1,
    id_barang: 21,
    barang: {
      id: 21,
      name: 'Pita'
    },
    jumlah: 210
  },
  {
    id_barang_keluar: 2,
    id_barang: 22,
    barang: {
      id: 22,
      name: 'Tali'
    },
    jumlah: 220
  },
  {
    id_barang_keluar: 3,
    id_barang: 23,
    barang: {
      id: 23,
      name: 'Klip Kertas'
    },
    jumlah: 230
  },
  {
    id_barang_keluar: 4,
    id_barang: 24,
    barang: {
      id: 24,
      name: 'Kabel USB'
    },
    jumlah: 240
  },
  {
    id_barang_keluar: 5,
    id_barang: 25,
    barang: {
      id: 25,
      name: 'Mouse Pad'
    },
    jumlah: 250
  },
  {
    id_barang_keluar: 6,
    id_barang: 26,
    barang: {
      id: 26,
      name: 'Tape'
    },
    jumlah: 260
  },
  {
    id_barang_keluar: 7,
    id_barang: 27,
    barang: {
      id: 27,
      name: 'Penghapus Papan Tulis'
    },
    jumlah: 270
  },
  {
    id_barang_keluar: 8,
    id_barang: 28,
    barang: {
      id: 28,
      name: 'Box File'
    },
    jumlah: 280
  },
  {
    id_barang_keluar: 9,
    id_barang: 29,
    barang: {
      id: 29,
      name: 'Label name'
    },
    jumlah: 290
  },
  {
    id_barang_keluar: 10,
    id_barang: 30,
    barang: {
      id: 30,
      name: 'Kartu name'
    },
    jumlah: 300
  }
]


export { itemOut, itemOutDetail }
