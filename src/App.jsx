import React from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import NZERO from './Page/NZERO'

const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <>
      <ReactLenis root>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Nzero' element={<NZERO />} />
        </Routes>
      </ReactLenis>
    </>
  )

}

export default App

