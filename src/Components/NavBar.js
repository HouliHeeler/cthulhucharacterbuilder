import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    //Initializes a print option based on the entire screen, modified with @media queries in App.css
    function handleClick() {
        window.print()
    }
    const element = <FontAwesomeIcon icon={faPrint} className='Printer' onClick={handleClick}/>
    return (
        <div>
            {element}
        </div>
    )
}