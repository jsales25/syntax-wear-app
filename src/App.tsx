import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Categories } from "./components/Categories"


function App() {

  return (
    <>
    <Header />

    <main className="py-10">
      <Hero />
      <Categories />
    </main>
    
    </>
  )
}

export default App
