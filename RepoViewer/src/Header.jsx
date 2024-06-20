import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"


const links = ['Fetch', 'Contact', 'FAQ']

const Links = () => {
    const { pathname } = useLocation()
    const [active, setActive] = useState('')

    useEffect(() => {
        setActive('active')
    }, [active])

    return links.map((link) => <li onClick={() => setActive('')} key={link} 
    className={pathname.slice(1) === link.replace(/\s+/g, '') ?
    active : ''}><Link to={`/${link.replace(/\s+/g, '')}`}>{link}</Link></li>)
}


const Header = ({ logo, theme, method }) => {
    const [opacity, setOpacity] = useState(window.scrollY <= 30 ? 1 : 0.3)

    window.onscroll = () => {
        if (window.scrollY <= 30) {
            setOpacity(1)
        } else {
            setOpacity(0.3)
        }
    }

    return (
        <header style={{ opacity: opacity, }}>
            <h2><Link to={`/Home`}>{logo}</Link></h2>
            <Link to={`/Home`}><i className="fa-solid fa-home"></i></Link>
            <div className="nav">
                <ul>
                    <Links />
                </ul>
                <i onClick={method} className={`fa-solid fa-${theme ? "moon" : 'sun'}`}></i>
            </div>
        </header>
    )
}

export default Header