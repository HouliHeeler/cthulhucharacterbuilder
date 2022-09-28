import React from 'react'
import { weaponArray } from '../Constants'

export default function Weapons() {
    const column = weaponArray.map(item => (
    <div className='Weapons--Column'>
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
