import React from 'react'

export default function Investigator() {
    return (
        <div className='Investigator'>
            <h2 className='Text--Outline'>1920's Era Investigator</h2>
            <div className='Investigator--Info'>
                <div className='Info--Span'>
                    <span>Name</span>
                    <input size="10"></input>
                </div>
                <div className='Info--Span'>
                    <span>Occupation</span>
                    <input size="10"></input>
                </div>
                <div className='Info--Span'>
                    <span>Age</span>
                    <input size="10"></input>
                </div>
                <div className='Info--Span'>
                    <span>Gender</span>
                    <input size="10"></input>
                </div>
                <div className='Info--Span'>
                    <span>Residence</span>
                    <input size="10"></input>
                </div>
            </div>
        </div>
    )
}