import React from 'react'
import Select from 'react-select'

export default function Category(props) {
    return (
        <div className='Info--Span'>
            <span>{props.name}</span>
            <Select 
                    name={props.statName}
                    defaultValue={props.defaultValue}
                    onChange={props.handleSelect}
                    //Provides the options in the dropdown menu. Fed through props from App.js to Characteristics.js to here
                    options={props.options}
                    className="Category--Options"/>
        </div>
    )
}