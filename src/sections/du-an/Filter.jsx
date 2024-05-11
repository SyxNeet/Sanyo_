'use client'

export default function Filter() {
  return (
    <div
      ref={ref}
      className='relative flex flex-row items-start md:pt-8 max-md:justify-around pt-[0.8rem] max-md:pb-[0.8rem] z-10 bg-white '
    >
      <div className='absolute top-0 left-0 w-[calc(100%+1.65rem)] -translate-x-3 h-full bg-grey-0 -z-10' />
      <Dropdown
        icon={`/images/du-an/location.svg`}
        content='Quốc gia'
      >
        <DropdownItem
          content='Tất cả'
          active={country.includes('all')}
          handleOnClick={() => handleChangeCountry('all')}
        />
        <DropdownItem
          content='VIỆT NAM'
          active={country.includes('vietnam')}
          handleOnClick={() => handleChangeCountry('vietnam')}
        />
        <DropdownItem
          content='THẾ GIỚI'
          active={country.includes('the-gioi')}
          handleOnClick={() => handleChangeCountry('the-gioi')}
        />
      </Dropdown>
      <Dropdown
        icon={`/images/du-an/type.svg`}
        content='Loại thang máy'
        className='ml-2'
      >
        <DropdownItem
          content='Tất cả'
          active={elevatorTypeList.includes('all')}
          handleOnClick={() => handleChangeElevatorTypeList('all')}
        />
        <DropdownItem
          content='Thang máy gia đình'
          active={elevatorTypeList.includes('thang-may-gia-dinh')}
          handleOnClick={() =>
            handleChangeElevatorTypeList('thang-may-gia-dinh')
          }
        />
      </Dropdown>
    </div>
  )
}
