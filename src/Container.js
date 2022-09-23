import { memo } from 'react'
import { SourceBox } from './SourceBox.js'
import { StatefulTargetBox as TargetBox } from './TargetBox.js'
export const Container = memo(function Container() {
  return (
    <div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
      <div style={{ float: 'left' }}>
        <SourceBox name="40" />
        <SourceBox name="40" />
        <SourceBox name="40" />
        <SourceBox name="50" />
        <SourceBox name="50" />
        <SourceBox name="50" />
        <SourceBox name="60" />
        <SourceBox name="60" />
        <SourceBox name="70" />
      </div>

      <div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
        <TargetBox />
      </div>
    </div>
  )
})
