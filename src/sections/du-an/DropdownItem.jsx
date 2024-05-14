import Image from 'next/image'
import {cn} from '@/lib/utils'

export default function DropdownItem({
  active,
  content,
  handleOnClick
}) {
  return (
    <li
      className='flex flex-row items-center px-3.5 py-2 md:px-4 md:py-[0.4rem] flex-none cursor-pointer select-none last:max-md:pb-4'
      onClick={handleOnClick}
    >
      <div
        className={cn(
          'relative size-[0.8rem] md:size-[0.875rem] border border-grey-200 mr-2.5 rounded-[0.125rem] overflow-hidden',
          {
            'bg-yellow-500 border-yellow-500':
              active,
          },
        )}
      >
        {active && (
          <Image
            src={`/images/du-an/checkmark.svg`}
            className='absolute top-0 left-0 size-full'
            alt=''
            width={120}
            height={120}
          />
        )}
      </div>
      <p className='text-grey-500 font-Iciel text-0.625 md:text-0.75 leading-1.3 md:leading-[1.5rem] uppercase -mb-px'>
        {content}
      </p>
    </li>
  )
}
