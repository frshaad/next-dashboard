import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'
import { recentOrdersData, recentOrdersDataType } from '@/data/recentOrdersData'

const CustomerCard = ({
  date: lastOrderDate,
  name: { first: firstName, last: lastName },
  method: paymentMethod,
}: recentOrdersDataType): JSX.Element => (
  <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
    <div className='flex items-center'>
      <div className='bg-purple-100 rounded-lg p-3'>
        <BsPersonFill className='text-purple-800' />
      </div>
      <p className='pl-4'>
        {firstName} {lastName}
      </p>
    </div>
    <p className='text-gray-600 sm:text-left text-right lowercase'>
      {firstName}@gmail.com
    </p>
    <p className='hidden md:flex'>{lastOrderDate}</p>
    <div className='sm:flex hidden justify-between items-center'>
      <p>{paymentMethod}</p>
      <BsThreeDotsVertical />
    </div>
  </li>
)

export default function CustomersPage() {
  return (
    <section className='bg-gray-100 min-h-screen'>
      <article className='p-4'>
        <div className='m-auto w-full p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 md:grid-cols-4 grid sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {recentOrdersData.map((customer, id) => (
              <CustomerCard {...customer} key={id} />
            ))}
          </ul>
        </div>
      </article>
    </section>
  )
}
