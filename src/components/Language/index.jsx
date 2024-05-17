import {useEffect,useState} from 'react'
import './styles.css'
import Image from 'next/image'
const GoogleTranslate = () => {
  const [currentLanguage, setCurrentLanguage] = useState('vi');
  useEffect(() => {
    const googleTranslateScript = document.createElement('script')
    googleTranslateScript.type = 'text/javascript'
    googleTranslateScript.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    document.body.appendChild(googleTranslateScript)

    window.googleTranslateElementInit = function () {
      new google.translate.TranslateElement(
        {
          pageLanguage: 'vi',
          includedLanguages: 'vi,en',
          autoDisplay: false,
          multilanguagePage: true,
        },
        'google_translate_element',
      )
    }
  }, [])

  const handleLanguageChange = (language) => {
    if (language === 'vi') {
      // clearCookies()
      // window.location.reload()
      // setCurrentLanguage('vi')
      const selectBox = document.querySelector('.goog-te-combo:last-child')
      if (selectBox) {
        selectBox.value = language
        selectBox.dispatchEvent(new Event('change'))
        setCurrentLanguage('vi')
      }
    } else {
      const selectBox = document.querySelector('.goog-te-combo:last-child')
      if (selectBox) {
        selectBox.value = language
        selectBox.dispatchEvent(new Event('change'))
        setCurrentLanguage('en')
      }
    }
  }

  const clearCookies = () => {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i]
      const eqPos = cookie.indexOf('=')
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
    }
  }

  return (
    <div>
      <div
        id='google_translate_element'
        style={{display: 'none'}}
      ></div>
      <div className='flex items-center space-x-[0.56rem] cursor-pointer relative fatherLang w-[7.95rem]'>
        <Image
          src={currentLanguage=='vi'?'/images/layout/header/vietnam-lang.png':'/images/layout/header/english-lang.png'}
          width={200}
          height={200}
          alt='viet nam flag'
          className='w-[1.75rem] h-[1.125rem]'
        />
        <span>{currentLanguage=='vi'?'Việt Nam':'English'}</span>
        <Image
          src='/images/layout/header/down.svg'
          width={200}
          height={200}
          alt='viet nam flag'
          className='w-[0.7rem] h-[0.5rem]'
        />
        <div className='absolute top-full left-[-1rem]  flex flex-col bg-white rounded-xl px-4 py-3 childLang shadow-lg w-[10rem]'>
          <label className='flex items-center' onClick={() => handleLanguageChange('en')}>
            <div className='size-4 border border-yellow-500 rounded-[50%] mr-2 flex items-center justify-center' onClick={() => handleLanguageChange('en')}>
              <div className={`size-[0.8rem] bg-yellow-500 rounded-[50%] ${currentLanguage==='vi'?'hidden':''}`}></div>
            </div>
            <span className='font-Iciel whitespace-nowrap font-normal text-[1rem] leading-1.5'>English</span>
          </label>
          <label className='flex items-center' onClick={() => handleLanguageChange('vi')}>
            <div className='size-4 border border-yellow-500 rounded-[50%] mr-2 flex items-center justify-center' onClick={() => handleLanguageChange('vi')}>
              <div className={`size-[0.8rem] bg-yellow-500 rounded-[50%] ${currentLanguage==='en'?'hidden':''}`}></div>
            </div>
            <span className='font-Iciel whitespace-nowrap font-normal text-[1rem] leading-1.5'>Tiếng Việt</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default GoogleTranslate
