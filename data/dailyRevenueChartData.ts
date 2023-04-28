import type { ChartData } from 'chart.js'

export const dailyRevenueChartData: ChartData<'bar'> = {
  labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Sales $',
      data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
    },
  ],
}
