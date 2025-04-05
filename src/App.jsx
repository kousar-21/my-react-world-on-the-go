// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Suspense } from 'react'
import Counties from '../components/countries/counties'
import './App.css'


const countriesPromise = fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>MY React World On THe Goooo.......</h1>

      <Suspense fallback={<h3>KAE is Going</h3>}>
      <Counties countriesPromise={countriesPromise}></Counties>
      </Suspense>
      
      
     
    </>
  )
}

export default App
