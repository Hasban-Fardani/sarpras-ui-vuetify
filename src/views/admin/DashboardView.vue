<script setup lang="ts">
import AdminLayout from '@/layouts/AdminLayout.vue';
import { Bar, Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)
const chartDataBar = {
    labels: ['January', 'February', 'March'],
    datasets: [{ data: [40, 20, 12] }]
}

const chartDataPie = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
        {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
        }
    ]
}
</script>
<template>
    <AdminLayout>
        <VRow>
            <VCol sm="6" md="3">
                <VCard class="mx-auto" color="surface-variant" max-width="350" subtitle="Transaksi" title="100K" />
            </VCol>
            <VCol sm="6" md="3">
                <VCard class="mx-auto" color="surface-variant" max-width="350" subtitle="Barang" title="320" />
            </VCol>
            <VCol sm="6" md="3">
                <VCard class="mx-auto" color="surface-variant" max-width="350" subtitle="Akun" title="50" />
            </VCol>
            <VCol sm="6" md="3">
                <VCard class="mx-auto" color="surface-variant" max-width="350" subtitle="Transaksi" title="100K" />
            </VCol>
        </VRow>

        <VRow no-gutters class="mt-8">
            <VCol>
                <Bar :data="chartDataBar" />
            </VCol>
            <VCol class="d-flex justify-center">
                <Pie :data="chartDataPie" :style="{ width: '300px', height: 'auto' }" />
            </VCol>
        </VRow>
    </AdminLayout>
</template>