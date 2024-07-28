"use client"
import React, { useState,useEffect } from 'react'
import styles from './Links.module.css'
import Link from 'next/link'
import NavLinks from '../NavLinks/NavLinks.jsx'
import image from '../../../../public/mobilenav.png'
import { logout } from '@/lib/action'
const Links = ({session}) => {
    const links = [
        {
          title: "Homepage",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        },
        {
          title: "Contact",
          path: "/contact",
        },
        {
          title: "Blog",
          path: "/blog",
        },
      ];
     // const session=true;
    //  const isAdmin=true;
      const [clicked,setClicked]=useState(false)

      useEffect(() => {
        // Your side effect logic here
    
        // Optional cleanup function
           setClicked(false);
      }, []);
    const handleClick=()=>{
        // console.log("hi");
      
        
        setClicked(prev => !prev)
    }
  return (
     <>
     {/* <button onClick={handleClick} className={clicked? styles.nonemobile:styles.mobile}>
     <img src='/mobilenav.png'/>
     </button>
     
     {
    clicked && (
    <div className={styles.menu}>
      <button onClick={handleClick} className={styles.mobile}>
      <img src='/mobilenav.png'/>
      </button>
        <div className={styles.mobileLinks}>
        {links.map((link)=>{
     return  <NavLinks item={link} key={link.title}/>
    //<Link href={link.path} key={Link.title}>{link.title}</Link>
      
     })}
     {session? (
        <>{isAdmin&& <NavLinks item={{title:"Admin", path:"/admin"}} />}<button className={styles.button}>Logout</button></>):(
         <NavLinks item={{title:"Login", path:"/login"}} />
        )}
        </div>
    
    </div>
     )
    } */}
    <div className={styles.container}>
    <div className={styles.Links}>
     {links.map((link)=>{
    return  <NavLinks item={link} key={link.title}/>
      
     })}
     {session?.user ?(
        <>{session.user?.isAdmin&& <NavLinks item={{title:"Admin", path:"/admin"}} />} <form action={logout}><button className={styles.button}>Logout</button></form></>):(
         <NavLinks item={{title:"Login", path:"/login"}} />
        )}
    </div>
    <button onClick={handleClick} className={styles.mobile}>
     <img src='/mobilenav.png'/>
    </button>
    {clicked && (
    <div className={styles.mobileLinks}>
        {links.map((link)=>{
     return  <NavLinks item={link} key={link.title}/>
    //<Link href={link.path} key={Link.title}>{link.title}</Link>
      
     })}
     {session?.user? (
        <>
        <button className={styles.button}>Logout</button></>):(
         <NavLinks item={{title:"Login", path:"/login"}} />
        )}
        </div>
    )}
      
    </div>
    
    </>
    
  )
  
}
export default Links
