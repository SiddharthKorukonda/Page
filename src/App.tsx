import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Research from './pages/Research'
import Awards from './pages/Awards'
import About from './pages/About'
import Resume from './pages/Resume'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/research" element={<Research />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
