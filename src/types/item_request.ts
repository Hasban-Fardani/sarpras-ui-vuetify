type ItemRequest = {
  id_unit: number
  jumlah_permintaan: number
}

type ItemRequestDetail = {
  id: number
  id_permintaan: number
  id_barang: number
  jumlah: number
  jumlah_acc: number
}

export type { ItemRequest, ItemRequestDetail }
