import React from 'react'
import { Fade } from 'react-awesome-reveal'

const TextModule = ({ content }) => {
  return (
    <Fade triggerOnce>
      <div
        className='module-text-container'
        dangerouslySetInnerHTML={{
          __html: content.text.childMarkdownRemark.html,
        }}
      ></div>
    </Fade>
  )
}

export default TextModule
