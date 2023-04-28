const TopCards = () => {
  return (
    <section className='grid lg:grid-cols-5 gap-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full p-4 border rounded-lg'>
        <div className='flex flex-col pb-4 w-full'>
          <p className='text-2xl font-bold'>$7,846</p>
          <p className='text-gray-600'>Daily Revenue</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-lg text-green-700'>+18%</span>
        </p>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full p-4 border rounded-lg'>
        <div className='flex flex-col pb-4 w-full'>
          <p className='text-2xl font-bold'>$1,437,846</p>
          <p className='text-gray-600'>YTD Revenue</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-lg text-green-700'>+11%</span>
        </p>
      </div>
      <div className='bg-white flex justify-between w-full p-4 border rounded-lg'>
        <div className='flex flex-col pb-4 w-full'>
          <p className='text-2xl font-bold'>11,437</p>
          <p className='text-gray-600'>Customers</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-lg text-green-700'>+17%</span>
        </p>
      </div>
    </section>
  )
}

export default TopCards
