import React, { useState, useEffect } from 'react'

import Octocat from './components/Octocat'

function App() {

  const [ octocats, setOctocats] = useState([])

  useEffect(() => {
    fetch('https://sdg-octodex.herokuapp.com/')
      .then(res => res.json())
      .then(json => setOctocats(json.data))
  }, [])

  return (
    <Octocat/>
  )
}

export default App
