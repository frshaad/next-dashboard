import type { ChartOptions } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js'
import { dailyRevenueChartData } from '@/data/dailyRevenueChartData'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title)

const chartOptions: ChartOptions<'bar'> = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Daily Revenue',
    },
  },
  maintainAspectRatio: false,
  responsive: true,
}

const BarChart = () => (
  <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
    <Bar data={dailyRevenueChartData} options={chartOptions} />
  </div>
)

export default BarChart
