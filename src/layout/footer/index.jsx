import Image from 'next/image'
export default function Footer() {
  return (
    <footer className='w-full h-[39rem]'>
      <Image
        className='size-full'
        src={'/images/layout/footer/footer.jpg'}
        alt='footer'
        width={1600}
        height={700}
      />
    </footer>
  )
}
