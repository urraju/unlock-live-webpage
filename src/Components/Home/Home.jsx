

import React from 'react'
import MainNav from '../MainNav/MainNav'
import Banner from '../Banner/Banner'

export default function Home() {
  return (
    <div className='md:px-2 lg:px-0 px-1 bg-[#270a0508]'>
      <MainNav/>
      <Banner/>
    </div>
  )
}
