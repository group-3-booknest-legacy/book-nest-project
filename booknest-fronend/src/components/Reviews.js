import React, {useState} from 'react'
import ReviewsList from "./ReviewsList"

function Reviews() {
    return (
        <div className = "pageContainer">
            <h1 className = "pageHeader drk-blue">This is the Reviews page</h1>
            <ReviewsList/>
            
        </div>
    )
}

export default Reviews;