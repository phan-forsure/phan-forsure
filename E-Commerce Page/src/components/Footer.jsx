import React from 'react';

const Info = () => {
    let links = ['Subscription', 'Products', 'About', 'Details', 'Cart']

    return (
        <div className='column'>
            <h3>تفاصيل</h3>
            <ul className='footer-links'>
                {links.map(e => <li key={e}><p>{e}</p></li>)}
            </ul> 
        </div>
    )
}
const Contact = () => {
    let links = ['Contact', 'Email', 'Sign up', 'Login']

    return (
        <div className='column'>
            <h3>تواصل معنا</h3>
            <ul className='footer-links'>
                {links.map(e => <li key={e}><p>{e}</p></li>)}
            </ul> 
        </div>
    )
}
const Socials = () => {
    let links = ['Facebook', 'Twitter', 'Linkedin']

    return (
        <div className='column'>
            <h3>صفحاتنا</h3>
            <ul className='footer-links'>
                {links.map(e => <li key={e}><p>{e}</p></li>)}
            </ul> 
        </div>
    )
}

const Footer = () => {
    return (
        <footer className='comp'>
            <Info />
            <Contact />
            <Socials />
            <div className="text">
                <h2>Copyright 2024</h2>
                <p>تحيات دلع كرشك للمأكولات و الملوخيه</p>
            </div>
        </footer>
    ) 
}

export default Footer