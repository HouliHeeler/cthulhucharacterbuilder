import React, {useState} from 'react'

export default function Characteristics() {
    let statsArray = ["40", "50", "50", "50", "60", "60", "70", "80"]

    let [stat, setStat] = useState("Choose Wisely")

    let handleStatChange = (e) => {
        let valueIndex = statsArray.indexOf(e.target.value)
        setStat(e.target.value)
        if(e.target.value !== "Choose Wisely") {
            statsArray.splice(valueIndex, 1)
            alert(statsArray)
        }
        }

    const statsInput =  <select onChange={handleStatChange}>
                            <option value="Choose Wisely">Choose Wisely</option>
                            {statsArray.map((stats, index) => <option key={index} value={stats}>{stats}</option>)}
                        </select>

    return (
        <div className='Investigator'>
            <h2 className='Text--Outline'>Characteristics</h2>
            <div className='Investigator--Info'>
                <div className='Info--Span'>
                    <span>Strength</span>
                    {statsInput}
                </div>
                <div className='Info--Span'>
                    <span>Dexterity</span>
                    {statsInput}
                </div>
                <div className='Info--Span'>
                    <span>Constitution</span>
                    {statsInput}
                </div>
                <div className='Info--Span'>
                    <span>Intelligence</span>
                    {statsInput}
                </div>
                <div className='Info--Span'>
                    <span>Appearance</span>
                    {statsInput}
                </div>
                <div className='Info--Span'>
                    <span>Size</span>
                    {statsInput}
                </div>
                <div className='Info--Span'>
                    <span>Education</span>
                    {statsInput}
                </div>
                <div className='Info--Span'>
                    <span>Power</span>
                    {statsInput}
                </div>
            </div>
        </div>
    )
}