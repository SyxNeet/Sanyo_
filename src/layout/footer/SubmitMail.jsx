'use client'
import {useState, useTransition} from 'react'
import {toast} from 'sonner'

export default function SubmitMail() {
  const [email, setEmail] = useState('')
  const [isPending, startTransition] = useTransition()
  const handleChangeMail = (text) => {
    setEmail(text)
  }
  const validateEmail = (email) => {
    const re = /^(([^&lt;&gt;()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const onSubmit = (value) => {
    console.log('mail', email)
    if (email.trim() !== email) {
      toast.error('Địa chỉ email không được chứa khoảng trắng ở đầu hoặc cuối');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Địa chỉ email không hợp lệ');
      return;
    }
    startTransition(async () => {
      const formData = new FormData()

      formData.append('email', email)
      formData.append('_wpcf7_unit_tag', '34')

      const reqOption = {
        method: 'POST',
        body: formData,
      }
      startTransition(true)

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/contact-form-7/v1/contact-forms/34/feedback`,
        reqOption,
      )
      const result = await res.json()

      if (result.status === 'mail_sent') {
        toast.success('Gửi yêu cẩu thành công')
        setEmail('')
      } else {
        toast.error('Gửi yêu cẩu thất bại')
      }
    })
  }
  return (
    <div className='md:mt-[9.06rem]'>
      <p className='md:mb-[0.62rem] mb-[0.94rem] font-Iciel text-white md:text-[1.3rem] text-[0.875rem] max-md:w-[14.5rem] lg:text-[1rem] leading-1.5 uppercase'>
        Để lại email của bạn để chúng tôi hỗ trợ bạn tốt nhất
      </p>
      <div className='md:w-[35.1875rem] h-[3.1875rem] bg-grey-0 relative rounded-[0.25rem]'>
        <input
          type='text'
          name='email'
          value={email}
          placeholder='hungphamsanyo@gmail.com'
          className='size-full  md:max-w-[70%] py-[0.81rem] md:pl-[1.25rem] pl-[0.62rem]'
          onChange={(e) => handleChangeMail(e.target.value)}
        />

        <button
          onClick={onSubmit}
          className='absolute w-[6rem] h-[2.6875rem] rounded-[0.25rem] flex justify-center items-center bg-grey-800 right-[0.25rem] top-[0.25rem]'
        >
          {isPending ? (
            <svg
              className='animate-spin h-[2rem] w-[2rem] text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          ) : (
            <span className='text-white md:text-[1.3rem] lg:text-[1rem] leading-1.4 font-Iciel'>
              GỬI
            </span>
          )}
        </button>
      </div>
    </div>
  )
}
