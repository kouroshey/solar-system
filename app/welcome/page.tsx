'use client'

import { FC, Fragment } from 'react';
import Link from 'next/link';
// import GuideModal from './component/GuideModal';


const WelcomePage: FC = () => {
  // const [isModalShow, setIsModalShow] = useState(true)
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsModalShow(true)
  //     setIsLoading(false)
  //   }, 1500)
  // }, [])

  return (
    <Fragment>
      <div className='welcome-page flex justify-center items-center'>
        <div className="welcom-page-details min-w-[60%] rounded-xl flex justify-center flex-col items-center gap-4">
          <h1 className='header-1 text-4xl font-bold leading-8'>به منظومه شمسی خوش اومدی!</h1>
          <p className=''>یه بازی باحال که توش میتونی ترتیب سیاره ها رو یاد بگیری</p>
          <Link href={'/solar'} className='px-5 py-2 rounded-md bg-inherit font-bold transition-all hover:bg-white hover:text-black'>شروع بازی</Link>
        </div>
      </div>
      {/* <GuideModal
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
      /> */}
    </Fragment>
  )
}

export default WelcomePage