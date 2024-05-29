import type { User } from '@/types/user'

export const users: User[] = [
  {
    id: 1,
    nama: 'admin',
    role: 'admin',
    token: 'random token',
    unit: 'sarpras',
    password: 'password'
  },
  {
    id: 2,
    nama: 'user',
    role: 'user',
    token: 'random token',
    unit: 'RPL',
    password: 'password'
  }
]
