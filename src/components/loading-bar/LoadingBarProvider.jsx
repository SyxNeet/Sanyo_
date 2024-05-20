'use client'

import {AppProgressBar as ProgressBar} from 'next-nprogress-bar'

export default function LoadingBarProvider({children}) {
  return (
    <>
      <ProgressBar
        color='rgb(218,181,113)'
        height='0.25rem'
        options={{showSpinner: false}}
      />
      {children}
    </>
  )
}
