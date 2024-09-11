import EarthImage from '@/public/images/planets/Earth.svg'
import JupiterImage from '@/public/images/planets/Jupiter.svg'
import MarsImage from '@/public/images/planets/Mars.svg'
import MercuryImage from '@/public/images/planets/Mercury.svg'
import NeptuneImage from '@/public/images/planets/Neptune.svg'
import SaturnImage from '@/public/images/planets/Saturn.svg'
import UranusImage from '@/public/images/planets/Uranus.svg'
import VenusImage from '@/public/images/planets/Venus.svg'
import QuestionMark from '@/public/images/question.png'
import Image from 'next/image'
import { FC } from 'react'

const staticPlanets = [
  { id: '1', name: 'زهره', img: VenusImage },
  { id: '0', name: 'عطارد', img: MercuryImage },
  { id: '5', name: 'زحل', img: SaturnImage },
  { id: '4', name: 'مشتری', img: JupiterImage },
  { id: '6', name: 'اورانوس', img: UranusImage },
  { id: '3', name: 'مریخ', img: MarsImage },
  { id: '7', name: 'نپتون', img: NeptuneImage },
  { id: '2', name: 'زمین', img: EarthImage },
]


type SidebarProps = {
  isSortedByIdHandler: () => void;
  isCheckBtnActive: boolean;
  setIsGuideModalShow: (val: boolean) => void;
  resetGame: () => void;
}

const SideBar: FC<SidebarProps> = ({ resetGame, setIsGuideModalShow, isSortedByIdHandler, isCheckBtnActive }) => {
  return (
    <div className="w-2/6 bg-[#0E0028] h-screen overflow-scroll">
      <div className='planets-container w-100 absolute top-1/2 select-none right-0 transform -translate-y-1/2 rounded-xl'>
        <span onClick={() => setIsGuideModalShow(true)} className='absolute -left-24 cursor-pointer flex items-center'>
          <Image src={QuestionMark} height={45} width={45} alt="question" />
          <span>راهنما</span>
        </span>
        <p className='w-100 text-white underline underline-offset-8 text-lg text-center py-2 rounded-lg font-bold'>اسامی سیاره ها</p>
        {staticPlanets.map(planet => (
          <div key={planet.id} className='flex gap-2 items-center my-2'>
            <Image width={70} src={planet.img} alt={planet.name} />
            <span>{planet.name}</span>
          </div>
        ))}
        <div className='flex flex-col'>
          <button
            disabled={!isCheckBtnActive}
            className={`btn bg-purple-800 mt-4 text-white ${isCheckBtnActive ? 'btn-active shadow-md shadow-purple-500 hover:shadow-sm' : 'btn-disable'}`}
            onClick={isSortedByIdHandler}
          >
            دیدن نتیجه
          </button>
          <button
            // disabled={isCheckBtnActive}
            className={`btn bg-orange-500 mt-4 text-white ${isCheckBtnActive ? 'btn-active shadow-md shadow-orange-500 hover:shadow-sm' : 'btn-disable'}`}
            onClick={() => {
              resetGame()
              console.log('reset');

            }}
          >
            از اول
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideBar