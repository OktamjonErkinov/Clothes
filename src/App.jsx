import Header from './Components/Header'
import Main from './Components/Main'
import './App.css'
import { motion, useScroll } from "framer-motion"

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <Header></Header>
      <Main></Main>
    </>
  )
}

export default App
