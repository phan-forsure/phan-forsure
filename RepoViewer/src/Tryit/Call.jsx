import React, { useEffect, useRef, useState } from 'react'
import Download from './Download'

function Data({ data, wait, error }) {
    const [expand, setExpand] = useState(true)

    function handleClick() {
        setExpand(!expand)
    }

    return (
        <>
            <div className="wrapper">
                <button className='expand' onClick={handleClick}>{expand ? <i className='fa-solid fa-chevron-up'></i> : <i className='fa-solid fa-chevron-down'></i>}</button>
            </div>
            <div className={`data-unit ${expand ? 'expanded' : 'shrunk'}`} >
                {wait ? <span className='spinner'></span> : error ? <p>Username is not found</p> : data ?
                    data.map((e) => {
                        return (
                            <div className='data' key={e.name}>
                                <h2>Repository Name: {e.name}</h2>
                                <p>Id: {e.id}</p>
                                <p>Archieved: {e.archived ? 'Yes' : 'No'}</p>
                                <p>Clone Url: {e.clone_url}</p>
                                <p>Fork: {e.fork ? 'Enabled' : 'Disabled'}</p>
                                <p>Fork Count: {e.forks}</p>
                                <p>Used Langauge: {e.language ? e.language : 'No Language'}</p>
                                <p>Privacy: {e.visibility}</p>
                                <p>Watchers Count: {e.watchers}</p>
                                <p>Created Date: {e.created_at}</p>
                                <p>Last Updated Date: {e.updated_at}</p>
                                <p>Topics: {e.topics.length !== 0 ? e.topics.map(t => <li key={t}>{t}</li>) : 'No Topics'}</p>
                                <p>Branches Url: {e.branches_url}</p>
                                <p>Comments Url: {e.comments_url}</p>
                                <p>Commits Url: {e.commits_url}</p>
                                <p>Collaborators Url: {e.collaborators_url}</p>
                                <p>Contents Url: {e.contents_url}</p>
                                <p>Downloads Url: {e.downloads_url}</p>
                                <p>Deployments Url: {e.deployments_url}</p>
                                <p>Description: {e.description ? e.description : 'No Description'}</p>
                                <p>Default Branch: {e.default_branch}</p>
                                <p>Has Projects: {e.has_projects ? 'Yes' : 'No'}</p>
                                <p>Has Issues: {e.has_issues ? 'Yes' : 'No'}</p>
                                <p>Has Wiki: {e.has_wiki ? 'Yes' : 'No'}</p>
                                <p>Has Donwloads: {e.has_downloads ? 'Yes' : 'No'}</p>
                                <p>Node id: {e.node_id}</p>
                            </div>
                        )
                    })
                : <p className='no-data'>No Data</p>}
            </div>
        </>
    )
}

export default function Call() {
    const [error, setError] = useState(false)
    const [wait, setWait] = useState(false)
    const [data, setData] = useState(null)
    const userRef = useRef(null)

    useEffect(() => {
        if (sessionStorage.getItem('repo data')) {
            setData(JSON.parse(sessionStorage.getItem('repo data')))
        }
    }, [])

    function fetchRepos() {
        fetch(`https://api.github.com/users/${userRef.current.value}/repos`)
        .then(res => {
            if (!res.ok) {
                setError(true)
            } else {
                return res.json()
            }
        })
        .then(res => {
            setWait(false)
            if (res !== undefined) {
                window.sessionStorage.setItem('repo data', JSON.stringify(res))
                setData(res)
            }
        })
        .catch(err => setError(true))
        userRef.current.value = ''
    }

    function handleClick() {
        if (userRef.current.value === '') {
            return;
        } 
        
        setError(false)
        setWait(true)
        fetchRepos()
    }

    return ( 
        <section className='call-api comp'>
        <form id='' onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder='Username' ref={userRef}/>
            <button type='submit' onClick={handleClick}>
                <p>View</p>
            </button>
        </form>
        <Data data={data} wait={wait} error={error}/>
        <Download data={data} />
        <div className="wrapper">
            <button className='clear' onClick={() => {
                setData(null)
                sessionStorage.removeItem('repo data')
            }}>
                    <p>Clear</p>
            </button>
        </div>
        </section>
    )
}