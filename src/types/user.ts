type User = {
  id?: number
  nama: string
  token?: string
  unit?: string
  // role: 'admin' | 'user' | 'kepala sekolah'
  role?: string
  nip?: number
  password?: string
}

export type { User }
