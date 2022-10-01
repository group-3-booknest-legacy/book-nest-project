import React from 'react'
import BookCheckoutForm from './BookCheckoutForm';
import "../css/Pages.css"

function Home() {
    return (
        <div className = "pageContainer">
            <h1 className = "pageHeader lt-blue">Order a Book</h1>
            <BookCheckoutForm />
        </div>
    )
}

export default Home;