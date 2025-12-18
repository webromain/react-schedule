import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Semaine className="flex gap-2 bg-red-500"/>
    </>
  )
}

function Heure({ h }) {
  return (
  <div className="flex items-start border border-black w-32 h-16">
    <div className="w-6 flex flex-col items-center justify-start"><p>{ h }</p></div>
    <div className="w-full h-full flex items-center bg-blue-500 p-4">une heure</div>
  </div>
)
}

function Jour({ j }) {
    const heures = []
    for (let i = 0; i < 12; i++) {
      heures.push(<Heure h={i + 8} />)
    }

    return (
    <div>
      <h3>{ j }</h3>
      {heures}
      <div className="flex items-start border border-black w-32"><p>20</p></div>
    </div>)
  
}

function Semaine({ className }) {
  const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]
  const semaine = []
  for (let i = 0; i < 7; i++) {
    semaine.push(<Jour j={jours[i]} />)
  }
  return <div className={className}>{semaine}</div>
}

export default App
