import { recentOrdersData, recentOrdersDataType } from '@/data/recentOrdersData'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'

const OrderCard = ({
  date: lastOrderDate,
  name: { first: firstName },
  method: paymentMethod,
  status: orderStatus,
  total: totalPrice,
}: recentOrdersDataType): JSX.Element => (
  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
    <div className='flex items-center'>
      <div className='bg-purple-100 rounded-lg p-3'>
        <FaShoppingBag className='text-purple-800' />
      </div>
      <div className='pl-4'>
        <p className='text-gray-800 font-bold'>${totalPrice}</p>
        <p className='text-gray-400 text-sm'>{firstName}</p>
      </div>
    </div>
    <p className='text-gray-600 sm:text-left text-right lowercase'>
      <span
        className={
          orderStatus == 'Processing'
            ? 'bg-green-200 p-2 rounded-lg'
            : orderStatus == 'Completed'
            ? 'bg-blue-200 p-2 rounded-lg'
            : 'bg-yellow-200 p-2 rounded-lg'
        }
      >
        {orderStatus}
      </span>
    </p>
    <p className='hidden md:flex'>{lastOrderDate}</p>
    <div className='sm:flex hidden justify-between items-center'>
      <p>{paymentMethod}</p>
      <BsThreeDotsVertical />
    </div>
  </li>
)

export default function OrdersPage() {
  return (
    <section className='bg-gray-100 min-h-screen'>
      <article className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Order</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {recentOrdersData.map((order, id) => (
              <OrderCard key={id} {...order} />
            ))}
          </ul>
        </div>
      </article>
    </section>
  )
}
