import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { certificate } from './Data'
import Sertifika from './Sertifika'
import './css/certificate.css'

function App() {

  return (
    <div>
      <Header />
      <div className='certi-main'>
        {
        certificate?.map((certificate) => (
          <Sertifika key={certificate.id} certificate={certificate} />

        ))
      }
      </div>

    </div>
  )
}

export default App
