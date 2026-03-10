import { Categories } from "./components/Categories"
import { Footer } from "./components/Footer"
import { Gallery } from "./components/Gallery"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"

function App() {

  return (
    <>
      <Header />

      <main className="py-10">
        <Hero />
        <Categories />
        <Gallery />
      </main>

      <Footer />
    </>
  )
}

export default App
