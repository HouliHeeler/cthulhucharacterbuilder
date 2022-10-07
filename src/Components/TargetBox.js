import { memo, useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'

const TargetBox = memo(function TargetBox({ onDrop, lastDroppedStat }) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      //Ratifies the type of draggable item against accepted types. Will only allow matches to be dropped
      accept: ["20", "40", "50", "60", "70"],
      drop(_item, monitor) {
        onDrop(monitor.getItemType())
        return undefined
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        draggingColor: monitor.getItemType(),
      }),
    }),
    [onDrop],
  )
  const opacity = isOver ? 1 : 0.7
  
  return (
    <div
      ref={drop}
      data-stat={lastDroppedStat || 'none'}
      style={{ opacity }}
      className="Target--Box"
    >
      {!canDrop && lastDroppedStat && <span>{lastDroppedStat}</span>}
    </div>
  )
})
export const StatefulTargetBox = (props) => {
  const [lastDroppedStat, setLastDroppedStat] = useState(props.default)
  //Pulls the stat from the draggable item and uses it to set lastDroppedStat, which is applied to the target box as a chosen character stat
  const handleDrop = useCallback((stat) => setLastDroppedStat(stat), [])
  return (
    <div className="Skill">
      <span style={{color: "aliceblue"}}>{props.name}</span>
      <TargetBox
      {...props}
      lastDroppedStat={lastDroppedStat}
      onDrop={handleDrop}
    />
    </div>
  )
}
