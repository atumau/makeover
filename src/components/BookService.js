import React from 'react'
import {Link} from "react-router-dom"

const BookService = () => {
  return (
    <>
        <div className="card mt-4 border border-gray-300 shadow hover:border-blue-500 container" style={{ width: "30rem" }}>
        <img src="service.png" className="card-img-top mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">Namaste...</h5>
          <p className="card-text text-center">
            Feel Free To Book Our Services
          </p>
          <Link to="/login" className="btn btn-primary d-grid gap-2 col-6 mx-auto mb-3">
            Fill The Booking Form
          </Link>
        </div>
      </div>
      <div className="text mt-3">
      <h3 className="text-center">Thank you for choosing our makeup service!</h3>
      <h6 className="text-center"> We're thrilled to have been a part of your special day and can't wait to make you look even more fabulous in the future. Welcome to our beauty family!</h6><br/>
      <h6 className="text-center">Thank You!</h6>
      </div>
    </>
  )
}

export default BookService