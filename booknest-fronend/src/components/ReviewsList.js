import React, {useState, useEffect} from 'react'
import axios from 'axios'

function ReviewList() {
  const [reviews, setReview] = useState([])

  useEffect(()=> {
    axios.get("http://localhost:5000/")
    .then(({data})=>{
        setReview(data)
    
    })
  })
 
  return (
    <div > 
      
     {reviews.map(e => 
      <div >
      <h4 key={e._id}>{e.title}</h4>
      <h6 key={e._id}>{e.review}</h6>
      </div>)}
      
    </div>

  )
}

export default ReviewList