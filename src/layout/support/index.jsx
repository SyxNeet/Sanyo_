'use client'

import Image from 'next/image'
import imgBgForm from '../../../public/images/form/bgForm.png'
import {useState, useEffect} from 'react'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import {toast} from 'sonner'

const nameReg = /[a-zA-Z\s]{4,}/
const phoneReg = /\d{6,}/

export default function Support({className, isMobile, forLienHePage, data}) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [windowWidth, setWindowWidth] = useState(0)
  const [nameFocused, setNameFocused] = useState(false)
  const [phoneFocused, setPhoneFocused] = useState(false)
  const [messageFocused, setMessageFocused] = useState(false)
  const [nameError, setNameError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const handleNameChange = (e) => {
    setName(e.target.value)
    setNameError('')
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
    setPhoneError('')
  }
  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }
  const handleNameBlur = () => {
    if (!nameReg.test(name)) {
      setNameError('Vui lòng nhập tên hợp lệ')
      setNameFocused(false)
    } else {
      setNameFocused(true)
    }
  }

  const handlePhoneBlur = () => {
    if (!phoneReg.test(phone)) {
      setPhoneError('Vui lòng nhập số điện thoại hợp lệ')
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
  const handleSubmit = async (e) => {
    e.preventDefault()
    const validName = nameReg.test(name)
    const validPhone = phoneReg.test(phone)
    if (!validName) {
      setNameError('Vui lòng nhập tên hợp lệ')
    }
    if (!validPhone) {
      setPhoneError('Vui lòng nhập số điện thoại hợp lệ')
    }
    if (validName && validPhone) {
      const formData = new FormData()
      formData.append('yourName', name)
      formData.append('tel', phone)
      formData.append('message', message)
      formData.append('_wpcf7_unit_tag', '323')
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/contact-form-7/v1/contact-forms/323/feedback`,
        {method: 'POST', body: formData},
      )
      const result = await res.json()
      if (result.status === 'mail_sent') {
        toast.success('Gửi thông tin thành công')
        setName('')
        setPhone('')
        setMessage('')
      } else {
        toast.error('Gửi thông tin thất bại')
      }
    }
  }
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])
  return (
    <section
      className={cn(
        'w-full bg-grey-0 relative flex flex-row justify-center max-md:h-fit',
        {'pt-[7rem] pb-[6rem] items-center max-md:px-[1rem]': !forLienHePage},
        className,
      )}
    >
      {!forLienHePage && (
        <Image
          src={imgBgForm}
          className='absolute w-full h-full'
          alt='bgForm'
        />
      )}
      <div
        className={cn('flex items-start max-md:w-full', {
          'w-[90%] max-md:flex-col': !forLienHePage,
          'flex-col w-full md:mr-[3.25rem]': forLienHePage,
        })}
      >
        <div
          className={cn('max-md:w-full max-md:mr-0', {
            'w-[40%] mr-[6.19rem] max-md:mb-[1.25rem]': !forLienHePage,
          })}
        >
          <h3 className='text-grey-500 text-1.25 font-SVNLagu font-medium leading-1.5 tracking-0.1 uppercase opacity-80 mb-4'>
            ĐĂNG KÝ LIÊN HỆ
          </h3>
          <h2
            className={cn(
              'font-SVNLagu text-[3rem] font-[600] leading-1.2 mb-[1.5rem] max-md:text-[1.5rem] [&_strong]:font-semibold [&_strong]:text-yellow-500',
              {
                'mb-[1.5rem] max-md:w-[16.75rem] max-md:mb-[0.75rem]':
                  !forLienHePage,
                'mb-[0.75rem] max-md:mb-[0.5rem]': forLienHePage,
              },
            )}
            dangerouslySetInnerHTML={{__html: data.heading}}
          ></h2>
          <p
            className={cn(
              'text-[1rem] font-Iciel text-grey-500 font-normal leading-[150%] max-md:block max-md:text-[0.875rem] max-md:text-justify',
              {
                'max-md:w-[18.375rem] mb-10': !forLienHePage,
                'mb-5 md:mb-10': forLienHePage,
              },
            )}
          >
            {data.description}
          </p>
        </div>
        <div
          className={cn('max-md:w-full pt-2 max-md:pt-0', {
            'w-[50%] flex flex-wrap': !forLienHePage,
            'grid grid-cols-1 gap-[1.25rem] md:gap-8 w-full': forLienHePage,
          })}
        >
          <div
            className={cn(
              'flex flex-col mr-[1.5rem] relative max-md:mr-0 max-md:w-full',
              {
                'w-[48%] max-md:mb-[1.88rem]': !forLienHePage,
                'w-full': forLienHePage,
              },
            )}
          >
            <label
              className={`mb-[0.88rem] font-SVNLagu text-[1rem] max-md:mb-[0.88rem] font-semibold ${
                windowWidth < 768 && nameFocused && 'hidden'
              }  max-md:absolute max-md:top-[23%] pointer-events-none`}
            >
              {data.name}{' '}
              <span className='text-yellow-500 md:text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder={windowWidth < 768 ? '' : data.previewName}
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
            className={cn('flex flex-col relative max-md:mr-0 max-md:w-full', {
              'w-[48%] max-md:mb-[1.88rem]': !forLienHePage,
              'w-full': forLienHePage,
            })}
          >
            <label
              className={`mb-[0.88rem] font-SVNLagu text-[1rem] max-md:mb-[0.88rem] font-semibold ${
                windowWidth < 768 && phoneFocused && 'hidden'
              }  max-md:absolute max-md:top-[23%] pointer-events-none`}
            >
              {data.tel}{' '}
              <span className='text-yellow-500 md:text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder={windowWidth < 768 ? '' : data.previewTel}
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
            className={cn('flex flex-col w-full  relative', {
              'mt-[3.12rem] max-md:mt-[1.88rem]': !forLienHePage,
            })}
          >
            <label
              className={cn(
                'font-SVNLagu text-[1rem] max-md:mb-[0.88rem] max-md:absolute max-md:top-[23%] pointer-events-none font-semibold',
                {
                  hidden: windowWidth < 768 && messageFocused,
                  'mb-[2.88rem]': !forLienHePage,
                  'mb-[0.88rem]': forLienHePage,
                },
              )}
            >
              {data.message}
            </label>
            <input
              type='text'
              placeholder={windowWidth < 768 ? '' : 'Message'}
              value={message}
              onChange={handleMessageChange}
              onFocus={handleMessageFocus}
              className='border-b-2 border-[#6A6A6A] pb-[0.5rem] border-opacity-50 bg-transparent outline-none placeholder:font-Iciel placeholder:text-[1rem] placeholder:text-[#C6C8CB] placeholder:font-normal placeholder:leading-[150%] max-md:py-[0.75rem]'
            />
          </div>
          <div
            className={cn('w-full mt-[3.25rem] relative z-10', {
              'mt-[0.75rem] md:mt-[1rem] ': forLienHePage,
              'max-md:mt-[2.25rem]': !forLienHePage,
            })}
          >
            <Button
              isHover={true}
              text='GỬI THÔNG TIN'
              isBlack={true}
              className='bg-transparent max-md:bg-yellow-500 max-md:border-none'
              onClick={handleSubmit}
            ></Button>
          </div>
        </div>
      </div>
    </section>
  )
}
