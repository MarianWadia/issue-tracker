"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa";



const NavBar = () => {
    const pathname = usePathname()
    const links = [
        {
            href: '/',
            label: 'Dashboard'
        },
        {
            href: '/issues',
            label: 'Issues'
        }
    ]
    const titleStyles = 'text-zinc-500 hover:text-zinc-800 transition-colors'
  return (
    <nav className='flex flex-row gap-4 border-b mb-5 px-20 h-12 items-center'>
        <Link href='/'><FaBug /></Link>
        <ul className='flex flex-row gap-5'>
            {links.map((link, i) => (
                <li key={i}>
                    <Link href={link.href} className={pathname === link.href? 'text-zinc-900' : titleStyles}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar