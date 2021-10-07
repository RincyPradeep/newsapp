import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div>
            <h1>Please choose any news from home page</h1>
            <Link to='/'>Go to home page</Link>
        </div>
    )
}

export default PageNotFound
