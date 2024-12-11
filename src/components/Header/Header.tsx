import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from './header.module.css'

export default function Header (){
  return(
    <div className={`  ${styles.header}`}>
      <div className="px-3 flex items-center justify-between ">
          <Link className="navbar-brand" href="/">
            <Image width="200" height="100" className="" src="/assets/images/headers/logo-img.webp" alt="logo" />
          </Link>
          <div className="">

          </div>
      </div>
    </div>
  )
}