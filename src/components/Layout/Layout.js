import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import logoImg from "../../assets/demo-logo.png"
import SearchInput from '../SearchInput/SearchInput'
import styles from "./Layout.module.css"

const Layout = () => {
  return (
    <div className={styles.container}>

      <nav className={"navbar navbar-light justify-content-around pt-3 " + styles.nav}>
        <a href='/' className="navbar-brand">
          <img src={logoImg} width="140" alt="moviestan logo" />
        </a>

        <SearchInput />
      </nav>

        <Outlet />
    </div>
  )
}

export default Layout