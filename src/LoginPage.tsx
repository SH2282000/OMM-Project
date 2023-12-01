import { useState } from 'react';
import './LoginPage.css'

function Login() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div id="app">
                <div>
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    <img src="lmu.jpg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                    <img src="vite.svg" className="logo vanilla" alt="TypeScript logo" />
                </a>
                <h1>Welcome to OMM</h1>
                <div className="card">
                    <button id="counter" type="button"></button>
                </div>
                <p className="read-the-docs">
                    Connection
                </p>
                </div>
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
            </div>
        </>
    )
}

export default Login