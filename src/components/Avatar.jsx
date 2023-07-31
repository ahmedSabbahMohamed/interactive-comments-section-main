import React from 'react'
import amy from "../assets/images/avatars/image-amyrobson.png"

function Avatar() {
  return (
    <>
    <div className='avatar'>
        <div className="flex flex-row items-center gap-4">
            <div>
                <img
                    className='w-12 h-12 rounded-full'
                    src={ amy }
                    alt="amy"
                />
            </div>
            <h2 className='text-dblue'>amyrobson</h2>
            <p className='text-gblue'>1 month ago</p>
        </div>
        <p className='text-gblue py-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora laboriosam aspernatur necessitatibus pariatur velit eaque voluptatem, facere doloribus! Cum quia voluptas voluptatum inventore vitae earum dicta ipsam soluta expedita doloribus.
        </p>
    </div>
    </>
  )
}

export default Avatar