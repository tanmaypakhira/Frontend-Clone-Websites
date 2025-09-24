import React from 'react'
import { Link } from 'react-router-dom'

const Homebottom = () => {
  return (
    <div className='font-[levis500] flex items-center justify-center gap-2'>
      <div className='uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 border-white rounded-full h-25 flex items-center px-8'>
        <Link className='text-[5vw] mt-4' to='/projects'>Work</Link>
      </div>
      <div className='uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 border-white rounded-full h-25 flex items-center px-8'>
        <Link className='text-[5vw] mt-4' to='/agents'>Agency</Link>
      </div>
    </div>
  )
}

export default Homebottom
