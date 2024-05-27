type User = {
  name: String
  token: String
  unit: String
  // role: 'admin' | 'user' | 'kepala sekolah'
  role: String
  password?: string
}

export type { User }
