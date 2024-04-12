import Image from 'next/image'

export default function Support() {
  return (
    <section className='w-full bg-white h-[34.8rem]'>
      <Image
        className='size-full'
        src={'/images/layout/support/support.png'}
        alt=''
        width={1600}
        height={500}
      />
    </section>
  )
}
