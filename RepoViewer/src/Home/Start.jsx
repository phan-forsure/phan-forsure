import React from 'react'
import { Link } from 'react-router-dom'

export default function Start() {
  return (
    <section className='get-started comp'>
        <div className="text">
            <h2>Awesome Isn't it? Get Started Now</h2>
            <p>Explore More About Our Application, <Link to={`/Fetch`}>Try it Out</Link> Right away</p>
        </div>
        <button>
            <Link to={`/Fetch`}>Use The Application On The Web</Link>
        </button>
    </section>
  )
}
