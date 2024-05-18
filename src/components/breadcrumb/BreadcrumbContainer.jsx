'use client'

import {cn} from '@/lib/utils'
import {Fade} from 'react-awesome-reveal'

export default function BreadcrumbContainer({children, className}) {
  return (
    <Fade
      direction='down'
      triggerOnce
      className='relative z-10'
    >
      <div
        className={cn(
          'relative flex flex-row flex-nowrap [&_a]:mr-1.5 md:[&_a]:mr-2 pt-4 md:pt-8 overflow-clip',
          className,
        )}
      >
        {children}
      </div>
    </Fade>
  )
}
