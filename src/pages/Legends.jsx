import { useState } from "react"
import Header from "../components/Header"
import MainCard from "../components/MainCard"
import legendsClassIcon from '../assets/icon/legends-class.png'
import legendsData from '../data/legendsData.json'
import legendsClass from '../data/legendsClass.json'

export default function Legends() {
  const [classSelected, setClassSelected] = useState('all')

  return (
    <>
      <title>Legends</title>

      <Header />

      <main className="mx-auto px-6 max-w-7xl min-h-screen text-white before:content-[''] before:fixed before:bg-[url('/images/background-grayscale.jpg')] before:bg-cover before:bg-center before:inset-0 before:-z-20 after:content-[''] after:fixed after:inset-0 after:bg-black/90 after:-z-10">
        {/* Legends Selection */}
        <section className="my-8">
          <div className="w-full flex">
            <img src={legendsClassIcon} alt="Legends class icon" className="h-36" />
            <div className="pl-4 flex flex-col gap-2">
              <h3 className="pt-4 text-2xl font-bold">Legends Class</h3>
              <p className="mr-[40%]">The Legends Class system groups characters into different roles based on their abilities, strengths, and overall purpose in a team. Each class is designed to support a specific playstyle, helping players understand how a character is meant to be used during matches.</p>
            </div>
          </div>

          <nav className="relative mt-12 flex gap-2 text-text-muted font-semibold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-overlay-gray-light box-content">
            {['ALL', ...Object.keys(legendsClass)].map((className) => (
              <div
                key={className}
                className={`
                  relative py-4 px-2 flex items-center justify-center cursor-pointer hover:text-white
                  ${classSelected === className.toLocaleLowerCase()
                    ? "text-orange before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-orange"
                    : ''
                  }
                `}
                onClick={() => setClassSelected(className.toLocaleLowerCase())}
              >
                {className === 'ALL' ? className : `${className} Class Legends`}
              </div>
            ))}
          </nav>

          <div className="main-card-container">
            {legendsData.map(({name, nickname, path, img}) => (
              <MainCard name={name} nickname={nickname} path={path} img={img} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
