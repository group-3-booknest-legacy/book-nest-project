import React, {useState, useEffect} from 'react'

function ReviewList() {
  const [review, setReview] = useState([{
    title: '', 
    content: ''
  }])

  useEffect(()=> {
    fetch("http://localhost:5000/review")
    .then(res =>  res.json())
    .then(jsonRes => setReview(jsonRes))
    
    },[])
 
  return (
    <div  className = "pageContainer">
      <h1 className = "pageHeader drk-blue">This is the Reviews page</h1>
      <h2> 
      
     {review.map(review => 
      <div >
      <h4>{review.title}</h4>
      <h6>{review.content}</h6>
      </div>)}
      </h2>
    </div>

  )
}

export default ReviewList