import { memo, useMemo } from 'react'
import { useDrag } from 'react-dnd'

const style = {
  border: '1px dashed gray',
  padding: '0.5rem',
  margin: '0.5rem',
}
export const SourceBox = memo(function SourceBox(props) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "STAT",
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
  )
  const containerStyle = useMemo(
    () => ({
      ...style,
      opacity: isDragging ? 0.4 : 1,
    }),
    [isDragging],
  )
  return (
    <div ref={drag} style={containerStyle} >
      <span>{props.name}</span>
    </div>
  )
})
