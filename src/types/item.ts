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
  satuan?: 'buah' | 'unit'
  harga?: number
  updated_at?: string
}

type CreateItem = {
  nama: string
  kategori_id: number
  stok: number
  harga: number
  gambar: File
}

export type { Item, CreateItem }
