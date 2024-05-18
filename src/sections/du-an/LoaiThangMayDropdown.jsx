import {useState} from 'react'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import {generateLinkDuAnType} from '@/lib/generateLinkDuAnType'

export default function LoaiThangMayDropdown({
  page,
  country,
  type,
  isMobile,
  isLoading,
  setIsLoading,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const fnc = () => {
    setIsLoading(true)
    if (window.innerWidth < 768) {
      setIsOpen(false)
    }
  }
  return (
    <Dropdown
      icon={`/images/du-an/type.svg`}
      content='Loại thang máy'
      className='ml-2'
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <DropdownItem
        href={`/du-an?page=${page}&country=${country}&type=all`}
        content='Tất cả'
        active={type.includes('all')}
        handleOnClick={fnc}
        disabled={isLoading}
      />
      <DropdownItem
        href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
          type,
          'thang-may-gia-dinh',
        )}`}
        content='Thang máy gia đình'
        active={type.includes('thang-may-gia-dinh')}
        handleOnClick={fnc}
        disabled={isLoading}
      />
      <DropdownItem
        href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
          type,
          'thang-may-tai-khach',
        )}`}
        content='Thang máy tải khách'
        active={type.includes('thang-may-tai-khach')}
        handleOnClick={fnc}
        disabled={isLoading}
      />
      <DropdownItem
        href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
          type,
          'thang-may-tai-hang',
        )}`}
        content='Thang máy tải hàng'
        active={type.includes('thang-may-tai-hang')}
        handleOnClick={fnc}
        disabled={isLoading}
      />
      <DropdownItem
        href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
          type,
          'thang-may-quan-sat',
        )}`}
        content='Thang máy quan sát'
        active={type.includes('thang-may-quan-sat')}
        handleOnClick={fnc}
        disabled={isLoading}
      />
      <DropdownItem
        href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
          type,
          'thang-may-benh-vien',
        )}`}
        content='Thang máy bệnh viện'
        active={type.includes('thang-may-benh-vien')}
        handleOnClick={fnc}
        disabled={isLoading}
      />
      <DropdownItem
        href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
          type,
          'thang-may-o-to',
        )}`}
        content='Thang tải ô tô'
        active={type.includes('thang-may-o-to')}
        handleOnClick={fnc}
        disabled={isLoading}
      />
      <DropdownItem
        href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
          type,
          'thang-may-thuc-pham',
        )}`}
        content='Thang tải thực phẩm'
        active={type.includes('thang-may-thuc-pham')}
        handleOnClick={fnc}
        disabled={isLoading}
      />
      <DropdownItem
        href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
          type,
          'thang-bang-chuyen',
        )}`}
        content='Thang băng chuyền'
        active={type.includes('thang-bang-chuyen')}
        handleOnClick={fnc}
        disabled={isLoading}
      />
      <DropdownItem
        href={`/du-an?page=${page}&country=${country}&type=${generateLinkDuAnType(
          type,
          'thang-cuon',
        )}`}
        content='Thang cuốn'
        active={type.includes('thang-cuon')}
        handleOnClick={fnc}
        disabled={isLoading}
      />
    </Dropdown>
  )
}
