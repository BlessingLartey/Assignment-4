import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="App-header">
      <h1>LETS DO IT TOGETHER</h1>
      <p><Link to="/signin">sign in</Link> to add items to your to do list</p>

      <p>Don't have an account? <Link to="/signup">sign up</Link></p>
    
    </div>
  )
}

export default Home
