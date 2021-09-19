<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    data: () => ({
      chartdata: {
        labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
        datasets: [
            {
              label: 'Male',
              borderColor: 'blue',
              fill: false,
              data: [30, 50, 70, 60, 30]
            },
            {
              label: 'Female',
              borderColor: 'red',
              fill: false,
              data: [35, 70, 80, 60, 40]
            }
          ]
        },

        options: {
          responsive: true,
          maintainAspectRatio: false
        },
    }),

    mounted () {
      this.renderChart(this.chartdata, this.options)
    }
  }
</script>