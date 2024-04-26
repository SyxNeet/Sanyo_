'use client'
import Image from 'next/image'
import imgBgForm from '../../../public/images/form/bgForm.png'
import {useState, useEffect} from 'react'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'

export default function Support({className, forLienHePage}) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [windowWidth, setWindowWidth] = useState(0)
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
    setWindowWidth(window.innerWidth)
  }, [])
  return (
    <section
      className={cn(
        'w-full bg-grey-0 h-[34.8rem] relative flex flex-row justify-center max-md:px-[1rem] max-md:h-fit',
        {'my-12 items-center': !forLienHePage},
        className,
      )}
    >
      {!forLienHePage && (
        <Image
          src={imgBgForm}
          className='absolute w-full h-full'
        />
      )}
      <div
        className={cn('flex items-start max-md:w-full', {
          'w-[90%] max-md:flex-col': !forLienHePage,
          'flex-col w-full mr-[3.25rem]': forLienHePage,
        })}
      >
        <div
          className={cn('max-md:w-full max-md:mr-0 max-md:mb-[1.25rem]', {
            'w-[40%] mr-[6.19rem]': !forLienHePage,
          })}
        >
          <h2
            className={cn(
              'font-SVNLagu text-[3rem] font-[600] leading-[140%] mb-[1.5rem] max-md:text-[1.5rem] max-md:w-[16.75rem] max-md:mb-[0.75rem]',
              {
                'mb-[1.5rem]': !forLienHePage,
                'mb-[0.75rem]': forLienHePage,
              },
            )}
          >
            {!forLienHePage && (
              <>
                Để lại thông tin để chúng tôi{' '}
                <strong className='font-semibold text-yellow-500 uppercase'>
                  hỗ trợ bạn
                </strong>
              </>
            )}
            {forLienHePage && (
              <>
                Liên hệ với{' '}
                <strong className='font-semibold text-yellow-500 uppercase'>
                  SANYO YUSOKI
                </strong>
              </>
            )}
          </h2>
          <p className='text-[1rem] font-Iciel text-[#6D7279] font-normal leading-[150%] max-md:block max-md:w-[18.375rem] max-md:text-[0.875rem] max-md:text-justify mb-10'>
            {!forLienHePage
              ? 'Để tìm hiểu thêm, vui lòng để lại thông tin liên hệ của bạn. Bộ phận Kinh doanh sẽ liên hệ với bạn trong thời gian sớm nhất.'
              : ` Khách hàng vui lòng điền đầy đủ thông tin ở form bên dưới để được
              SANYO YUSOKI hỗ trợ và giải đáp thắc mắc nhanh nhất.`}
          </p>
        </div>
        <div
          className={cn('max-md:w-full pt-2 max-md:pt-0', {
            'w-[50%] flex flex-wrap': !forLienHePage,
            'grid grid-cols-1 gap-8 w-full': forLienHePage,
          })}
        >
          <div
            className={cn(
              'flex flex-col mr-[4%] relative max-md:mr-0 max-md:w-full max-md:mb-[1.88rem]',
              {
                'w-[48%]': !forLienHePage,
                'w-full': forLienHePage,
              },
            )}
          >
            <label
              className={`mb-[0.88rem] font-SVNLagu text-[1rem] max-md:mb-[0.88rem] ${
                windowWidth < 768 && nameFocused && 'hidden'
              }  max-md:absolute max-md:top-[23%] pointer-events-none`}
            >
              Tên của bạn <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder={windowWidth < 768 ? '' : 'Phạm Tiến Thành'}
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              onFocus={handleNameFocus}
              className='border-b-2 border-[#6A6A6A] pb-[0.5rem] bg-transparent border-opacity-50 outline-none placeholder:font-Iciel placeholder:text-[1rem] placeholder:text-[#C6C8CB] placeholder:font-normal placeholder:leading-[150%] max-md:py-[0.75rem]'
            />
            <span className='absolute text-sm italic text-red-500 top-full'>
              {nameError}
            </span>
          </div>
          <div
            className={cn(
              'flex flex-col mr-[4%] relative max-md:mr-0 max-md:w-full max-md:mb-[1.88rem]',
              {
                'w-[48%]': !forLienHePage,
                'w-full': forLienHePage,
              },
            )}
          >
            <label
              className={`mb-[0.88rem] font-SVNLagu text-[1rem] max-md:mb-[0.88rem] ${
                windowWidth < 768 && phoneFocused && 'hidden'
              }  max-md:absolute max-md:top-[23%] pointer-events-none`}
            >
              Số điện thoại <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder={windowWidth < 768 ? '' : '123 456'}
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              onFocus={handlePhoneFocus}
              className='border-b-2 border-[#6A6A6A] pb-[0.5rem] border-opacity-50 bg-transparent outline-none placeholder:font-Iciel placeholder:text-[1rem] placeholder:text-[#C6C8CB] placeholder:font-normal placeholder:leading-[150%] max-md:py-[0.75rem]'
            />
            <span className='absolute text-sm italic text-red-500 top-full'>
              {phoneError}
            </span>
          </div>
          <div
            className={cn(
              'flex flex-col w-full  relative max-md:mt-[1.88rem]',
              {
                'mt-[3.12rem]': !forLienHePage,
              },
            )}
          >
            <label
              className={cn(
                'font-SVNLagu text-[1rem] max-md:mb-[0.88rem] max-md:absolute max-md:top-[23%] pointer-events-none',
                {
                  hidden: windowWidth < 768 && messageFocused,
                  'mb-[2.88rem]': !forLienHePage,
                  'mb-[0.88rem]': forLienHePage,
                },
              )}
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
              className='border-b-2 border-[#6A6A6A] pb-[0.5rem] border-opacity-50 bg-transparent outline-none placeholder:font-Iciel placeholder:text-[1rem] placeholder:text-[#C6C8CB] placeholder:font-normal placeholder:leading-[150%] max-md:py-[0.75rem]'
            />
            <span className='absolute text-sm italic text-red-500 top-full'>
              {messageError}
            </span>
          </div>
          <div
            className={cn(
              'w-full mt-[3.25rem] relative z-10 max-md:mt-[2.25rem]',
              {'mt-[1rem]': forLienHePage},
            )}
          >
            <Button
              isHover={true}
              text={'GỬI THÔNG TIN'}
              isBlack={true}
              className='max-md:bg-yellow-500 max-md:border-none'
              onClick={handleSubmit}
            ></Button>
          </div>
        </div>
      </div>
    </section>
  )
}
