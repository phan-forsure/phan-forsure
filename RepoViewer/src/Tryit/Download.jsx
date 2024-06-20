import React from 'react'

export default function Download({ data }) {
  const fileName = "repositories.txt";

const fileContent = data ? `Owner: ${data[0].owner.login}` + data.map(e => {
return `
----------------------------------------------------------------------
\n Repository Name: ${e.name} \n
Id: ${e.id} \n
Archieved: ${e.archived ? 'Yes' : 'No'} \n
Clone Url: ${e.clone_url} \n
Fork: ${e.fork ? 'Enabled' : 'Disabled'} \n
Fork Count: ${e.forks} \n
Used Langauge: ${e.language ? e.language : 'No Language'} \n
Privacy: ${e.visibility} \n
Watchers Count: ${e.watchers} \n
Created Date: ${e.created_at} \n
Last Updated Date: ${e.updated_at} \n
Topics: ${e.topics.length !== 0 ? e.topics.map(t => t + ' ') : 'No Topics'} \n
Branches Url: ${e.branches_url} \n
Comments Url: ${e.comments_url} \n
Commits Url: ${e.commits_url} \n
Collaborators Url: ${e.collaborators_url} \n
Contents Url: ${e.contents_url} \n
Downloads Url: ${e.downloads_url} \n
Deployments Url: ${e.deployments_url} \n
Description: ${e.description ? e.description : 'No Description'} \n
Default Branch: ${e.default_branch} \n
Has Projects: ${e.has_projects ? 'Yes' : 'No'} \n
Has Issues: ${e.has_issues ? 'Yes' : 'No'} \n
Has Wiki: ${e.has_wiki ? 'Yes' : 'No'} \n
Has Donwloads: ${e.has_downloads ? 'Yes' : 'No'} \n
Node id: ${e.node_id} \n
----------------------------------------------------------------------`

  }) : 'This is an Error message, The username was either wrong or there was no data fetched';

  let myFile = new Blob([fileContent], {type: 'text/plain'});

  return (
    <div className='download'>
      <button className='download-file'>
        <a href={window.URL.createObjectURL(myFile)} download={fileName}>Download Data as File</a>  
      </button>
    </div>
  )
}
