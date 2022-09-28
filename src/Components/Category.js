import React from 'react'
import Select from 'react-select'

export default function Category(props) {
    return (
        <div className='Info--Span'>
            <span>{props.name}</span>
            <Select 
                    inputId={props.name}
                    defaultValue={props.defaultValue}
                    onChange={props.handleSelect}
                    options={props.options}
                    className="Category--Options"/>
        </div>
    )
}