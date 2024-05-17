import clsx from 'clsx'
import Link from 'next/link'

export default function BreadcrumbLink({isLastLink, children, href}) {
  if (href) {
    return (
      <Link
        href={href}
        className={clsx(
          'text-grey-700 flex-none font-Iciel text-0.625 md:text-0.875 font-medium leading-1.5 text-justify uppercase',
          {
            'opacity-50': !isLastLink,
          },
        )}
      >
        {children} /
      </Link>
    )
  } else {
    return (
      <p className='text-grey-700 flex-none font-Iciel text-0.625 md:text-0.875 font-medium leading-1.5 uppercase line-clamp-1 max-md:w-[10rem]'>
        {children}
      </p>
    )
  }
}
