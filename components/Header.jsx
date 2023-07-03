import Link from "next/link";
import Image from 'next/image'
import Logo from '../images/logo.png'
import React from 'react'
import headerStyle from '../styles/header.module.css'

const Header = () => {
  return (
    <nav className={headerStyle.navbar}>
        <div className={headerStyle.imageNav}>
            <Link href='/'> <Image src={Logo} alt="logo"/> </Link>
        </div>
        <div className={headerStyle.contentNav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/search">Search</Link>
                </li>
                <li>
                    <Link href="/search">About us</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header
