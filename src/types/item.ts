type Item = {
  id: number
  gambar?: string
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
  updated_at?: Date | string
}

type CreateItem = {
  name: string
  category_id: number
  stock: number
  unit: string
  price: number
  gambar: File
}

export type { Item, CreateItem }
