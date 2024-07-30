type User = {
  id?: number
  nama: string
  token?: string
  unit?: string
  role?: 'admin' | 'unit' | 'pengawas'
  nip?: number
  password?: string
}

export type { User }
