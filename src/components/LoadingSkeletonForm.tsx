import React from 'react'

const LoadingSkeletonForm = () => {
    return (
        <div className='mt-10'>
            <div className="skeleton h-6 w-20"></div>

            <div className='flex flex-col items-center gap-2'>
                <div className="skeleton h-12 w-full max-w-lg"></div>
                <div className="skeleton h-20 w-full max-w-lg"></div>
                <div className="skeleton h-12 w-full max-w-lg"></div>
                <div className="skeleton h-12 w-full max-w-lg"></div>
            </div>
        </div>
    )
}
export default LoadingSkeletonForm
