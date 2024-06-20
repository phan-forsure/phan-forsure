import React, { useContext, useEffect, useRef } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { themeContext } from '../App';

export default function Showcase() {
  const theme = useContext(themeContext)

  const jsonCode = `
  "id": 172581071,
  "node_id": "MDEwOlJlcG9zaXRvcnkxNzI1ODEwNzE=",
  "name": ".github",
  "full_name": "facebook/.github",
  "private": false,
  "owner": {
    "login": "facebook",
    "id": 69631,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
    "avatar_url": "https://avatars.githubusercontent.com/u/69631?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/facebook",
    "html_url": "https://github.com/facebook",
    "followers_url": "https://api.github.com/users/facebook/followers",
    "following_url": "https://api.github.com/users/facebook/following",
    "gists_url": "https://api.github.com/users/facebook/gists",
    "starred_url": "https://api.github.com/users/facebook/starred",
    "subscriptions_url": "https://api.github.com/users/facebook/subscriptions",
    "organizations_url": "https://api.github.com/users/facebook/orgs",
    "repos_url": "https://api.github.com/users/facebook/repos",
    "events_url": "https://api.github.com/users/facebook/events",
      "received_events_url": "https://api.github.com/users/facebook/received_events",
      "type": "Organization",
      "site_admin": false
    }
    `;
  
  return (
    <section className='showcase comp'>
        <div className="content">
          <div className="wrapper-one">
            <div className="text-wrapper">
              <p>Fast Responses & No Latency</p>
              <i className='fa-solid fa-bolt'></i>
            </div>
              <SyntaxHighlighter language='json' style={theme ? atomOneDark : atomOneLight}>
                {jsonCode}
              </SyntaxHighlighter>
            </div>
          <div className="wrapper-two">
            <div className="text-wrapper">
              <p>Download Data To Your Device</p>
              <i className='fa-solid fa-file'></i>
            </div>
          </div>
      </div>
    </section>
  )
}
