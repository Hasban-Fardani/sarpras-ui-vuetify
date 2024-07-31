type Item = {
  id: number
  gambar?: string | File
  name: string
  category_id?: number
  category?: {
    id: number
    name: string
  }
  stock?: number
  min_stock?: number
  unit?: string
  price?: number
  jumlah?: number
  merk?: string
  updated_at?: Date | string
}

type CreateItem = {
  name: string
  category_id: number
  stock: number
  min_stock: number
  unit: string
  price: number
  gambar: File
  merk: string
}

export type { Item, CreateItem }
