import React, {useState} from 'react'
import axios from "axios"
import '../css/Review.css'
import "../css/App.css"

function ReviewCardReview() {
   const [input, setInput] = useState({
    title: "", 
    content: ""
   })
  

  function handleChange(event){
    const {name, value} = event.target; 

    setInput(prevInput => {
      return {
        ...prevInput, 
        [name]: value,
      }
    })
  }
  function handleClick(event) {
    event.preventDefault(); 
    const newReview = {
      title:input.title, 
      content: input.content
    }
    axios.post("http://localhost:5000/review/add", newReview)
    .then((res)=> {
      console.log(newReview)
      res.send({newReview})
        })
    .catch(err => {
      console.log(err)
    })
  }



  return (
    <div className = 'container'>

      <form>
        <div className = 'form-group'>
        <input 
        className = 'form-control' 
        type="text" 
        placeholder="book title" 
        onChange={handleChange} 
        name="title" 
        value={input.title}/>
        </div>

        <br></br>

        <div className = 'form-group'>
        <textarea 
        className = 'form-control' 
        name="content" 
        cols="50" 
        rows="10" 
        onChange={handleChange} 
        placeholder="write your review" 
        value={input.content}>
        </textarea>
        </div>

        <br></br>

        <button className = 'btn btn-lg btn-info'
        onClick={handleClick}>SUBMIT</button>
      
      </form>

    </div>
  )
}

export default ReviewCardReview