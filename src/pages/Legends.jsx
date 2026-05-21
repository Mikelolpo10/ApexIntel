import axios from 'axios'
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import ErrorPage from "./PageNotFound.jsx"

const API_URL = import.meta.env.VITE_API_URL

export default function Legends() {
  const params = useParams()
  const { data: legendInfo, isLoading, isError } = useQuery({
    queryKey: ['legendInfo'],
    queryFn: async () => {
      try {
        const res = await axios.get(`${API_URL}/legends/legendsdata/${params.name}`)
        return res.data
      } catch {
        console.log(`Legend data fetch error`)
        throw new Error
      }
    }
  })
  const abilities = legendInfo
    ? [
      { type: "Passive", ...legendInfo.passive },
      { type: "Tactical", ...legendInfo.tactical },
      { type: "Ultimate", ...legendInfo.ultimate }
    ] : []

  if (!legendInfo || isError) return <ErrorPage />

  if (isLoading) return <h1>Wait</h1>

  return (
    <>
      <title>{`${legendInfo?.name} - ${legendInfo?.nickname}`}</title>
      <meta
        name="description"
        content={`Learn more about ${legendInfo.name}, a fighter in Apex Legends.`}
      />
      <meta
        name="keywords"
        content={`Apex Legends, ${legendInfo.name}, Apex character`}
      />

      <div className="min-h-screen">
        <main className="main">
          <section className="relative my-8 before:content-[''] before:absolute before:inset-0 before:bg-overlay-medium before:blur-[xl] before:-z-1">
            <div className="py-1 px-1 inline border border-text-secondary rounded-sm text-sm font-semibold">{legendInfo.class} Class Legends</div>
            <div className="flex justify-between">
              {/* Left Side */}
              <div className="mt-4 mr-40 flex flex-col text-text-muted">
                <strong className="mb-6 text-text-primary text-3xl">{legendInfo.name}</strong>
                <i className="mb-2">"{legendInfo.quote}"</i>
                <strong className="text-xl">{legendInfo.nickname}</strong>
                <p>{legendInfo.description}</p>

                {/* Abilities */}
                <div className="mt-8">
                  <h2 className="mb-6 text-text-secondary text-xl font-bold">Abilities</h2>

                  {abilities.map((type) => (
                    <div key={type.name} className="mb-12 flex flex-col text-text-secondary">
                      <div className="flex">
                        <div className="flex items-center min-w-24 bg-white">
                          <img src={type.img} alt={type.name} />
                        </div>
                        {/* Abilities Description */}
                        <div className="flex flex-col w-full bg-overlay-medium border-[0.5px] border-text-disabled">
                          <strong className="py-1 px-2 text-sm border-[0.5px] border-text-disabled">{type.type}</strong>
                          <strong className="py-1 px-2 text-xl border-[0.5px] border-text-disabled">{type.name}</strong>
                          <strong className="py-1 px-2 text-sm border-[0.5px] border-text-disabled">Description: <span className="font-semibold">{type.description}</span></strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div className="p-4 mr-36 flex flex-col max-h-fit items-center min-w-80 max-w-80 border border-text-disabled bg-overlay-gray-heavy text-text-secondary">
                <div className="mb-4">
                  <img src={legendInfo.img} alt={legendInfo.name} fetchPriority='high' className="object-contain" />
                </div>
                <strong className="mb-1 text-lg">- Details -</strong>
                <span className="mr-auto"><strong>Real Name: </strong>{legendInfo.name}</span>
                <span className="mr-auto"><strong>Gender: </strong>{legendInfo.gender}</span>
                <span className="mr-auto"><strong>Age: </strong>{legendInfo.age}</span>
                <span className="mr-auto"><strong>Homeworld: </strong>{legendInfo.homeworld}</span>
                <strong className="mt-2 mb-1 text-lg">- Gameplay -</strong>
                <span className="mr-auto"><strong>Class: </strong>{legendInfo.class}</span>
                <span className="mr-auto"><strong>Passive Ability: </strong>{legendInfo.passive.name}</span>
                <span className="mr-auto"><strong>Tactical Ability: </strong>{legendInfo.tactical.name}</span>
                <span className="mr-auto"><strong>Ultimate Ability: </strong>{legendInfo.ultimate.name}</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}