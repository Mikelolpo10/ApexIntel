import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import Header from "../components/Header.jsx"
import Footer from '../components/Footer.jsx'
import MainCard from "../components/MainCard.jsx"
import legendsClassIcon from '../assets/icon/legends-class.webp'
import assaultClassIcon from '../assets/icon/assault-class.webp'
import skirmisherClassIcon from '../assets/icon/skirmisher-class.webp'
import reconClassIcon from '../assets/icon/recon-class.webp'
import supportClassIcon from '../assets/icon/support-class.webp'
import controllerClassIcon from '../assets/icon/controller-class.webp'

const API_URL = import.meta.env.VITE_API_URL

export default function LegendsMenu() {
  const [selectedClass, setselectedClass] = useState('ALL')
  const classIcons = {
    ALL: legendsClassIcon,
    Assault: assaultClassIcon,
    Skirmisher: skirmisherClassIcon,
    Recon: reconClassIcon,
    Support: supportClassIcon,
    Controller: controllerClassIcon,
  }
  const legendsClassDescription = [
    {
      className: 'Assault',
      description: 'The Assault class in Apex Legends focuses on aggressive combat and frontline pressure. These Legends are designed to deal heavy damage, push enemy squads, and create openings during fights.'
    },
    {
      className: 'Skirmisher',
      description: 'The Skirmisher class is built for mobility, positioning, and quick engagements. These Legends excel at moving around the battlefield, escaping danger, and chasing enemies.'
    },
    {
      className: 'Recon',
      description: 'The Recon class specializes in gathering information and tracking enemy activity. These Legends can scan areas, reveal enemy positions, and provide valuable intel for their squad.'
    },
    {
      className: 'Support',
      description: 'The Support class focuses on helping teammates survive and recover during matches. Their abilities provide healing, protection, and utility that keep the squad prepared in difficult situations.'
    },
    {
      className: 'Controller',
      description: 'The Controller class is designed to control space and defend important areas. These Legends use traps, barriers, and zone-control abilities to limit enemy movement and protect their team.'
    }
  ]

  const { data: legendsClass, isLoading: classLoading } = useQuery({
    queryKey: ['legendsClass'],
    queryFn: async () => {
      try {
        const res = await axios.get(`${API_URL}/legends/legendsclass`)
        return res.data
      } catch {
        console.log('Legends class error fetch')
        throw new Error
      }
    }
  })

  const { data: legendsData, isLoading } = useQuery({
    queryKey: ['legendsData'],
    queryFn: async () => {
      try {
        const res = await axios.get(`${API_URL}/legends/legendsdata`)
        return res.data
      } catch {
        console.log('Legends data error fetch')
        throw new Error
      }
    }
  })

  if (classLoading || isLoading) return <h1>WAIT</h1>

  return (
    <>
      <title>Legends</title>

      <main className="main">
        {/* Legends Selection */}
        <section className="my-8">
          <div className="w-full flex">
            <img
              src={classIcons[selectedClass]}
              alt="Legends class icon" className="h-36 w-36" />
            <div className="pl-4 flex flex-col gap-2">
              <h3 className="pt-4 text-2xl font-bold">{selectedClass === 'ALL' ? 'Legends' : selectedClass} Class</h3>
              <p className="mr-[40%]">
                {
                  selectedClass === 'ALL'
                    ? 'The Legends Class system groups characters into different roles based on their abilities, strengths, and overall purpose in a team. Each class is designed to support a specific playstyle, helping players understand how a character is meant to be used during matches.'
                    : legendsClassDescription.find(
                      (item) => item.className === selectedClass
                    )?.description
                }
              </p>
            </div>
          </div>

          <nav className="relative mt-12 flex gap-2 text-text-muted font-semibold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-overlay-gray-light box-content">
            {['ALL', ...Object.keys(legendsClass)].map((className) => (
              <div
                key={className}
                className={`
                  relative py-4 px-2 flex items-center justify-center cursor-pointer 
                  ${selectedClass === className
                    ? "text-orange before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-orange"
                    : 'hover:text-white'
                  }
                `}
                onClick={() => setselectedClass(className)}
              >
                {className === 'ALL' ? className : `${className} Class Legends`}
              </div>
            ))}
          </nav>

          <div className="main-card-container">
            {
              legendsData
                .filter(
                  (legend) =>
                    selectedClass === 'ALL' ||
                    legend.class === selectedClass
                )
                .map(({ name, nickname, path, img }) => (
                  <MainCard
                    key={name}
                    name={name}
                    nickname={nickname}
                    path={path}
                    img={img}
                  />
                ))
            }
          </div>
        </section>
      </main>

    </>
  )
}
