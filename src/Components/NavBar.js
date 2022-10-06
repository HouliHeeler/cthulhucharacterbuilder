import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
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