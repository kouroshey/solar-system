'use client'

import { Fragment, useEffect, useState } from 'react';
import { Modal } from '../components/modal/modal';
import Link from 'next/link';

const WelcomePage = () => {
  const [isModalShow, setIsModalShow] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsModalShow(true)
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <Fragment>
      <div className='welcome-page flex justify-center items-center'>
        <div className="welcom-page-details min-w-[60%] rounded-xl flex justify-center flex-col items-center gap-4">
          <h1 className='header-1 text-4xl font-bold leading-8'>خیلی بازی جالبیه خداشاهده!</h1>
          <p className=''>حتما نصب کنید!</p>
          {!isLoading && <Link href={'/solar'} className='px-5 py-2 rounded-md bg-inherit font-bold transition-all hover:bg-white hover:text-black'>بریم بازی</Link>}
        </div>
      </div>
      <Modal
        onClose={() => setIsModalShow(false)}
        show={isModalShow}
      >
        <div className='welcome-modal flex flex-col gap-4'>
          <h2 className="font-bold text-3xl">خوش اومدید!</h2>
          <div className="modal-content">
            <p>راهنمایی میخوای یا چی؟</p>
          </div>
          <div className="w-full justify-end flex gap-3 mt-8">
            <button className='button-active bg-white text-gray-500 shadow-lg shadow-white hover:shadow-sm'>بزن بریم!</button>
            <button
              onClick={() => setIsModalShow(false)}
              className='button-active bg-purple-600 shadow-lg shadow-purple-600 hover:shadow-md'>نه خودم بلدم</button>
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}

export default WelcomePage