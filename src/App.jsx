import React from 'react'
import Weather from './components/Weather'
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    <div className='app'>
      <Weather/> 
    </div>
  )
}

export default App
