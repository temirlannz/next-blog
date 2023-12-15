import React from 'react'

const Footer = () => {
    return (
        <footer className='absolute bottom-0 w-full flex flex-col items-center p-2'>
            <div className="divider w-full m-0"></div>
            <div className="container flex justify-between m-0 p-0">
                <span className='text-zinc-300'>Made with ❤️‍🔥 by Temirlan.</span>
                <a href='https://github.com/temirlannz' className='text-zinc-300' target='_blank'>Github</a>
            </div>
        </footer>
    )
}
export default Footer
