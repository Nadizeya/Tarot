import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Row from './components/Row'
import Background from './components/compon'


function App() {

  return (
    <div className="App">
    
      <Background backgroundImageUrl="https://static.vecteezy.com/system/resources/previews/004/968/002/original/cute-abstract-modern-background-free-vector.jpg">
      <Row />
      </Background>
            
    </div>
  )
}

export default App;
