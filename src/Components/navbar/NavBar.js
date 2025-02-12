"use client"
import Link from 'next/link';
import React, { useContext } from 'react'
import styles from './navbar.module.css'
import Darkmode from '../../app/darkmode/Darkmode';
import { AuthContext } from '@/app/context/AuthContext';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton
} from '@clerk/nextjs'

export default function NavBar() {


  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },

    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  const { token ,handleLogout} = useContext(AuthContext)


  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        QuillCraft
      </Link>

      <div className={styles.links}>
        <Darkmode />
        {links.map((link) => (

          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}

        {/* {
          token ? (
            <button className={styles.logout} 
            onClick={() => {
              console.log("click");
              handleLogout()
            }} >
            Logout
          </button>
          ) :
            (
              <div>

                <Link href='/signin'>
                  <button className={styles.login} >
                    Sing in
                  </button>
                </Link>
                <Link href='/signup'>
                  <button className={styles.login} >
                    Sing up
                  </button>
                </Link>
              </div>
            )
        } */}
           
           <SignedOut>
              <SignInButton className={styles.login} />
              <SignUpButton className={styles.login} />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

      
      </div>
    </div>
  )
}
