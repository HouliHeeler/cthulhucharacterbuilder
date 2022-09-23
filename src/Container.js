import { memo } from 'react'
import { SourceBox } from './SourceBox.js'
import { StatefulTargetBox as TargetBox } from './TargetBox.js'
import {skills, professionalSkills, personalSkills} from './Constants'
export const Container = memo(function Container() {
  const charSkills = skills.map(skill => <TargetBox className="Target--Box" name={skill.name} default={skill.score}/>)
  const profSkills = professionalSkills.map(skill => <SourceBox name={skill} className="Stat--Source"/>)
  const persSkills = personalSkills.map(skill => <SourceBox name={skill} className="Stat--Source"/>)
  return (
    <div>
      <div className="Prof--Skills">
        {profSkills}
      </div>
      <div className="Pers--Skills">
        {persSkills}
      </div>
      <div>
        {charSkills}
      </div>
    </div>
  )
})

export { Container as default }
