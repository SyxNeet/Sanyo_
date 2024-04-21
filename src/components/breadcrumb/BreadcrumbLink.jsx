import clsx from 'clsx'
import Link from 'next/link'

export default function BreadcrumbLink({isLastLink, children, href}) {
  if (href) {
    return (
      <Link
        href={href}
        className={clsx(
          'text-grey-700 font-Iciel text-0.625 md:text-0.875 font-medium leading-1.5 text-justify',
          {
            'opacity-50': !isLastLink,
          },
        )}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <p className='text-grey-700 font-Iciel text-0.625 md:text-0.875 font-medium leading-1.5 text-justify'>
        {children}
      </p>
    )
  }
}
