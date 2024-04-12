import Image from 'next/image'
export default function Nav() {
  return (
    <header className='fixed z-[99] w-full h-[5.5rem] top-0 left-0'>
      <nav className='size-full'>
        <Image
          className='size-full'
          src={'/images/layout/nav/nav.jpg'}
          alt='nav'
          width={1600}
          height={80}
        />
      </nav>
    </header>
  )
}
