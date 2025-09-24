import React from 'react'
import Video from './Video'

const Hometop = () => {
  return (
    <div className='font-[levis300] pt-5 '>
      <div className='text-[10vw] uppercase leading-[8vw] flex items-center justify-center'>
        The spark for
        </div>
      <div className='text-[10vw] uppercase leading-[8vw] flex items-start justify-center'>
        all
            <div className='h-[7vw] w-[15vw] rounded-full -mt-3 overflow-hidden'>
                <Video />
            </div>
        things
        </div>
      <div className='text-[10vw] uppercase leading-[8vw] flex items-center justify-center'>
        creative
        </div>
    </div>
  )
}

export default Hometop
