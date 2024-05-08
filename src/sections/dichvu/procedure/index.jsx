'use client'
import React, {useRef, useState, useEffect} from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import './styles.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Procedure = () => {
  const data = [
    {
      title: 'Bước 1: XÁC ĐỊNH YÊU CẦU CỦA KHÁCH HÀNG',
      url: '/images/dich-vu/img.png',
      content:
        'Sau khi tiếp nhận thông tin khách hàng, nhân viên kinh doanh của chúng tôi sẽ liên hệ bạn để liên hệ để làm rõ như cầu của bạn Sau khi tiếp nhận thông tin khách hàng, nhân viên kinh doanh của chúng tôi sẽ liên hệ bạn để liên hệ để làm rõ như cầu của bạn',
      steps: [
        'Mục đích lắp đặt thang máy',
        'Mục đích lắp đặt thang máy',
        'Số điểm dừng mà khách hàng dự định lắp đặt',
        'Các yêu cầu về chi tiết trang trí cho thang máy',
        'Hẹn lịch khảo sát công trình lắp đặt thang máy',
      ],
    },
    {
      title: 'Bước 2: XÁC ĐỊNH YÊU CẦU CỦA KHÁCH HÀNG',
      url: '/images/dich-vu/img2.png',
      content:
        'Sau khi tiếp nhận thông tin khách hàng, nhân viên kinh doanh của chúng tôi sẽ liên hệ bạn để liên hệ để làm rõ như cầu của bạn Sau khi tiếp nhận thông tin khách hàng, nhân viên kinh doanh của chúng tôi sẽ liên hệ bạn để liên hệ để làm rõ như cầu của bạn',
      steps: [
        'Mục đích lắp đặt thang máy',
        'Số điểm dừng mà khách hàng dự định lắp đặt',
        'Các yêu cầu về chi tiết trang trí cho thang máy',
        'Hẹn lịch khảo sát công trình lắp đặt thang máy',
      ],
    },
    {
      title: 'Bước 3: XÁC ĐỊNH YÊU CẦU CỦA KHÁCH HÀNG',
      url: '/images/dich-vu/img3.png',
      content:
        'Sau khi tiếp nhận thông tin khách hàng, nhân viên kinh doanh của chúng tôi sẽ liên hệ bạn để liên hệ để làm rõ như cầu của bạn Sau khi tiếp nhận thông tin khách hàng, nhân viên kinh doanh của chúng tôi sẽ liên hệ bạn để liên hệ để làm rõ như cầu của bạn',
      steps: [
        'Mục đích lắp đặt thang máy',
        'Số điểm dừng mà khách hàng dự định lắp đặt',
        'Các yêu cầu về chi tiết trang trí cho thang máy',
        'Hẹn lịch khảo sát công trình lắp đặt thang máy',
      ],
    },
    {
      title: 'Bước 4: XÁC ĐỊNH YÊU CẦU CỦA KHÁCH HÀNG',
      url: '/images/dich-vu/img4.png',
      content:
        'Sau khi tiếp nhận thông tin khách hàng, nhân viên kinh doanh của chúng tôi sẽ liên hệ bạn để liên hệ để làm rõ như cầu của bạn Sau khi tiếp nhận thông tin khách hàng, nhân viên kinh doanh của chúng tôi sẽ liên hệ bạn để liên hệ để làm rõ như cầu của bạn',
      steps: [
        'Mục đích lắp đặt thang máy',
        'Số điểm dừng mà khách hàng dự định lắp đặt',
        'Các yêu cầu về chi tiết trang trí cho thang máy',
        'Hẹn lịch khảo sát công trình lắp đặt thang máy',
      ],
    },
    {
      title: 'Bước 5: XÁC ĐỊNH YÊU CẦU CỦA KHÁCH HÀNG',
      url: '/images/dich-vu/img5.png',
      content:
        'Sau khi tiếp nhận thông tin khách hàng, nhân viên kinh doanh của chúng tôi sẽ liên hệ bạn để liên hệ để làm rõ như cầu của bạn Sau khi tiếp nhận thông tin khách hàng, nhân viên kinh doanh của chúng tôi sẽ liên hệ bạn để liên hệ để làm rõ như cầu của bạn',
      steps: [
        'Mục đích lắp đặt thang máy',
        'Số điểm dừng mà khách hàng dự định lắp đặt',
        'Các yêu cầu về chi tiết trang trí cho thang máy',
        'Hẹn lịch khảo sát công trình lắp đặt thang máy',
      ],
    },
  ]
  const [item, setItem] = useState(data[0])
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [item]);

  const firstRef = useRef(null)
  useGSAP(() => {
    gsap.to(firstRef.current, {
      scrollTrigger: {
        trigger: firstRef.current,
        pin: true,
        start: 'top top',
        end: 'bottom+=200 center',
        onUpdate: (self) => {
          if (self.progress < 0.2) {
            setItem(data[0])
          } else if (self.progress < 0.4) {
            setItem(data[1])
          } else if (self.progress < 0.6) {
            setItem(data[2])
          } else if (self.progress < 0.8) {
            setItem(data[3])
          } else {
            setItem(data[4])
          }
        },
      },
    })
  })
  return (
    <section
      className='flex'
      ref={firstRef}
    >
      <div className='w-[58%] pt-[10.6rem] pl-[4.75rem]'>
        <h2 className=' font-SVNLagu text-[3rem] font-semibold leading-1.3 border-b border-[rgba(28,32,28,0.10)] pb-[2.31rem] mb-[3.75rem]'>
          Quy trình dịch vụ chuyên nghiệp từ ĐỘI NGŨ CHUYÊN GIA
        </h2>
        <div className='w-[48.7rem] h-[24.4rem] data-aos="fade-right"'>
          <h3 className='font-SVNLagu font-semibold leading-1.3 text-[1.75rem] text-grey-800 mb-[0.94rem]'>
            {item.title}
          </h3>
          <div className='mb-[1.62rem] font-Iciel text-[1.125rem] leading-1.5 font-normal text-grey-400'>
            {item.content}
          </div>
          {item.steps.map((item, index) => (
            <div
              key={index}
              className='flex items-center mb-[1.25rem]'
            >
              <div className='w-[1.5rem] h-[1.5rem] rounded-[50%] bg-yellow-500 text-white font-SVNLagu text-[0.75rem] flex justify-center items-center mr-2'>
                {index + 1}
              </div>
              <span className='font-Iciel text-[1.125rem] leading-1.5 font-normal text-grey-400'>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className='w-[42%]'>
        <Image
          src={item.url}
          width={1000}
          height={1000}
          alt='test'
          className='h-[90vh] object-cover fade-in'
        />
      </div>
    </section>
  )
}

export default Procedure
