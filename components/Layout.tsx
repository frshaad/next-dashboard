import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
      <Sidebar />
      <section className='w-full pl-20'>
        <Header />
        {children}
      </section>
    </div>
  )
}
