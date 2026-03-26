import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import GrantTypesPage from './pages/GrantTypesPage'
import AdminPage from './pages/AdminPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/grant-types" element={<GrantTypesPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
