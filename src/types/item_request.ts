import type { Item } from './item'
import type { User } from './user'

type ItemRequest = {
  id: number
  id_unit: number
  unit: User
  jumlah_permintaan: number
  tanggal: string
  status: 'selesai' | 'disetujui' | 'diproses' | 'ditolak'
  details?: ItemRequestDetail[]
}

type ItemRequestDetail = {
  id: number
  id_permintaan: number
  id_barang: number
  barang: Item
  jumlah: number
  jumlah_acc?: number
}

export type { ItemRequest, ItemRequestDetail }
