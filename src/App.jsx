import { useState } from 'react'
import Homepage from './components/header'
import Asidebar from './components/asidebar'
import Songscards from './components/songscards'
import AudioPlayer from './components/player'
function App() {

  return (
    <>
  <Homepage/>
  <div style={{display:'flex'}}>
    <Asidebar></Asidebar>
   <Songscards></Songscards>
   </div>
   <AudioPlayer></AudioPlayer>
    </>
  )
}

export default App
