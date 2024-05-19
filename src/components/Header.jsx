import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const links = ['Home', 'Cart', 'Products', 'Login']

const Links = () => {
    const [active, setActive] = useState('')

    useEffect(() => {
        setActive('active')
    }, [active])

    return links.map((link) => <li onClick={() => setActive('')} key={link}><Link
    className={window.location.pathname.slice(1) === link
    ? active : ''} to={`${link}`}>{link}</Link></li>)
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