import type { Item } from './item'
import type { User } from './user'

type ItemSubmission = {
  id: number
  id_unit: number
  unit: User
  jumlah_ajuan: number
  status: 'selesai' | 'disetujui' | 'diproses' | 'ditolak'
  tanggal: string
}

type ItemSubmissionDetail = {
  id: number
  id_pengajuan: number
  id_barang: number
  barang?: Item
  jumlah: number
  jumlah_acc?: number
}

export type { ItemSubmission, ItemSubmissionDetail }
