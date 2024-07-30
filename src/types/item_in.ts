import type { Item } from "./item"

type ItemIn = {
  id: number
  id_unit: number
  unit?: {
    id?: number
    name: string
  }
  id_supplier: number
  supplier?: {
    id?: number
    name: string
  }
  deskripsi: string
  tanggal: string
}

type ItemInDetail = {
  id_barang_masuk: number
  id_barang: number
  barang: Item
  id_unit: number
  unit: {
    id: number
    name: string
  }
  id_supplier: number
  sumber_dana: string
  jumlah: number
}

export type { ItemIn, ItemInDetail }
