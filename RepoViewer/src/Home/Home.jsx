import React from 'react'
import Hero from './Hero'
import About from './About'
import Graph from './Graph'
import Showcase from './Showcase'
import Start from './Start'
import Scroll from '../Scroll'

export default function Home() {
  return (
    <>
      <Scroll />
      <Hero />
      <About />
      <Graph />
      <Showcase />
      <Start />
    </>
  )
}
