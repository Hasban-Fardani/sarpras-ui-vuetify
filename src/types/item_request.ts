type ItemRequest = {
  id_unit: number
  nama_unit: string
  jumlah_permintaan: number
  tanggal: string
}

type ItemRequestDetail = {
  id: number
  id_permintaan: number
  id_barang: number
  jumlah: number
  jumlah_acc: number
}

export type { ItemRequest, ItemRequestDetail }
