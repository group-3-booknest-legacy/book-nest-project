import React, {useState} from 'react'
import axios from 'axios';
import "../css/MybooksCard.css"

function MybooksList() {
    const [books, setBooks] = useState([{
        title: "",
        author: "",
        genre: "",
    }])



    axios.get("http://local:4000/mybooks/")
    .then((res)=> {
        console.log(books)
        res.send({books})
          })
      .catch(err => {
        console.log(err)
      })
      .then(jsonRes => setBooks(jsonRes))   



    return (
        <div className = "container">
            <h1> My Books</h1>
            <>
            {/* {books.map(book =>  
            <div>          
                <h4>{book.title}</h4>
                <h4>{book.author}</h4>
                <h4>{book.genre}</h4>
                </div>
                )} */}
            </>
        </div>
       
    )
}

export default MybooksList

