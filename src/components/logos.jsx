import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function Logos() {
    return(
        <div id="logos">
            <p>
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </p>
            <p>
                <img src={reactLogo} className="logo react" alt="React logo" />
            </p>
        </div>
    )
}

export default Logos