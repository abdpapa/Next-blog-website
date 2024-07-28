import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "./NavLinks.module.css"
import Link from 'next/link'

const NavLinks = ({item}) => {
   const path=usePathname()
   
  return (
      <div className={`${item.path===path? styles.active:""}`}>
      <Link href={item.path} >{item.title}</Link>
      </div>
  )
}
export default NavLinks
