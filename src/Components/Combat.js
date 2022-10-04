import React from 'react'

export default function Combat(props) {
    const {Strength, Dexterity, Size} = props.stats
    const dodge = Dexterity/2
    let build
    let damageBonus
    if(Number(Strength) + Number(Size) >= 165) {
        build = 2
        damageBonus = "1d6"
    }else if (Number(Strength) + Number(Size) >= 125) {
        build = 1
        damageBonus = "1d4"
    }else {
        build = 0
        damageBonus = "0"
    }

    return (
        <div>
            <h2 className='Text--Outline'>Combat</h2>
            <div className='Combat--Table'>
                <div className='Combat--Row'>
                    <div>Damage Bonus</div>
                    <span className='Combat--Input'>{damageBonus}</span>
                </div>
                <div className='Combat--Row'>
                    <div>Build</div>
                    <span className='Combat--Input'>{build}</span>
                </div>
                <div className='Combat--Row'>
                    <div>Dodge</div>
                    <span className='Combat--Input'>{dodge}</span>
                </div>
            </div>  
        </div>
    )
}