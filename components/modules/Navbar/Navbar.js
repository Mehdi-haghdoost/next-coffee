import React, { useEffect, useState } from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



function Navbar() {

  const [search, setSearch] = useState('')

  const route = useRouter()

  useEffect(() => {
    setSearch(route.query.q)
    setSearch('')
  }, [])


  function searchHandlerWithIcon() {
    if (search.trim()) {
      route.push(`/search?q=${search}`)
      setSearch('')
    }
  }

  function searchHandlerWithEnter(event) {
    if (event.keyCode === 13) {
      searchHandlerWithIcon()
    }
  }

  return (
    <div class={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        class={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <div className="d-flex align-items-center position-relative">
          <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
            <h1 className="m-0 display-4 text-uppercase text-white">
              Next-Coffee
            </h1>
          </Link>

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            onKeyDown={searchHandlerWithEnter}
            className={styles.search_input}
            placeholder="Search..."
          />
          <FontAwesomeIcon
            onClick={searchHandlerWithIcon}
            className={styles.search_icon}
            icon={faSearch}
          />
        </div>

        <button
          type="button"
          class={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          class={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div class={`${styles.navbar_nav} ml-auto p-4`}>

            <Link href='/' class={`${styles.nav_link} ${route.pathname == '/' ? `${styles.active_nav_link}` : ''} `}>
              Home
            </Link>
            <Link href='/about' class={`${styles.nav_link} ${route.pathname == '/about' ? `${styles.active_nav_link}` : ''} `}>
              About
            </Link>
            <Link href="/services" class={`${styles.nav_link} ${route.pathname == '/services' ? `${styles.active_nav_link}` : ''} `}>
              Service
            </Link>
            <Link href="/menu" class={`${styles.nav_link} ${route.pathname == '/menu' ? `${styles.active_nav_link}` : ''} `}>
              Menu
            </Link>
            <div class={`${styles.dropdown}`}>
              <a
                href="#"
                class={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div class={`${styles.dropdown_menu} ${styles.text_capitalize}`}>
                <Link href='/reservation' class={`${styles.dropdown_item}`}>
                  Reservation
                </Link>
                <Link href='/testimonial' class={`${styles.dropdown_item}`}>
                  Testimonial
                </Link>
              </div>
            </div>
            <Link href="/contact" class={`${styles.nav_link} ${route.pathname == '/contact' ? `${styles.active_nav_link}` : ''} `}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar