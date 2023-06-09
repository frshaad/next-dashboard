import { FaShoppingBag } from 'react-icons/fa'
import { recentOrdersData, recentOrdersDataType } from '@/data/recentOrdersData'

const OrderCard = ({
  date,
  name: { first },
  total,
}: recentOrdersDataType): JSX.Element => (
  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
    <div className='bg-purple-100 rounded-lg p-3'>
      <FaShoppingBag className='text-purple-800' />
    </div>
    <div className='pl-4'>
      <p className='text-gray-800 font-bold'>${total}</p>
      <p className='text-gray-400 text-sm'>{first}</p>
    </div>
    <p className='lg:flex md:hidden absolute right-6 text-sm'>{date}</p>
  </li>
)

const RecentOrders = () => {
  return (
    <section className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Recent Orders</h1>
      <ul>
        {recentOrdersData.map(order => (
          <OrderCard {...order} key={order.id} />
        ))}
      </ul>
    </section>
  )
}

export default RecentOrders
