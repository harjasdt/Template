import React from 'react'
import SideBar from './SideBar'
import LeaderBoard from './LeaderBoard'

export default function Course() {
  return (
    <div>
      <div className='flex'>
      <SideBar/>
      <div className="h-screen flex-1 p-7">
        <LeaderBoard/>
      </div>
    </div>

    </div>
  )
}
