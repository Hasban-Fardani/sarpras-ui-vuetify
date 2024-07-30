import type { Item } from '@/types/item'

export const items: Item[] = [
  {
    id: 0,
    gambar: 'https://picsum.photos/300',
    name: 'Spidol',
    category_id: 1,
    category: {
      id: 1,
      name: 'Alat Tulis'
    },
    stock: 20,
    min_stock: 30,
    unit: 'unit',
    price: 10000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 1,
    gambar: 'https://picsum.photos/300',
    name: 'Pulpen',
    category_id: 1,
    category: {
      id: 1,
      name: 'Alat Tulis'
    },
    stock: 20,
    min_stock: 30,
    unit: 'unit',
    price: 2000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 2,
    gambar: 'https://picsum.photos/300',
    name: 'Penghapus',
    category_id: 1,
    category: {
      id: 1,
      name: 'Alat Tulis'
    },
    stock: 30,
    min_stock: 30,
    unit: 'unit',
    price: 1000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 3,
    gambar: 'https://picsum.photos/300',
    name: 'Pensil',
    category_id: 1,
    category: {
      id: 1,
      name: 'Alat Tulis'
    },
    stock: 50,
    min_stock: 30,
    unit: 'unit',
    price: 1500,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 4,
    gambar: 'https://picsum.photos/300',
    name: 'Kertas HVS',
    category_id: 2,
    category: {
      id: 2,
      name: 'Kertas'
    },
    stock: 500,
    min_stock: 30,
    unit: 'unit',
    price: 5000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 5,
    gambar: 'https://picsum.photos/300',
    name: 'Buku Tulis',
    category_id: 3,
    category: {
      id: 3,
      name: 'Buku'
    },
    stock: 100,
    min_stock: 30,
    unit: 'buah',
    price: 3000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 6,
    gambar: 'https://picsum.photos/300',
    name: 'Map Plastik',
    category_id: 4,
    category: {
      id: 4,
      name: 'Organisasi File'
    },
    stock: 75,
    min_stock: 30,
    unit: 'unit',
    price: 2500,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 7,
    gambar: 'https://picsum.photos/300',
    name: 'Stiker Label',
    category_id: 5,
    category: {
      id: 5,
      name: 'Label'
    },
    stock: 200,
    min_stock: 30,
    unit: 'unit',
    price: 3500,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 8,
    gambar: 'https://picsum.photos/300',
    name: 'Tinta Printer',
    category_id: 6,
    category: {
      id: 6,
      name: 'Aksesoris Printer'
    },
    stock: 10,
    min_stock: 30,
    unit: 'unit',
    price: 12000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 9,
    gambar: 'https://picsum.photos/300',
    name: 'Staples',
    category_id: 7,
    category: {
      id: 7,
      name: 'Pengikat Kertas'
    },
    stock: 150,
    min_stock: 30,
    unit: 'unit',
    price: 4000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 10,
    gambar: 'https://picsum.photos/300',
    name: 'Penggaris',
    category_id: 1,
    category: {
      id: 1,
      name: 'Alat Tulis'
    },
    stock: 80,
    min_stock: 30,
    unit: 'unit',
    price: 6000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 11,
    gambar: 'https://picsum.photos/300',
    name: 'Correction Tape',
    category_id: 8,
    category: {
      id: 8,
      name: 'Alat Koreksi'
    },
    stock: 60,
    min_stock: 30,
    unit: 'unit',
    price: 2500,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 12,
    gambar: 'https://picsum.photos/300',
    name: 'Paper Clip',
    category_id: 7,
    category: {
      id: 7,
      name: 'Pengikat Kertas'
    },
    stock: 300,
    min_stock: 30,
    unit: 'unit',
    price: 4500,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 13,
    gambar: 'https://picsum.photos/300',
    name: 'Amplop',
    category_id: 2,
    category: {
      id: 2,
      name: 'Kertas'
    },
    stock: 100,
    min_stock: 30,
    unit: 'unit',
    price: 7000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 14,
    gambar: 'https://picsum.photos/300',
    name: 'Kertas Foto',
    category_id: 2,
    category: {
      id: 2,
      name: 'Kertas'
    },
    stock: 50,
    min_stock: 30,
    unit: 'unit',
    price: 20000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 15,
    gambar: 'https://picsum.photos/300',
    name: 'Memo Pad',
    category_id: 2,
    category: {
      id: 2,
      name: 'Kertas'
    },
    stock: 150,
    min_stock: 30,
    unit: 'unit',
    price: 8000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 16,
    gambar: 'https://picsum.photos/300',
    name: 'Post-it',
    category_id: 2,
    category: {
      id: 2,
      name: 'Kertas'
    },
    stock: 250,
    min_stock: 30,
    unit: 'unit',
    price: 500,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 17,
    gambar: 'https://picsum.photos/300',
    name: 'Tali Rafia',
    category_id: 9,
    category: {
      id: 9,
      name: 'Alat Pengikat'
    },
    stock: 200,
    min_stock: 30,
    unit: 'unit',
    price: 3000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 18,
    gambar: 'https://picsum.photos/300',
    name: 'Lakban',
    category_id: 9,
    category: {
      id: 9,
      name: 'Alat Pengikat'
    },
    stock: 100,
    min_stock: 30,
    unit: 'unit',
    price: 4000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  },
  {
    id: 19,
    gambar: 'https://picsum.photos/300',
    name: 'Kertas Lipat',
    category_id: 2,
    category: {
      id: 2,
      name: 'Kertas'
    },
    stock: 500,
    min_stock: 30,
    unit: 'unit',
    price: 15000,
    updated_at: new Date('2024-05-22T00:00:00Z')
  }
]