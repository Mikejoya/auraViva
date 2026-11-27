import { Footer } from "../shared/components/Footer";
import { useIsMobile } from "../hooks/useIsMobile";
import { NavBar } from "../shared/components/NavBar";
import { NavBarMobile } from "../shared/components/NavBarMobile";
import '../styles/App.css'

interface AppProps {
  children?: React.ReactNode
}

function App({ children }: AppProps) {

  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      {isMobile ?(
        <>
          <NavBarMobile />
        </>
    ): (
      <>
        <NavBar />
          <main className="flex-1">
            {children}
          </main>
        <Footer />  
      </>
    )
  }
    </div>
  )
}

export default App
