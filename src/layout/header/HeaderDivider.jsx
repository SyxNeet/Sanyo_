import clsx from 'clsx'

export default function HeaderDivider({className}) {
  return (
    <div
      className={clsx(
        'w-[0.0625rem] h-[2.375rem] opacity-10 bg-grey-900',
        className,
      )}
    />
  )
}
