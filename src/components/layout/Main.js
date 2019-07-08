import React from 'react'
import Tracks from '../tracks/Tracks'
import Search from '../tracks/Search'

function Main() {
  return (
    <main className='container'>
      <Search />
      <Tracks />
    </main>
  )
}

export default Main
