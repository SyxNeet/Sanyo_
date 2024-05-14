import {useState} from 'react'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'

export default function QuocGiaDropdown({isMobile, page, country, type}) {
  const [isOpen, setIsOpen] = useState(false)
  const fnc = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }
  return (
    <Dropdown
      icon={`/images/du-an/location.svg`}
      content='Quốc gia'
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <DropdownItem
        href={`/du-an?page=${page}&country=all&type=${type}`}
        content='Tất cả'
        active={country.includes('all')}
        handleOnClick={fnc}
      />
      <DropdownItem
        href={`/du-an?page=${page}&country=viet-nam&type=${type}`}
        content='VIỆT NAM'
        active={country.includes('viet-nam')}
        handleOnClick={fnc}
      />
      <DropdownItem
        href={`/du-an?page=${page}&country=the-gioi&type=${type}`}
        content='THẾ GIỚI'
        active={country.includes('the-gioi')}
        handleOnClick={fnc}
      />
    </Dropdown>
  )
}
