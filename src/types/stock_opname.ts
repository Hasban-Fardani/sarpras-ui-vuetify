import type { Item } from "./item"
import type { User } from "./user"

type StockOpname = {
    id: number
    id_petugas: number
    petugas?: User
    id_barang: number
    barang?: Item
    quantity: number
    perihal?: 'pengurangan' | 'penambahan'
    keterangan: string
    tanggal: Date
}

export type { StockOpname }