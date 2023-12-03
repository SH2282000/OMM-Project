import { useState } from "react";
import TopBar from "./Header";
import CredentialArea from "./CredentialArea";
import './Root.css'

export default function Login() {
    const [count, setCount] = useState(0)

    return (
        <>
            <TopBar />
            <div id="app">
                <div>
                    <h1>Welcome to OMM</h1>

                    <CredentialArea />

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
            <div className="sponsors">
                Sponsors:
                <a href="https://lmu.de" target="_blank" rel="noopener noreferrer">
                    <img src="lmu.jpg" className="logo" alt="LMU logo" />
                </a>
            </div>
        </>
    );
}