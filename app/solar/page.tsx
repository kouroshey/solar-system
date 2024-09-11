'use client'

import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import EarthImage from '@/public/images/planets/Earth.svg'
import JupiterImage from '@/public/images/planets/Jupiter.svg'
import MarsImage from '@/public/images/planets/Mars.svg'
import MercuryImage from '@/public/images/planets/Mercury.svg'
import NeptuneImage from '@/public/images/planets/Neptune.svg'
import SaturnImage from '@/public/images/planets/Saturn.svg'
import UranusImage from '@/public/images/planets/Uranus.svg'
import VenusImage from '@/public/images/planets/Venus.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Draggable, Droppable } from '../components/dragAndDrop';
import SideBar from './component/SideBar';
import ReactConfetti from '../components/confetti/ReactConfetti';
import ResultModal from './component/ResultModal';
import GuideModal from './component/GuideModal';

type Planet = {
  id: string;
  name: string;
  img: any
}

const SolarSystemPage = () => {
  const [planets, setPlanets] = useState<Planet[]>([
    { id: '1', name: 'زهره', img: VenusImage },
    { id: '0', name: 'عطارد', img: MercuryImage },
    { id: '5', name: 'زحل', img: SaturnImage },
    { id: '4', name: 'مشتری', img: JupiterImage },
    { id: '6', name: 'اورانوس', img: UranusImage },
    { id: '3', name: 'مریخ', img: MarsImage },
    { id: '7', name: 'نپتون', img: NeptuneImage },
    { id: '2', name: 'زمین', img: EarthImage },
  ])
  const [containers, setContainers] = useState(['0', '1', '2', '3', '4', '5', '6', '7'])
  const [activeContainer, setActiveContainer] = useState<string>()
  const [isCheckBtnActive, setIsCheckBtnActive] = useState<boolean>(false)
  const [isCurrectSorted, setisCurrectSorted] = useState<boolean>(false)
  const [isModalShow, setIsModalShow] = useState(false)
  const [isGuideModalShow, setIsGuideModalShow] = useState(false)
  const [isConfettiShow, setIsConfettiShow] = useState(false)

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (over && active) {
      const overPlanet = planets[Number(over.id)]
      const activePlanet = planets[Number(active.id)]

      if (overPlanet && activePlanet) {
        const overPlanetIndex = planets.indexOf(overPlanet);
        const activePlanetIndex = planets.indexOf(activePlanet);

        if (overPlanetIndex !== -1 && activePlanetIndex !== -1) {
          const newArr: Planet[] = [...planets];

          [newArr[overPlanetIndex], newArr[activePlanetIndex]] = [newArr[activePlanetIndex], newArr[overPlanetIndex]];

          setPlanets(newArr);

        } else {
          console.error("Planet not found in array");
        }
      }
    }

    setActiveContainer('')
  }

  const handleDragStart = (event: DragStartEvent) => {
    setIsCheckBtnActive(true)
    const { active } = event
    if (active.id) {
      setActiveContainer(active.id as string)
    }
  }

  const isSortedByIdAscending = () => {
    for (let i = 0; i < planets.length - 1; i++) {
      if (parseInt(planets[i].id) > parseInt(planets[i + 1].id)) {
        setisCurrectSorted(false)
        setIsModalShow(true)
        return
      }
    }
    setIsConfettiShow(true)
    setisCurrectSorted(true)
    setIsModalShow(true)
  }

  useEffect(() => {
    if (isConfettiShow) {
      setTimeout(() => {
        setIsConfettiShow(false)
      }, 5000)
    }
  }, [isConfettiShow])

  useEffect(() => {
    setTimeout(() => {
      setIsGuideModalShow(true)
    }, 2000)
  }, [])

  return (
    <main className="bg-[#323257] h-screen text-white flex">
      {isConfettiShow ? <ReactConfetti /> : ''}
      <SideBar setIsGuideModalShow={setIsGuideModalShow} isCheckBtnActive={isCheckBtnActive} isSortedByIdHandler={isSortedByIdAscending} />
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className="solar-system-container">
          {containers.map(id => {
            return (
              <div className={`planet-container${id} planet-container ${activeContainer == id ? 'container-active' : ''}`}>
                <Droppable id={containers[Number(id)]}>
                  <Draggable id={id}>
                    <div key={id} className='flex gap-2 items-center'>
                      <Image width={150} src={planets[Number(id)].img} alt={planets[Number(id)].name} />
                    </div>
                  </Draggable>
                </Droppable>
              </div>
            )
          })}
        </div>
      </DndContext>
      <ResultModal
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
        isCurrectSorted={isCurrectSorted}
      />
      <GuideModal
        isModalShow={isGuideModalShow}
        setIsModalShow={setIsGuideModalShow}
      />
    </main>
  )
}

export default SolarSystemPage 