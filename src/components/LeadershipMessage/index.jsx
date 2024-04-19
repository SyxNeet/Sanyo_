import React from 'react'
import imgLeadership from '../../../public/images/components/aboutUs/lanhdao.png'
import imgBgLeadership from '../../../public/images/components/aboutUs/bglanhdao.png'
import Image from 'next/image'
const LeadershipMesssage = () => {
  return (
    <div>
        <div>
           <div></div>
           <Image src={imgLeadership} alt='leadership' className='w-[20.9375rem] h-[40.375rem]' /> 
        </div>
    </div>
  )
}

export default LeadershipMesssage