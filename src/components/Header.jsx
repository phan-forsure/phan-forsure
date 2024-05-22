import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";

const links = ['Home', 'Cart', 'Products', 'Login']

const Links = () => {
    const { pathname } = useLocation()
    const [active, setActive] = useState('')

    useEffect(() => {
        setActive('active')
    }, [active])

    return links.map((link) => <li onClick={() => setActive('')} key={link}><Link
    className={pathname.slice(14) === link
    ? active : ''} to={`/phan-forsure/${link}`}>{link}</Link></li>)
}

const Header = ({ logo }) => {
        return (
            <header className='comp'>
                <span className='logo'>{logo}</span>
                <ul>
                    <Links />
                </ul>
            </header>
        )
}

export default Header