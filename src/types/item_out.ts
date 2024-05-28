type ItemOut = {
  id_unit: number
  tanggal: string
}

type ItemOutDetail = {
  id_barang: number
  id_unit: number
  id_supplier: number
  jumlah: number
}

export type { ItemOut, ItemOutDetail }
