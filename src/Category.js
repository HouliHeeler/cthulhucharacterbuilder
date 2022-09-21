import React from 'react'
import Select from 'react-select'

export default function Category(props) {
    const options = [
        {value:"1", label:"40"},
        {value:"2", label:"50"},
        {value:"3", label:"50"},
        {value:"4", label:"50"},
        {value:"5", label:"60"},
        {value:"6", label:"60"},
        {value:"7", label:"70"},
        {value:"8", label:"80"},
    ]

    return (
        <div className='Info--Span'>
            <span>{props.name}</span>
            <Select options={options}
                    isClearable={true}
                    className="Category--Options"/>
        </div>
    )
}