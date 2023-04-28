import Head from 'next/head'
import { BarChart, RecentOrders, TopCards } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <main className='min-h-screen bg-gray-100 p-4'>
        <TopCards />
        <div className='grid md:grid-cols-3 grid-cols-1 py-4 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  )
}
