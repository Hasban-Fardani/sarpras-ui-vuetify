type ItemSubmission = {
  id_unit: number
  jumlah_ajuan: number
}

type ItemSubmissionDetail = {
  id: number
  id_pengajuan: number
  id_barang: number
  jumlah: number
  jumlah_acc: number
}

export type { ItemSubmission, ItemSubmissionDetail }
