import React from 'react'

export  function PlaceHolders() {
  return (
    <div><div className="card" aria-hidden="true">
    <div className="card-body">
      <h5 className="card-title placeholder-glow">
        <span className="placeholder col-6" />
      </h5>
      <p className="card-text placeholder-glow">
        <span className="placeholder col-7" />
        <span className="placeholder col-4" />
        <span className="placeholder col-4" />
        <span className="placeholder col-6" />
        <span className="placeholder col-8" />
      </p>
      
    </div>
  </div>
  </div>
  )
}

export  function PlaceHoldersParagraphs() {
    return (
      <div className=" w-100">
        <div className="card w-100" aria-hidden="true">
      <div className="card-body">
        <h5 className="card-title placeholder">
          <span className="placeholder col-6" />
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7" />
          <span className="placeholder col-4" />
          <span className="placeholder col-4" />
          <span className="placeholder col-6" />
          <span className="placeholder col-8" />
        </p>
        <span
          className="btn btn-danger disabled placeholder col-6"
        />
      </div>
    </div>
    </div>
    )
  }
  