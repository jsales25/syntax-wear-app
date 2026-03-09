import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Categories } from "./components/Categories"
import { Gallery } from "./components/Gallery"

function App() {

  return (
    <>
    <Header />

    <main className="py-10">
      <Hero />
      <Categories />
      <Gallery />
    </main>
    
    </>
  )
}

export default App
