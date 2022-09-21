import React from 'react'
import InvestigatorInfo from './InvestigatorInfo'

export default function Investigator() {
    return (
        <div className='Investigator'>
            <h2 className='Text--Outline'>1920's Era Investigator</h2>
            <div className='Investigator--Info'>
                <InvestigatorInfo name="Name"/>
                <InvestigatorInfo name="Occupation"/>
                <InvestigatorInfo name="Age"/>
                <InvestigatorInfo name="Gender"/>
                <InvestigatorInfo name="Residence"/>
            </div>
        </div>
    )
}