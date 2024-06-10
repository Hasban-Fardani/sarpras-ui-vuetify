import type { Item } from "./item"

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
  id_barang_keluar: number
  id_barang: number
  barang: Item
  jumlah: number
}

export type { ItemOut, ItemOutDetail }
