import React from 'react'
import { combatInfo } from './Constants'

export default function Combat() {
    const combatTable = combatInfo.map(item => (
        <div className='Combat--Row'>
            <div>{item}</div>
            <input className='Combat--Input'></input>
        </div>
    ))
    return (
        <div>
            <h2 className='Text--Outline'>Combat</h2>
            <div className='Combat--Table'>
                {combatTable}
            </div>
        </div>
    )
}