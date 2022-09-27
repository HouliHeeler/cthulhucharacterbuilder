import React from 'react'
import { weaponArray } from './Constants'

export default function Weapons() {
    const column = weaponArray.map(item => <div>{item}</div>)
    return (
        <div>
            <h2 className='Text--Outline'>Weapons</h2>
            {column}
        </div>
    )
}
