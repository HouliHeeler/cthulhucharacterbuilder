import React from 'react'

export default function InvestigatorInfo(props) {
    return (
        <div className='Info--Span'>
            <span>{props.name}</span>
            <input size="10"></input>
        </div>
    )
}