import React from 'react'
import "../css/EditorsChoiceCard.css"

function EditorsChoiceCard() {
    return (
        <div className = "cardContainer">
            <div className = "card">
            <div className='bookCover'>
                <p>Book Cover Image</p>
            </div>
            <div className='titleContainer'>
                <h4 className = 'title'>React for Dummies</h4>
            </div>
            <div className = "bookInfo">
                <h5 className = "author"><strong>Author:</strong> John, Doe</h5>
                <h5 className = "genre"><strong>Genre:</strong> Educational</h5>
            </div>
            <button className = "addBookBtn">ADD TO MY BOOKS</button> 
            </div>  

            <div className = "card">
            <div className='bookCover'>
                <p>Book Cover Image</p>
            </div>
            <div className='titleContainer'>
                <h4 className = 'title'>1984</h4>
            </div>
            <div className = "bookInfo">
                <h5 className = "author"><strong>Author:</strong> George Orwell</h5>
                <h5 className = "genre"><strong>Genre:</strong> Science Fiction</h5>
            </div>
            <button className = "addBookBtn">ADD TO MY BOOKS</button> 
            </div>  

            <div className = "card">
            <div className='bookCover'>
                <p>Book Cover Image</p>
            </div>
            <div className='titleContainer'>
                <h4 className = 'title'>Steve Jobs</h4>
            </div>
            <div className = "bookInfo">
                <h5 className = "author"><strong>Author:</strong> Walter Isaacson</h5>
                <h5 className = "genre"><strong>Genre:</strong> Biography</h5>
            </div>
            <button className = "addBookBtn">ADD TO MY BOOKS</button> 
            </div>  
        </div>
    )
}

export default EditorsChoiceCard
