import React from 'react'
import Select from 'react-select'

export default function Category(props) {
    const options = [
        {value:"40", label:"40"},
        {value:"50", label:"50"},
        {value:"50", label:"50"},
        {value:"50", label:"50"},
        {value:"60", label:"60"},
        {value:"60", label:"60"},
        {value:"70", label:"70"},
        {value:"80", label:"80"},
    ]

    return (
        <div className='Info--Span'>
            <span>{props.name}</span>
            <Select options={options}
                    hideSelectedOption={true}
                    isClearable={true}
                    className="Category--Options"/>
        </div>
    )
}