<template>
  <div class="px-8 py-8">
    <v-row>
      <v-col>
        Stress Level Report
      </v-col>
    </v-row>
    <line-chart />
  </div>
</template>

<script>
  import LineChart from '../components/LineChart.vue'

  export default {
    name: 'Dashboard',
    components: {
      'line-chart': LineChart,
    },
    data: () => ({
    }),
  }
</script>
