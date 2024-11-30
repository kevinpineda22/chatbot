import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Chatbot} from './components/Chat'
import { Header } from './components/Header'
 



createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Header />
    <Chatbot />
    
    
    
    
  </StrictMode>,
)
