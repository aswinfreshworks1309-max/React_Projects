import React from 'react'
import Calculator from './components/Calculator'
import Word from './components/Word'
import Product from './components/Product'
import HackathonForm from './components/HackathonForm'
import StopClock from './components/StopClock'

const App = () => {
  return (
    <div className='h-full'>
      <h1>Hello world</h1>
     
     <h1>Product</h1>
     <h1>Calculator</h1>
     <Word/>
     <Calculator/>
     <Product/>
     <HackathonForm/>
     <StopClock/>
 
   
    </div>
 
  )
}

export default App
