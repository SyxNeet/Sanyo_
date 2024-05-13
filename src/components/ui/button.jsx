import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva} from 'class-variance-authority'

import {cn} from '@/lib/utils'
import Image from 'next/image'


const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: `relative overflow-hidden rounded-[6.25rem] border-[1px] solid border-[#1E2125] hover:border-transparent hover:bg-transparent bg-[#fff] h-auto`,
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'md:px-[2.13rem] md:py-[0.97rem] px-[1.64rem] py-[0.75rem]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = React.forwardRef(
  (
    {className, variant, size, asChild = false, text, isHover,isBlack,classHover,isRed, ...props},
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'group',
          isHover && 'button_hover',
          buttonVariants({variant, size, className}),
        )}
        ref={ref}
        {...props}
      >
        <span
          className={`font-Iciel md:text-[0.875rem] text-[0.75rem] relative z-[1] font-medium leading-[1.5] text-grey-900 ${props?.classtext}`}
        >
          {text}
        </span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='15'
          height='16'
          viewBox='0 0 15 16'
          fill='none'
          className={`md:w-[0.875rem] md:h-[1rem] md:ml-[0.75rem] ml-[0.56rem] w-[0.66963rem] h-[0.76525rem] relative z-[1] ${classHover} }`}
        >
          <path
            d='M14.5 8L4.5 0V6L0.5 8L4.5 10L4.5 16L14.5 8Z'
            fill={(isBlack ? '#1E2125' : 'white')}
          />
        </svg>
        <div className={`absolute inset-0 ${ isRed ? 'bg-hover_button_red' : 'bg-hover_button'} translate-y-[100%] box_button_hover transition-all duration-300 w-[200%]`}></div>
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export {Button, buttonVariants}
