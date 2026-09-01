import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const ContentPage1 = () => {
  return (
    <div className='h-[90vh] flex justify-between items-center py-10 px-15 gap-10'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default ContentPage1
