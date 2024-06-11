import type { StockOpname } from "@/types/stock_opname";

const stockOpnames: StockOpname[] = [
    {
        id: 1,
        id_petugas: 101,
        petugas: { id: 101, nama: 'Andi' },
        id_barang: 201,
        barang: { id: 201, nama: 'Pulpen'},
        quantity: 50,
        perihal: 'penambahan',
        keterangan: 'Penambahan stok pulpen',
        tanggal: new Date('2024-01-10')
    },
    {
        id: 2,
        id_petugas: 102,
        petugas: { id: 102, nama: 'Budi' },
        id_barang: 202,
        barang: { id: 202, nama: 'Pensil'},
        quantity: 30,
        perihal: 'pengurangan',
        keterangan: 'Pengurangan stok pensil',
        tanggal: new Date('2024-02-15')
    },
    {
        id: 3,
        id_petugas: 103,
        petugas: { id: 103, nama: 'Cici' },
        id_barang: 203,
        barang: { id: 203, nama: 'Kertas A4'},
        quantity: 100,
        perihal: 'penambahan',
        keterangan: 'Penambahan stok kertas A4',
        tanggal: new Date('2024-03-20')
    },
    {
        id: 4,
        id_petugas: 104,
        petugas: { id: 104, nama: 'Dodi' },
        id_barang: 204,
        barang: { id: 204, nama: 'Penghapus'},
        quantity: 20,
        perihal: 'pengurangan',
        keterangan: 'Pengurangan stok penghapus',
        tanggal: new Date('2024-04-25')
    },
    {
        id: 5,
        id_petugas: 105,
        petugas: { id: 105, nama: 'Eka' },
        id_barang: 205,
        barang: { id: 205, nama: 'Stapler'},
        quantity: 10,
        perihal: 'penambahan',
        keterangan: 'Penambahan stok stapler',
        tanggal: new Date('2024-05-30')
    }
];

export { stockOpnames }