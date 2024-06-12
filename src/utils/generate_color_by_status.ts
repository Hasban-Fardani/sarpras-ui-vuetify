export function colorByStatus(status: 'diajukan' | 'disetujui' | 'ditolak' | 'selesai'){
    switch (status) {
        case 'diajukan':
            return 'yellow'
        case 'disetujui':
            return 'green'
        case 'ditolak':
            return 'red'
        case 'selesai':
            return 'gray'
    }

}