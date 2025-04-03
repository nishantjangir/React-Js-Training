import React from 'react'
import Second from './Second'

import EffectExample from './context/effectExample'

const First = () => {
  return (
    <div>
      First Page
      <Second/>
      <EffectExample/>
    </div>
  )
}

export default First
