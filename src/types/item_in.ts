type ItemIn = {
  id: number
  id_unit: number
  unit?: {
    id?: number
    nama: string
  }
  id_supplier: number
  supplier?: {
    id?: number
    nama: string
  }
  deskripsi: string
  tanggal: string
}

type ItemInDetail = {
  id_barang_masuk: number
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
