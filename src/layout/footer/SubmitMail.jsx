'use client'
import {useState} from 'react'

export default function SubmitMail() {
  const [email, setEmail] = useState('')
  const handleChangeMail = (text) => {
    setEmail(text)
  }
  return (
    <div className='md:mt-[9.06rem]'>
      <p className='md:mb-[0.62rem] mb-[0.94rem] font-Iciel text-white md:text-[1.3rem] text-[0.875rem] max-md:w-[14.5rem] lg:text-[1rem] leading-1.5 uppercase'>
        Để lại email của bạn để chúng tôi hỗ trợ bạn tốt nhất
      </p>
      <div className='md:w-[35.1875rem] h-[3.1875rem] bg-white relative rounded-[0.25rem]'>
        <input
          type='text'
          placeholder='hungphamsanyo@gmail.com'
          className='size-full  md:max-w-[70%] py-[0.81rem] md:pl-[1.25rem] pl-[0.62rem]'
          onChange={(e) => handleChangeMail(e.target.value)}
        />

        <button className='absolute w-[6rem] h-[2.6875rem] rounded-[0.25rem] bg-grey-800 right-[0.25rem] top-[0.25rem]'>
          <span className='text-white md:text-[1.3rem] lg:text-[1rem] leading-1.4 font-Iciel'>
            GỬI
          </span>
        </button>
      </div>
    </div>
  )
}
