import React from 'react'
import Image from 'next/image'
import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
const HeaderDetailElevator = () => {
  return (
    <section>
      <BreadcrumbContainer>
        <BreadcrumbLink href='/'>TRANG CHỦ /</BreadcrumbLink>
        <BreadcrumbLink href='/'>THANG MÁY NHẬT BẢN /</BreadcrumbLink>
        <BreadcrumbLink isLastLink>VỀ CHÚNG TÔI</BreadcrumbLink>
      </BreadcrumbContainer>
      <div>
        <h1>
            Thang máy GIA ĐÌNH
            <Image src={'/images/familyElevator/headerFamilyElevator/bonghoa.png'} alt='hoabg' width={500} height={500}/>
        </h1>
        <p>
          Thang máy gia đình rất thích hợp cho các toà nhà bị hạn chế về diện
          tích, thang có thể được lắp đặt bằng cách cải tạo một khu vực thích
          hợp bên trong hoặc bên ngoài toà nhà vì vậy tính linh hoạt của thang
          máy gia đình rất cao
        </p>
      </div>
    </section>
  )
}

export default HeaderDetailElevator
