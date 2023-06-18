import Image from 'next/image'
import React from 'react'

type Props = {
  errorType?: 'NOT_FOUND' | 'UNKNOWN'
}

const CustomError: React.FC<Props> = ({ errorType }) => {
  return (
    <div
      className={`m-auto max-w-4xl py-12 px-6`}
    >
      <div className="py-20 flex flex-col items-center gap-10">
        <div className="text-6xl flex items-center">
          <div className='font-bold text-[#ffb029]'>4 </div>
          <Image src="/images/error.png" width={55} height={55} alt="error" />
          <div className='font-bold text-[#ffb029]'> 4</div>
        </div>
        <div className="text-3xl font-bold text-gray-500 dark:text-gray-200">Post not found</div>
        <p className='text-md text-gray-500 text-center'>API 에러일 가능성이 높습니다.<br/>
          <span className='text-sky-400 font-bold dark:text-sky-500'>🔄 새로고침</span>을 시도해보세요.</p>
      </div>
    </div>
  )
}

export default CustomError
