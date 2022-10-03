import React from 'react'
import Category from './Category'


export default function Characteristics(props) {
    return (
        <div className='Investigator, Investigator--Characteristics'>
            <h2 className='Text--Outline'>Characteristics</h2>
            <div className='Investigator--Info'>
                <Category 
                    handleSelect={props.handleChange}
                    defaultValue={props.selectedOption}
                    options={props.statsArray}
                    id='strength'
                    key='strength'
                    name='strength'    />
                <Category 
                    handleSelect={props.handleChange}
                    defaultValue={props.selectedOption}
                    options={props.statsArray}
                    id='dexterity'
                    key='dexterity'
                    name='dexterity'    />
                <Category 
                    handleSelect={props.handleChange}
                    defaultValue={props.selectedOption}
                    options={props.statsArray}
                    id='consitution'
                    key='consitution'
                    name='consitution'    />
                <Category 
                    handleSelect={props.handleChange}
                    defaultValue={props.selectedOption}
                    options={props.statsArray}
                    id='intelligence'
                    key='intelligence'
                    name='intelligence'    />
                <Category 
                    handleSelect={props.handleChange}
                    defaultValue={props.selectedOption}
                    options={props.statsArray}
                    id='appearance'
                    key='appearance'
                    name='appearance'    />
                <Category 
                    handleSelect={props.handleChange}
                    defaultValue={props.selectedOption}
                    options={props.statsArray}
                    id='size'
                    key='size'
                    name='size'    />
                <Category 
                    handleSelect={props.handleChange}
                    defaultValue={props.selectedOption}
                    options={props.statsArray}
                    id='education'
                    key='education'
                    name='education'    />
                <Category 
                    handleSelect={props.handleChange}
                    defaultValue={props.selectedOption}
                    options={props.statsArray}
                    id='power'
                    key='power'
                    name='power'    />
            </div>
        </div>
    )
}