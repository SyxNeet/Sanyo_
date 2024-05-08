import React from 'react'
import Procedure from './procedure'
import HeaderDichVu from './header'
import ProcedureMb from './procedure/indexMb'
import ProductionLineSectionDV from './productLineDV'
import Certification from './Certification'
import Operate from './van-hanh-thang-may'
export default function DichVu({isMobile = false              }) {
  const data = [
    {
      heading: 'CÔNG NGHỆ SẢN XUẤT TIÊN TIẾN',
      description: 'THANG MÁY NHẬP KHẨU NHẬT BẢN',
      image: {
        ID: 656,
        id: 656,
        title: 'Rectangle 34626127-min',
        filename: 'Rectangle-34626127-min.png',
        filesize: 652181,
        url: 'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626127-min.png',
        link: 'https://sanyo.okhub-tech.com/thang-may/thang-may-gia-dinh/rectangle-34626127-min/',
        alt: '',
        author: '1',
        description: '',
        caption: '',
        name: 'rectangle-34626127-min',
        status: 'inherit',
        uploaded_to: 519,
        date: '2024-05-06 03:46:13',
        modified: '2024-05-06 04:02:33',
        menu_order: 0,
        mime_type: 'image/png',
        type: 'image',
        subtype: 'png',
        icon: 'https://sanyo.okhub-tech.com/wp-includes/images/media/default.png',
        width: 1600,
        height: 850,
        sizes: {
          thumbnail:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626127-min-150x150.png',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626127-min-300x159.png',
          'medium-width': 300,
          'medium-height': 159,
          medium_large:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626127-min-768x408.png',
          'medium_large-width': 768,
          'medium_large-height': 408,
          large:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626127-min-1024x544.png',
          'large-width': 800,
          'large-height': 425,
          '1536x1536':
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626127-min-1536x816.png',
          '1536x1536-width': 1536,
          '1536x1536-height': 816,
          '2048x2048':
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626127-min.png',
          '2048x2048-width': 1600,
          '2048x2048-height': 850,
        },
      },
    },
    {
      heading: 'CÔNG NGHỆ SẢN XUẤT TIÊN TIẾN',
      description: 'THANG MÁY NHẬP KHẨU NHẬT BẢN',
      image: {
        ID: 655,
        id: 655,
        title: 'Rectangle 34626126-min',
        filename: 'Rectangle-34626126-min.png',
        filesize: 769940,
        url: 'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626126-min.png',
        link: 'https://sanyo.okhub-tech.com/thang-may/thang-may-gia-dinh/rectangle-34626126-min/',
        alt: '',
        author: '1',
        description: '',
        caption: '',
        name: 'rectangle-34626126-min',
        status: 'inherit',
        uploaded_to: 519,
        date: '2024-05-06 03:46:09',
        modified: '2024-05-06 04:02:33',
        menu_order: 0,
        mime_type: 'image/png',
        type: 'image',
        subtype: 'png',
        icon: 'https://sanyo.okhub-tech.com/wp-includes/images/media/default.png',
        width: 1600,
        height: 850,
        sizes: {
          thumbnail:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626126-min-150x150.png',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626126-min-300x159.png',
          'medium-width': 300,
          'medium-height': 159,
          medium_large:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626126-min-768x408.png',
          'medium_large-width': 768,
          'medium_large-height': 408,
          large:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626126-min-1024x544.png',
          'large-width': 800,
          'large-height': 425,
          '1536x1536':
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626126-min-1536x816.png',
          '1536x1536-width': 1536,
          '1536x1536-height': 816,
          '2048x2048':
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626126-min.png',
          '2048x2048-width': 1600,
          '2048x2048-height': 850,
        },
      },
    },
    {
      heading: 'CÔNG NGHỆ SẢN XUẤT TIÊN TIẾN',
      description: 'THANG MÁY NHẬP KHẨU NHẬT BẢN',
      image: {
        ID: 654,
        id: 654,
        title: 'Rectangle 34626125-min',
        filename: 'Rectangle-34626125-min.png',
        filesize: 626026,
        url: 'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626125-min.png',
        link: 'https://sanyo.okhub-tech.com/thang-may/thang-may-gia-dinh/rectangle-34626125-min/',
        alt: '',
        author: '1',
        description: '',
        caption: '',
        name: 'rectangle-34626125-min',
        status: 'inherit',
        uploaded_to: 519,
        date: '2024-05-06 03:46:07',
        modified: '2024-05-06 04:02:33',
        menu_order: 0,
        mime_type: 'image/png',
        type: 'image',
        subtype: 'png',
        icon: 'https://sanyo.okhub-tech.com/wp-includes/images/media/default.png',
        width: 1600,
        height: 850,
        sizes: {
          thumbnail:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626125-min-150x150.png',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626125-min-300x159.png',
          'medium-width': 300,
          'medium-height': 159,
          medium_large:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626125-min-768x408.png',
          'medium_large-width': 768,
          'medium_large-height': 408,
          large:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626125-min-1024x544.png',
          'large-width': 800,
          'large-height': 425,
          '1536x1536':
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626125-min-1536x816.png',
          '1536x1536-width': 1536,
          '1536x1536-height': 816,
          '2048x2048':
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34626125-min.png',
          '2048x2048-width': 1600,
          '2048x2048-height': 850,
        },
      },
    },
    {
      heading: 'CÔNG NGHỆ SẢN XUẤT TIÊN TIẾN',
      description: 'THANG MÁY NHẬP KHẨU NHẬT BẢN',
      image: {
        ID: 650,
        id: 650,
        title: 'Rectangle 34625828-min',
        filename: 'Rectangle-34625828-min.png',
        filesize: 731854,
        url: 'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34625828-min.png',
        link: 'https://sanyo.okhub-tech.com/thang-may/thang-may-gia-dinh/rectangle-34625828-min/',
        alt: '',
        author: '1',
        description: '',
        caption: '',
        name: 'rectangle-34625828-min',
        status: 'inherit',
        uploaded_to: 519,
        date: '2024-05-06 03:45:56',
        modified: '2024-05-06 04:02:33',
        menu_order: 0,
        mime_type: 'image/png',
        type: 'image',
        subtype: 'png',
        icon: 'https://sanyo.okhub-tech.com/wp-includes/images/media/default.png',
        width: 1600,
        height: 850,
        sizes: {
          thumbnail:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34625828-min-150x150.png',
          'thumbnail-width': 150,
          'thumbnail-height': 150,
          medium:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34625828-min-300x159.png',
          'medium-width': 300,
          'medium-height': 159,
          medium_large:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34625828-min-768x408.png',
          'medium_large-width': 768,
          'medium_large-height': 408,
          large:
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34625828-min-1024x544.png',
          'large-width': 800,
          'large-height': 425,
          '1536x1536':
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34625828-min-1536x816.png',
          '1536x1536-width': 1536,
          '1536x1536-height': 816,
          '2048x2048':
            'https://sanyo.okhub-tech.com/wp-content/uploads/2024/05/Rectangle-34625828-min.png',
          '2048x2048-width': 1600,
          '2048x2048-height': 850,
        },
      },
    },
  ]
  return (
    <main className='pt-9'>
      <HeaderDichVu />
      {isMobile ? <ProcedureMb /> : <Procedure />}
      <ProductionLineSectionDV data={data} />
      <Certification/>
      <Operate/>
    </main>
  )
}
