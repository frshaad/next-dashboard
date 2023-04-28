import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  // FIXME: router.pathname or router.route
  const pageTitle = router.pathname.substring(1) || 'Dashboard'

  return (
    <div className='flex justify-between p-4 bg-gray-100'>
      <h2 className='capitalize'>{pageTitle}</h2>
      <h2>Welcome Back, Farshad</h2>
    </div>
  )
}

export default Header
