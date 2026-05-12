import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ErrorPage() {
  return (
    <>
      <title>Page Not Found 404</title>

      <div className="flex flex-col h-screen">

        <Header />

        <main className="main flex flex-col grow items-center justify-center">
          <div className="mb-2 text-text-secondary text-5xl font-bold text-shadow-2xs -translate-y-10">404</div>
          <div className="text-text-muted text-3xl font-bold text-shadow-2xs -translate-y-10">Page Not Found</div>
        </main>

      </div>
    </>
  )
}