import React from 'react'
import Category from './Category'
import { statNames } from '../Constants'


export default function Characteristics(props) {
    //Creates dropdown menus for each item in the statNames array imported from Constants.js
    const statSelector = statNames.map(item => 
    <Category 
        handleSelect={props.handleChange}
        defaultValue={props.selectedOption}
        options={props.statsArray}
        statName={item}
        key={item}
        name={item} 
        />
    )
    return (
        <div className='Investigator, Investigator--Characteristics'>
            <h2 className='Text--Outline'>Characteristics</h2>
            <div className='Investigator--Info'>
                {statSelector}
            </div>
        </div>
    )
}