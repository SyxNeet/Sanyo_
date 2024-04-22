import Link from 'next/link'

export default function HeaderModalChildrenLink({href, text}) {
  return (
    <Link
      href={href}
      className='font-Iciel text-0.875 leading-1.5 uppercase opacity-60 pl-6 py-[0.62rem] text-white border-b-[0.0625rem] last-of-type:border-0 border-white/10 last-of-type:font-bold last-of-type:underline last-of-type:opacity-100'
    >
      {text}
    </Link>
  )
}
