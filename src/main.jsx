import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AbautSection from './components/AbautSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header/>
  <HeroSection/>   
  <AbautSection/>
  <PortfolioSection/>
  <ContactSection/>
  
  </StrictMode>,
)
