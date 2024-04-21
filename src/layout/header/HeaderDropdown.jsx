export default function HeaderDropdown({text, ...props}) {
  return (
    <button
      {...props}
      className='flex flex-row items-center font-Iciel text-grey-900 text-1 font-medium leading-1.5 ml-10 hover-opacity'
    >
      {text}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='8'
        height='4'
        viewBox='0 0 8 4'
        fill='none'
        className='w-2 h-1 ml-2'
      >
        <path
          d='M8 0L4 4L0 0H8Z'
          fill='#1E2125'
        />
      </svg>
    </button>
  )
}
