import type { Item } from "./item"

type ItemIn = {
  id: number
  user_id: number
  user?: {
    id?: number
    name: string
  }
  supplier_id: number
  supplier?: {
    id?: number
    name: string
  }
  note: string
  created_at: string | Date
  updated_at: string | Date
}

type ItemInDetail = {
  item_in_id: number
  item_id: number
  item: Item
  sumber_dana: string
  qty: number
}

export type { ItemIn, ItemInDetail }
