import { useState } from 'react'
import './App.css'
import Btn from './components/Button/Btn'
import HealthCard from './components/HealthCard/HealthCard'
import Popup from './components/Popup/Popup'

function App() {
  const [showCard, setShowCard] = useState<boolean>(false)
  const [showPopup, setShowPopup] = useState<boolean>(false)

  return (
    <div
      className="App"
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Btn setShowCard={setShowCard} />
      <HealthCard show={showCard} setShowPopup={setShowPopup} />
      {showPopup && (
        <Popup setShowCard={setShowCard} setShowPopup={setShowPopup} />
      )}
    </div>
  )
}

export default App
