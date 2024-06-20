import React from 'react'

export default function About() {
  return (
    <section className='about comp'>
      <div className="text">
        <h2 className='heading'>How it Works</h2>
        <p>Our website utilizes the GitHub API, a robust interface for accessing information about repositories, commits, issues, and more. When a user submits a request, our backend server authenticates the API call to ensure security and compliance with GitHub's rate limits. The server then sends a precise query to the GitHub API, which promptly retrieves the requested data. This information, often JSON-formatted, is parsed and processed by our system to extract relevant details and present them in a user-friendly format.</p>
      </div>
    </section>
  )
}
