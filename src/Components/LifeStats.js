import React, { useState }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'


export default function LifeStats(props) {
    const element = <FontAwesomeIcon icon={faDice} className='Dice' onClick={rollLuck}/>
    const {Size, Power, Constitution, Dexterity, Strength} = props.stats
    const hitPoints = Math.floor((Number(Constitution) + Number(Size))/10)
    let moveRate;
    if(Dexterity && Strength >= Size) {
        moveRate = "9"
    }else if(Size > Dexterity && Strength) {
        moveRate = "7"
    }else {
        moveRate = "8"
    }
    const sanity = Power
    const magicPoints = Power/5
    const rollOne = Math.ceil(Math.random() * 6)
    const rollTwo = Math.ceil(Math.random() * 6)
    const rollThree = Math.ceil(Math.random() * 6)
    const [luck, setLuck] = useState(0)
    
    function rollLuck() {
        setLuck((rollOne + rollTwo + rollThree) * 5)
    }

    return (
        <div>
            <div className='LifeStats--Table'>
                <div className='LifeStats--Row'>
                    <div>Hit Points</div>
                    <span className='LifeStats--Input'>{hitPoints}</span>
                </div>
                <div className='LifeStats--Row'>
                    <div>Sanity</div>
                    <span className='LifeStats--Input'>{sanity || 0}</span>
                </div>
                <div className='LifeStats--Row'>
                    <div>Luck</div>
                    <span className='LifeStats--Input'>{luck}</span>
                    {element}
                </div>
                <div className='LifeStats--Row'>
                    <div>Magic Points</div>
                    <span className='LifeStats--Input'>{magicPoints}</span>
                </div>
                <div className='LifeStats--Row'>
                    <div>Move Rate</div>
                    <span className='LifeStats--Input'>{moveRate}</span>
                </div>
            </div>
        </div>
    )
}