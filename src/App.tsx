import { useState } from 'react'
import './App.css'

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
      <div id="app">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src="lmu.jpg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
            <img src="vite.svg" className="logo vanilla" alt="TypeScript logo" />
          </a>
          <h1>Hello</h1>
          <div className="card">
            <button id="counter" type="button"></button>
          </div>
          <p className="read-the-docs">
            Click on the Vite and TypeScript logos to learn more
          </p>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </body>
    </>
  )
}

export default App
