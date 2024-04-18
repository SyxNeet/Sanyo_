'use client'
import Image from 'next/image'
import imgBgForm from '/images/form/bgForm.png'
import {useState, useEffect} from 'react'
export default function Support() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [windowWidth, setWindowWidth] = useState(undefined)
  const [nameFocused, setNameFocused] = useState(false)
  const [phoneFocused, setPhoneFocused] = useState(false)
  const [messageFocused, setMessageFocused] = useState(false)
  const [nameError, setNameError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [messageError, setMessageError] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
    setNameError('')
  }

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, '')
    const regex = /^\d*$/
    if (regex.test(input)) {
      setPhone(input)
      setPhoneError('')
    }
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
    setMessageError('')
  }
  const handleNameBlur = () => {
    if (name.trim() === '') {
      setNameError('Please enter your name')
      setNameFocused(false)
    } else {
      setNameFocused(true)
    }
  }

  const handlePhoneBlur = () => {
    if (phone.trim() === '') {
      setPhoneError('Please enter your phone number')
      setPhoneFocused(false)
    } else {
      setPhoneFocused(true)
    }
  }
  const handleNameFocus = () => {
    setNameFocused(true)
  }

  const handlePhoneFocus = () => {
    setPhoneFocused(true)
  }

  const handleMessageFocus = () => {
    setMessageFocused(true)
  }

  const handleMessageBlur = () => {
    if (message.trim() === '') {
      setMessageError('Please enter your message')
      setMessageFocused(false)
    } else {
      setMessageFocused(true)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() === '') {
      setNameError('Please enter your name')
    }
    if (phone.trim() === '') {
      setPhoneError('Please enter your phone number')
    }
    if (message.trim() === '') {
      setMessageError('Please enter your message')
    }
  }
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <section className='w-full bg-white h-[34.8rem] relative flex justify-center items-center max-md:px-[1rem] max-md:h-fit'>
      <Image
        src={imgBgForm}
        className='absolute  w-full h-full'
      />
      <div className='flex items-center w-[90%] max-md:flex-col max-md:w-full'>
        <div className='w-[40%] mr-[6.19rem] max-md:w-full max-md:mr-0 max-md:mb-[2rem]'>
          <h2 className='font-SVNLagu text-[3rem] font-[600] leading-[140%] mb-[1.5rem] max-md:text-[1.5rem] max-md:w-[16.75rem] max-md:mb-[0.75rem] '>
            Để lại thông tin để chúng tôi{' '}
            <span className='uppercase'>hỗ trợ bạn</span>
          </h2>
          <span className='text-[1rem] font-Iciel text-[#6D7279] font-normal leading-[150%] max-md:block max-md:w-[18.375rem] max-md:text-[0.875rem] max-md:text-justify'>
            Để tìm hiểu thêm, vui lòng để lại thông tin liên hệ của bạn. Bộ phận
            Kinh doanh sẽ liên hệ với bạn trong thời gian sớm nhất.
          </span>
        </div>
        <div className='flex flex-wrap w-[50%] max-md:w-full '>
          <div className='flex flex-col w-[48%] mr-[4%] relative max-md:mr-0 max-md:w-full'>
            <label
              className={`mb-[2.88rem] font-SVNLagu text-[1rem] max-md:mb-[0.88rem] ${
                windowWidth < 768 && nameFocused && 'hidden'
              }  max-md:absolute max-md:top-[23%] pointer-events-none`}
            >
              Tên của bạn <span>*</span>
            </label>
            <input
              type='text'
              placeholder={windowWidth < 768 ? '' : 'Phạm Tiến Thành'}
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              onFocus={handleNameFocus}
              className='border-b-2 border-[#6A6A6A] py-[0.5rem] bg-transparent border-opacity-50 outline-none placeholder:font-Iciel placeholder:text-[1rem]  placeholder:text-[#C6C8CB] placeholder:font-normal placeholder:leading-[150%] max-md:py-[0.75rem]'
            />
            <span className='absolute top-full'>{nameError}</span>
          </div>
          <div className='flex flex-col w-[48%] relative max-md:w-full '>
            <label
              className={`mb-[2.88rem] font-SVNLagu text-[1rem] max-md:mb-[0.88rem] ${
                windowWidth < 768 && phoneFocused && 'hidden'
              }  max-md:absolute max-md:top-[23%] pointer-events-none`}
            >
              Số điện thoại <span>*</span>
            </label>
            <input
              type='text'
              placeholder={windowWidth < 768 ? '' : '123 456'}
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              onFocus={handlePhoneFocus}
              className='border-b-2 border-[#6A6A6A] py-[0.5rem] border-opacity-50 bg-transparent outline-none placeholder:font-Iciel placeholder:text-[1rem] placeholder:text-[#C6C8CB] placeholder:font-normal placeholder:leading-[150%]'
            />
            <span className='absolute top-full'>{phoneError}</span>
          </div>
          <div className='flex flex-col w-full mt-[3.12rem] relative max-md:mt-[1.88rem]'>
            <label
              className={`mb-[2.88rem] font-SVNLagu text-[1rem] max-md:mb-[0.88rem] ${
                windowWidth < 768 && messageFocused && 'hidden'
              }  max-md:absolute max-md:top-[23%] pointer-events-none`}
            >
              Nội dung ghi chú
            </label>
            <input
              type='text'
              placeholder={windowWidth < 768 ? '' : 'Message'}
              value={message}
              onChange={handleMessageChange}
              onBlur={handleMessageBlur}
              onFocus={handleMessageFocus}
              className='border-b-2 border-[#6A6A6A] py-[0.5rem] border-opacity-50 bg-transparent outline-none placeholder:font-Iciel placeholder:text-[1rem] placeholder:text-[#C6C8CB] placeholder:font-normal placeholder:leading-[150%]'
            />
            <span className='absolute top-full'>{messageError}</span>
          </div>
          <div className='w-full mt-[3.25rem] relative z-10'>
            <button
              type='submit'
              onClick={handleSubmit}
            >
              Gủi thông tin
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
