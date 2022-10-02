import React, {useState} from 'react'
import MyBooksList from './MybooksList';


function MyBooks() {
    return (
        <div className = "pageContainer">
            <h1 className = "pageHeader violet">User's Book List</h1>
            <MyBooksList/>
        </div>
    )
}

export default MyBooks;