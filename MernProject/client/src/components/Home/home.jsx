import React from 'react'

function home() {

    const location=useLocation()
  return (
    <>
      <div className="homepage">
        <h1>Hello{location.state.id}</h1>
         
      </div>
    </>
  )
}

export default home
