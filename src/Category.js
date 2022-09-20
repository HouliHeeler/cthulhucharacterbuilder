import React, {useState} from 'react'

export default function Category(props) {
    let [statsArray, setStatsArray] = useState(["40", "50", "50", "50", "60", "60", "70", "80"])

    let handleStatChange = (e) => {
        alert(e.target.value)
    }
    
    const statsInput =  <select onChange={handleStatChange}>
                            <option value="Choose Wisely">Choose Wisely</option>
                            {statsArray.map((stats, index) => <option key={index} value={stats}>{stats}</option>)}
                        </select>

    return (
        <div className='Info--Span'>
            <span>{props.name}</span>
            {statsInput}
        </div>
    )
}