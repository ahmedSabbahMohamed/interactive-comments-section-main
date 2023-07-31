import React from 'react'
import Avatar from './Avatar'
import UpDownVote from './UpDownVote'
import Reply from './Reply'

function Comment() {
  return (
    <>
    <div className="comment lg:flex flex-row gap-4 items-start lg:relative bg-white rounded-lg p-4 m-2">
        <div className='hidden lg:block'>
            <UpDownVote num={12} />
        </div>
        <Avatar />
        <div className="flex items-center justify-between lg:hidden">
            <UpDownVote num={12} />
            <Reply />
        </div>
        <div className="absolute top-9 right-9 hidden lg:block">
            <Reply />
        </div>
    </div>
    </>
  )
}

export default Comment