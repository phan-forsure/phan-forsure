import React, { createContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home/Home'
import Footer from './Footer'
import Try from './Tryit/Try'
import Contact from './Contact/contact'
import Wiki from './Howitworks/Wiki'

export const themeContext = createContext()

export default function App() {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    const sessionTheme = JSON.parse(sessionStorage.getItem('theme'))
    setTheme(sessionTheme)
  }, [])

  useEffect(() => {
    sessionStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])
  
  function handleClick() {
    setTheme(!theme)
  }
    
  return (
    <div className='app' theme={theme ? 'dark-mode' : 'none'}>
      <themeContext.Provider value={theme}>
        <Header logo={'RepoViewer'} theme={theme} method={handleClick}/>
        <Routes>
          {['Home', ''].map((path) => <Route exact key={path} path={path} element={<Home />} />)}
          <Route exact path='/Fetch' element={<Try />}/>
          <Route exact path='/Contact' element={<Contact />}/>
          <Route exact path='/FAQ' element={<Wiki />}/>
        </Routes>
        <Footer />
      </themeContext.Provider>
    </div>
  )
}
