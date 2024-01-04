import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='content-wrapper not-found'>
        <h1>404</h1>
        <h2>Sorry, the page was not found :(</h2>
        <p>Go back to <Link to = '/'>home page</Link></p>    </div>
  )
}

export default NotFound
