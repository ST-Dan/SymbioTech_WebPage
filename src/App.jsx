import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Industry4 from './pages/Industry4'
import ProcessAutomation from './pages/ProcessAutomation'
import MESIntegration from './pages/MESIntegration'
import UpgradeEquipment from './pages/UpgradeEquipment'
import Robots from './pages/Robots'
import Consultations from './pages/Consultations'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industry-4-0" element={<Industry4 />} />
          <Route path="/process-automation" element={<ProcessAutomation />} />
          <Route path="/mes-integration" element={<MESIntegration />} />
          <Route path="/upgrade-equipment" element={<UpgradeEquipment />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/about" element={<div style={{ padding: '60px 48px' }}>About Us Page</div>} />
          <Route path="/services" element={<div style={{ padding: '60px 48px' }}>Services/Products Page</div>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App