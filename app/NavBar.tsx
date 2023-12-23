import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";


const titleStyles = 'text-zinc-500 hover:text-zinc-800 transition-colors'

const NavBar = () => {
  return (
    <nav className='flex flex-row gap-4 border-b mb-5 px-20 h-12 items-center'>
        <Link href='/'><FaBug /></Link>
        <ul className='flex flex-row gap-5'>
            <li>
                <Link href='/' className={titleStyles}>Dashboard</Link>      
            </li>
            <li>
                <Link href='issues' className={titleStyles}>Issues</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar