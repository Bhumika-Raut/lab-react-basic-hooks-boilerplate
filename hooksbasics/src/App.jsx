import { useState } from 'react'
import React from 'react'
import './App.css'
import UseEffect from './Component/UseEffect'
import UseState from './Component/UseState'
import UseContext  from './Component/UseContext'

export const ToggleTheme = React.createContext()

function App() {

  const [state, setState] = useState(true) 
   const handleToggle = () => {
    setState(state=> !state)
  }

  return (
    <>
      <UseState/>
      <UseEffect/>
      
      <ToggleTheme.Provider value={state}>
       <button onClick={handleToggle}>Toggle</button>
       <UseContext/>
      </ToggleTheme.Provider>

      
    </>
  )
}

export default App
