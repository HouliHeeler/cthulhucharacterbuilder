import { memo } from 'react'
import { SourceBox } from './SourceBox.js'
import { StatefulTargetBox as TargetBox } from './TargetBox.js'
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

      <div>
        <TargetBox />
      </div>
    </div>
  )
})
