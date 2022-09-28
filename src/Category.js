import React, {useState} from 'react'
import Select from 'react-select'
import {options} from './Constants'

export default function Category(props) {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [statsArray, setStatsArray] = useState([...options])
    function handleChange(e) {
        let temp = [...options].indexOf(e)
        let newArray = [...options].slice(0, temp).concat([...options].slice(temp+1))
        setSelectedOption(e)
        setStatsArray(newArray)
    }
    return (
        <div className='Info--Span'>
            <span>{props.name}</span>
            <Select 
                    defaultValue={selectedOption}
                    onChange={handleChange}
                    options={statsArray}
                    className="Category--Options"/>
        </div>
    )
}