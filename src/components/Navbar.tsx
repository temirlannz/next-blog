import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="flex-1">
                    <Link href='/'>
                        Blog
                    </Link>
                </div>
                <div className="flex-none">
                    <Link href='/create' className='hover:underline'>
                        Create post
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar
