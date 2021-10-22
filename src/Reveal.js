import React, { useState } from 'react'
import Bounce from 'react-reveal/Bounce';
import VisibilitySensor from 'react-visibility-sensor';

const RevealContent = ({ isVisible, children, type, className }) => {
  let element = type || <Bounce left />
  // element.children = children
  return React.createElement(
    element.type,
    element.props,
    children
  )
}

export const Reveal = ({ children, type, className }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity)
  }

  return (
    <VisibilitySensor onChange={onChange}>
      <RevealContent isVisible={isVisible} type={type} className={className}>{children}</RevealContent>
    </VisibilitySensor>
  )
}

export default Reveal