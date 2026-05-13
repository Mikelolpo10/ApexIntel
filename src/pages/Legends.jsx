import { useParams } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ErrorPage from "./ErrorPage"
import legendsData from '../data/legendsData.json'

export default function Legends() {
  const params = useParams()
  const legendInfo = legendsData.find(item => item.name.toLocaleLowerCase() === params.name)

  if (!legendInfo) return <ErrorPage />

  return (
    <>
      <div className="min-h-screen">
        <Header />

        <main className="main">
          <section className="relative my-8 before:content-[''] before:absolute before:inset-0 before:bg-overlay-medium before:blur-[xl] before:-z-1">
            <div className="flex flex-col">
              <span><strong>Name: </strong>{legendInfo.name}</span>
              <span><strong>Nickname: </strong>{legendInfo.nickname}</span>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}