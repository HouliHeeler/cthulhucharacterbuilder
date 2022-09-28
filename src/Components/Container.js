import { memo } from 'react'
import { SourceBox } from './SourceBox.js'
import { StatefulTargetBox as TargetBox } from './TargetBox.js'
import {skills} from '../Constants'
export const Container = memo(function Container() {
  const skillsArray = skills.map((skill, i) => <TargetBox name={skill.name} key={i} default={skill.score} className="Target--Box"/>)
  return (
    <div>
      <div className="Prof--Skills">
        <SourceBox name="40" type="profSkill" className="Stat--Source"/>
        <SourceBox name="40" type="profSkill" className="Stat--Source"/>
        <SourceBox name="40" type="profSkill" className="Stat--Source"/>
        <SourceBox name="50" type="profSkill" className="Stat--Source"/>
        <SourceBox name="50" type="profSkill" className="Stat--Source"/>
        <SourceBox name="50" type="profSkill" className="Stat--Source"/>
        <SourceBox name="60" type="profSkill" className="Stat--Source"/>
        <SourceBox name="60" type="profSkill" className="Stat--Source"/>
        <SourceBox name="70" type="profSkill" className="Stat--Source"/>
      </div>
      <div className="Pers--Skills">
        <SourceBox name="20" type="persSkill" className="Stat--Source"/>
        <SourceBox name="20" type="persSkill" className="Stat--Source"/>
        <SourceBox name="20" type="persSkill" className="Stat--Source"/>
        <SourceBox name="20" type="persSkill" className="Stat--Source"/>
      </div>
      <div className="Skills--Array">
        {skillsArray}
      </div>
    </div>
  )
})

export { Container as default }
