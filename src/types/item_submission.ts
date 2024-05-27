type ItemSubmission = {
  id_unit: number
  nama_unit: string
  jumlah_ajuan: number
  tanggal: string
}

type ItemSubmissionDetail = {
  id: number
  id_pengajuan: number
  id_barang: number
  jumlah: number
  jumlah_acc: number
}

export type { ItemSubmission, ItemSubmissionDetail }
