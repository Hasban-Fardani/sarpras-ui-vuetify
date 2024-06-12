type Item = {
  id: number
  gambar?: string
  nama: string
  kategori_id?: number
  kategori?: {
    id: number
    nama: string
  }
  stok?: number
  stok_minimum?: number
  satuan?: 'buah' | 'unit'
  harga?: number
  jumlah?: number
  updated_at?: Date
}

type CreateItem = {
  nama: string
  kategori_id: number
  stok: number
  satuan: string
  harga: number
  gambar: File
}

export type { Item, CreateItem }
