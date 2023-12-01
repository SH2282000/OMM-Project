import { useState } from 'react'
import './App.css'
import Login from './LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <header>
          <div className="topbar">
            <div className="logo_group">
              <img src="mini_logo.svg" alt="Mini Logo" />
            </div>
            <menu>
              <li><a href="/">Login</a></li>
              <li><a href="/">News</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">About</a></li>
            </menu>
            <textarea rows={1} className="searchbox" placeholder="search..." />
          </div>
          <hr className="solid" />
        </header>
        <Login />
      </body>
    </>
  )
}

export default App
