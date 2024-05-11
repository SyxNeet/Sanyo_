import React from 'react';

const ButtonSlide = ({ className,classNameSvg,isJapan }) => {
  return (
    <div className={`group border-[1px] rounded-[50%] flex items-center justify-center ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none" className={`${classNameSvg}`}>
        <path d="M0.809772 8.94723L12.3742 0V6.71042L17 8.94723L12.3742 11.184V17.8945L0.809772 8.94723Z" fill="currentColor" />
      </svg>
    </div>
  );
};

export default ButtonSlide;
