import React, {useState} from 'react';
import axios from 'axios';

function BookCheckoutForm(props) {

// function to handle the input text. Sets the input to the value of the string typed
let [input, setInput] =useState({
    title: "",
    author: "",
    genre: "",
})

// const instance = axios.create();

function handleChange(event){
    const {name, value} = event.target;

    setInput(prevInput => {
        return {
            ...prevInput,
            [name]: value,
        }
    })
}

function handleClick(event){
    event.preventDefault();
    const newBook ={
        title: input.title,
        author: input.author
    }
    axios.post("http://localhost:5000/add", newBook)
    .then((res)=> {
        console.log(newBook)
        res.send({newBook})
          })
      .catch(err => {
        console.log(err)
      })
    }




    return (
        <div className = 'container'>
             <br></br>
          <h2>Checkout A Book</h2> 
          <br></br>
          <form>
            <div className = 'form-group'>
                <input 
                name='title'
                value ={input.title}
                onChange={handleChange}
                className = 'form-control' placeholder='Book Title Here'></input>
            </div>
            <br></br>
            <div className = 'form-group'>
                <input 
                name = 'author'
                value ={input.author}
                onChange={handleChange}
                 className = 'form-control' placeholder="Author's name here"></input>
            </div>
            <br></br>
            <div className = 'form-group'>
                <input 
                name = 'genre'
                value ={input.genre}
                onChange={handleChange}
                 className = 'form-control' placeholder="Book Category here"></input>
            </div>
            <br></br>
            <button 
            onClick = {handleClick}
            className = 'btn btn-lg btn-info'>Add Book</button>
            </form> 
        </div>
    )
}

export default BookCheckoutForm
