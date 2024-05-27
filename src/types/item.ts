type Item = {
  id: number
  gambar: String
  nama: String
  kategori_id: number
  kategori?: {
    id: number
    nama: string
  }
  stok: number
  harga: number
  updated_at: string
}

type CreateItem = {
  nama: string
  kategori_id: number
  stok: number
  harga: number
  gambar: File
}

export type { Item, CreateItem }
