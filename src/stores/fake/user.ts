import type { User } from '@/types/user'

export const users: User[] = [
  {
    id: 1,
    name: 'admin',
    role: 'admin',
    token: 'random token',
    unit: 'sarpras',
    password: 'password',
    nip: 1212312
  },
  {
    id: 2,
    name: 'user',
    role: 'unit',
    token: 'random token',
    unit: 'RPL',
    password: 'password',
    nip: 1231231
  }
]
