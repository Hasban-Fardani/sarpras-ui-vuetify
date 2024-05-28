type ItemOut = {
  id: number
  id_unit: number
  unit: {
    id?: number
    nama: string
  }
  tanggal: string
}

type ItemOutDetail = {
  id_barang: number
  barang: {
    id?: number
    nama: string
  }
  jumlah: number
}

export type { ItemOut, ItemOutDetail }
