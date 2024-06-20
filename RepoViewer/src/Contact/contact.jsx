import React from 'react'
import Scroll from '../Scroll'
import Form from './Form'

function Heading() {
    return (
      <section className='heading comp'>
          <h1>Contact Us For Questions & Issues</h1>
          <div className="text">
            <p>We would are looking forward to your questions</p>
            <p>And try to answer them as soon as possible</p>
          </div>
      </section>
    )
}

export default function Contact() {
  return (
    <>
      <Scroll />
      <Heading />
      <Form />
    </>
  )
}
