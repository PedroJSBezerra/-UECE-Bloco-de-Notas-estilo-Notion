import React from 'react'
import app from '../base'

const Home = () => {

  const signout = () => {
    app.auth().signOut()
  }

  return (
    <div className="main">
      <h1>Home</h1>
      <button onClick={signout}>Sign out</button>
    </div>
  )
}

export default Home