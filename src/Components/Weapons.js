import React from 'react'
import { weaponArray } from '../Constants'

export default function Weapons() {
    //Create columns for the Weapons Table based on the weaponArray imported from Constants.js
    const column = weaponArray.map(item => (
    <div key={item} className='Weapons--Column'>
        <div>{item}</div>
        <input className='Weapons--Input'></input>
        <input className='Weapons--Input'></input>
        <input className='Weapons--Input'></input>
        <input className='Weapons--Input'></input>
        <input className='Weapons--Input'></input>
    </div>))
    return (
        <div>
            <h2 className='Text--Outline'>Weapons</h2>
            <div className='Weapons--Table'>
                {column}
            </div>
        </div>
    )
}
