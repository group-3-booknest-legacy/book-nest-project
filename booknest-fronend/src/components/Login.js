import React from 'react'
import SignUp from './SignUp';
import "../css/Pages.css"

function Login() {
    return (
        <div className = "pageContainer">
            <h1 className = "pageHeader lt-blue">Record User</h1>
            <SignUp/> 
        </div>
    )
}

export default Login;