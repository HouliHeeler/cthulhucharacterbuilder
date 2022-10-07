import { memo, useMemo } from 'react'
import { useDrag } from 'react-dnd'

export const SourceBox = memo(function SourceBox(props) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      //Sets type property of draggable item, to be checked by droppable box to ensure acceptance
      type: props.name,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
  )
  const containerStyle = useMemo(
    () => ({
      opacity: isDragging ? 0.4 : 1,
    }),
    [isDragging],
  )
  return (
    <div ref={drag} style={containerStyle} className="Stat--Source">
      <span>{props.name}</span>
    </div>
  )
})
