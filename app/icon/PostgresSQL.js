import React from 'react'
import Image from 'next/image'

const PostgreSQL = () => {
  return (
    <div className='flex h-48 items-center justify-center '>
      <Image src="/postgresql.svg" width={80} height={80} alt="" />
    </div>
  )
}

export default PostgreSQL