import { memo } from 'react'
import { SourceBox } from './SourceBox.js'
import { StatefulTargetBox as TargetBox } from './TargetBox.js'
import Constants from './Constants'
export const Container = memo(function Container() {
  return (
    <div>
      <div className="Prof--Skills">
        <SourceBox name="40" className="Stat--Source"/>
        <SourceBox name="40" className="Stat--Source"/>
        <SourceBox name="40" className="Stat--Source"/>
        <SourceBox name="50" className="Stat--Source"/>
        <SourceBox name="50" className="Stat--Source"/>
        <SourceBox name="50" className="Stat--Source"/>
        <SourceBox name="60" className="Stat--Source"/>
        <SourceBox name="60" className="Stat--Source"/>
        <SourceBox name="70" className="Stat--Source"/>
      </div>
      <div className="Pers--Skills">
        <SourceBox name="20" className="Stat--Source"/>
        <SourceBox name="20" className="Stat--Source"/>
        <SourceBox name="20" className="Stat--Source"/>
        <SourceBox name="20" className="Stat--Source"/>
      </div>
      <div>
        <TargetBox name="Accounting" default="01" className="Target--Box"/>
        <TargetBox name="Anthropology" default="01" className="Target--Box"/>
        <TargetBox className="Target--Box"/>
        <TargetBox className="Target--Box"/>
        <TargetBox className="Target--Box"/>
        <TargetBox className="Target--Box"/>
      </div>
    </div>
  )
})

export { Container as default }
