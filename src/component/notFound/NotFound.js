import React from 'react'
import notFound from '../../assets/notFound.jpg'

const NotFound = () => {
  return (
    <div className='pt-4'>
      <img src={notFound} className='w-[40%] mx-auto' alt='404 Error - Page Not Found Illustration' />
    </div>
  )
}

export default NotFound
