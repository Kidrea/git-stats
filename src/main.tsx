import React from 'react'
import ReactDOM from 'react-dom/client'
import GitHubUser from './components/GitHubUser.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <GitHubUser />
    </React.StrictMode>
)
