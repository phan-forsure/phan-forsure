import React from 'react'
import Call from './Call'
import Scroll from '../Scroll'

function Heading() {
  return (
    <section className="heading comp">
      <h1>
        Enter the username to show the repositories related to that user
      </h1>
    </section>
  )
}

export default function Try() {
  return (
    <>
      <Scroll />
      <Heading />
      <Call />
    </>
  )
}
