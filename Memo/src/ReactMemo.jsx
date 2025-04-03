import React  from 'react'

const Counting = () => {
    console.log('Page is rendering again and again............')
  return (
    <div>
      <p>page is Rendering Again......</p>
    </div>
  )
}

export default React.memo(Counting); 
