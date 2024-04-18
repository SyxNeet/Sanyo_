import {Button} from '@/components/ui/button'

export default function Content({title, description}) {
  return (
    <div className='flex justify-between items-end md:mb-[4.13rem] md:pr-[3.81rem]'>
      <div className='md:w-[58rem]'>
        <h2 className='text-white lg:text-[3.214rem] font-SVNLagu font-semibold leading-[1.3] md:mb-[0.62rem]'>
          {title}
        </h2>
        <p className='text-grey-50 text-justify lg:text-[1.125rem] md:leading-[1.7] md:w-[55.6rem]'>
          {description}
        </p>
      </div>
      <Button
        className='h-fit bg-transparent border-white'
        isHover={true}
        text={'XEM TẤT CẢ'}
        classtext={'text-white'}
      />
    </div>
  )
}
