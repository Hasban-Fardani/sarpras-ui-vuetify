type ItemIn = {
  id_unit: number
  id_supplier: number
  tanggal: string
}

type ItemInDetail = {
  id_barang: number
  barang: {
    id: number
    nama: string
  }
  id_unit: number
  unit: {
    id: number
    nama: string
  }
  id_supplier: number
  jumlah: number
}

export type { ItemIn, ItemInDetail }
