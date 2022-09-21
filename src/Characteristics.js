import React from 'react'
import Category from './Category'

export default function Characteristics() {
    

    // let handleStatChange = (e) => {
    //     let valueIndex = statsArray.indexOf(e.target.value)
    //     setStat(e.target.value)
    //     if(e.target.value !== "Choose Wisely") {
    //         setStatsArray(prevStatsArray => [...prevStatsArray].splice(0, valueIndex).concat([...prevStatsArray].splice((valueIndex + 1), [...prevStatsArray].length - valueIndex)))
    //     }
    // }
    

    

    return (
        <div className='Investigator, Investigator--Characteristics'>
            <h2 className='Text--Outline'>Characteristics</h2>
            <div className='Investigator--Info'>
                <Category name="Strength"  />
                <Category name="Dexterity"  />
                <Category name="Constitution" />
                <Category name="Intelligence" />
                <Category name="Appearance" />
                <Category name="Size" />
                <Category name="Education" />
                <Category name="Power" />
            </div>
        </div>
    )
}