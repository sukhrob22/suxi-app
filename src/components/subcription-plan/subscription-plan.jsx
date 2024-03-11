import Image from 'next/image'
import React from 'react'

const SubscriptionPlan = () => {
  return (
    <div className='min-h-screen'>
      <div className='border-b-2 border-gray-300/20 h-[10vh] flex justify-between items-center'>
        <Image
          src={'/logo.svg'}
          alt={'logo'}
          width={56}
          height={56}
          className={'cursor-pointer object-contain'}
        />
        <div>Logout</div>
      </div>
      <div className='flex flex-col space-y-4 text-center pt-5'>
        <h1 className='text-2xl md:text-5xl text-shadow-sm'>Flexible pricing for teams of any size.</h1>
        <p className='text-xl text-shadow'> Relaxing with watching your favourite movies and tv</p>
      </div>
      <div className='flex justify-center items-center'>
        <p>kjkjk</p>
      </div>
    </div>
  )
}

export default SubscriptionPlan
