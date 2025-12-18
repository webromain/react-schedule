import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Semaine className="min-h-screen w-full px-6 py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex gap-4 justify-center"/>
    </>
  )
}

function Heure({ h }) {
  return (
  <div className="flex items-start border border-white/20 w-full h-16 px-2">
    <div className="w-6 flex flex-col items-center justify-start text-slate-200"><p>{ h }</p></div>
    <div className="w-full h-full flex items-center rounded-lg bg-white/10 backdrop-blur-md p-3 text-slate-100 shadow-inner hover:bg-white/15 transition-colors">une heure</div>
  </div>
)
}

function Jour({ j }) {
    const heures = []
    for (let i = 0; i < 12; i++) {
      heures.push(<Heure h={i + 8} />)
    }

    return (
    <div className="flex flex-col w-44 md:w-56 border border-white/20 rounded-xl overflow-hidden bg-white/10 backdrop-blur-md shadow-xl hover:bg-white/15 transition">
      <h3 className="text-center font-semibold sticky top-0 bg-white/10 backdrop-blur-md p-2 text-slate-100 border-b border-white/20">{ j }</h3>
      <div className="flex flex-col divide-y divide-white/10 overflow-y-auto">
        {heures}
      </div>
      <div className="flex items-start w-full px-2"><p>20</p></div>
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
