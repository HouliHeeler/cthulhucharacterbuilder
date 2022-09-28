import React, {useState} from 'react'
import Category from './Category'
import {options, statNames} from '../Constants'

export default function Characteristics() {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [statsArray, setStatsArray] = useState([...options])
    const [strength, setStrength] = useState(null)
    const [chosenArray, setChosenArray] = useState([])
    function handleChange(e) {
        setStrength(e.label)
        setChosenArray(strength)
        let temp = [...statsArray].indexOf(e)
        let newArray = [...statsArray].slice(0, temp).concat([...statsArray].slice(temp+1))
        setSelectedOption(chosenArray)
        setStatsArray(newArray)
    }
    const stats = statNames.map(item => (
        <Category handleSelect={handleChange}
                  defaultValue={selectedOption}
                  options={statsArray}
                  id={item} 
                  name={item}  />
    ))
    return (
        <div className='Investigator, Investigator--Characteristics'>
            <h2 className='Text--Outline'>Characteristics</h2>
            <div className='Investigator--Info'>
                {stats}
            </div>
        </div>
    )
}