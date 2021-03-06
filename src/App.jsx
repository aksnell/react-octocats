import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import Octocat from './components/Octocat'

function App() {

  const [ octocats, setOctocats] = useState([])

  useEffect(() => {
    fetch('https://sdg-octodex.herokuapp.com/')
      .then(res => res.json())
      .then(json => setOctocats(json.data))
  }, [])

  return (
    <div>
      <Header/>
      <div className="container">
        <div className="card-grid responsive-grid responsive-margin">
        {
          octocats.map(octocat => {
            return <Octocat details={octocat}/>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default App
