import Link from 'next/link'

export default function AccordionLink({text, href, isLastChild}) {
  return (
    <>
      <Link
        href={href}
        className='font-Iciel text-grey-0 text-0.875 leading-1.5 uppercase opacity-60 text-start font-extralight py-2'
      >
        {text}
      </Link>
      {!isLastChild && (
        <div className='w-full h-[0.0625rem] opacity-50 bg-grey-0/10' />
      )}
    </>
  )
}
