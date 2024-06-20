import React, { useState } from 'react'

export default function Form() {
    const [sent, setSent] = useState(false)
    
  return (
    <section className='contact-form comp'>
      <form action="" id=''>
        <h3>Send Us an Email</h3>
        <input type="text" id='name-input' placeholder='Name'/>
        <input type="email" id='email-input' placeholder='Email'/>
        <textarea name="" id="" placeholder='Message content...'></textarea>
        <input type="submit" value='Send Message' onClick={(e) => {
            e.preventDefault()
            setSent(!sent)
        }}/>
      </form>
      {sent ? 
        <div className='notify'>
            <h2>Message Sent</h2>
            <button onClick={() => setSent(!sent)}>
                <p>Close</p>
            </button>
        </div>
        : null}
    </section>
  )
}
