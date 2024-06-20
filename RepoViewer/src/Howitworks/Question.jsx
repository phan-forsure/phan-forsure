import React from 'react'

export default function Question() {
  return (
    <section className='faq comp'>
      <h2>How Does Our Application Work?</h2>
      <div className="text">
        <p>
        The integration with GitHub's REST API allows direct communication with GitHub’s
        servers to request specific data quickly. When a user requests information like repositories
        or commits, the website generates an optimized API request, utilizing authenticated requests
        to bypass rate limits and ensure fast responses. The request is processed rapidly by GitHub's
        infrastructure, with data typically retrieved within milliseconds to a few seconds. Upon
        retrieval, the data is parsed and displayed promptly on the website.
        </p>
      </div>
      <h2>Is Using Our Application Safe?</h2>
      <div className="text">
        <p>
        The process of fetching data from GitHub for your website is built with robust safety
        measures to ensure the security and integrity of the data. All API requests are encrypted
        using HTTPS, protecting the data from interception and tampering during transmission.
        Authentication tokens are securely stored and used to authenticate requests, preventing
        unauthorized access. Rate limiting is also in place to protect against abuse and potential 
        denial-of-service attacks. Additionally, GitHub implements strict access controls and monitoring
        to detect and respond to suspicious activity promptly. Data retrieved is validated and sanitized 
        before being displayed to prevent any injection attacks or manipulation. These comprehensive safety 
        measures ensure that the process of fetching GitHub data is not only fast but also secure, maintaining 
        the highest standards of data protection and user trust.
        </p>
      </div>
    </section>
  )
}
