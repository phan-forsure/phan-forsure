import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className='hero comp'>
        <div className="content">
            <div className="text">
                <h1>Get All The Info About Your <span>Repository</span></h1>
                <p>Browse All Your Github Repositories</p> 
                <p>Fast & Real-Time Updated</p>
            </div>
            <button>
              <Link to={`/Fetch`}>Try it Out</Link>
            </button>
        </div>
    </section>
  )
}
