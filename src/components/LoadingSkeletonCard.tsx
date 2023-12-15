import React from 'react'

const LoadingSkeletonCard = () => {
    return (
        <div className='flex flex-col gap-4 w-1/2 mt-10'>
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-16 mt-10"></div>
            <div className="skeleton h-4 w-32"></div>

            <div className='flex gap-2 mt-5'>
                <div className="skeleton h-4 w-14"></div>
                <div className="skeleton h-4 w-14"></div>
            </div>

            <div className='skeleton h-32 mt-2'></div>
        </div>
    )
}
export default LoadingSkeletonCard
