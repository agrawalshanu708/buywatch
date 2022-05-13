import React from 'react'
import {Link} from "react-router-dom"
const Error404 = () => {
  return (
    <div style = {{width: '50%',margin:'auto', display:'flex',flexDirection: 'column', 
    gap: '1rem', alignItems: 'center', marginTop:"7rem"
    }}>
    <h1>Opps! Page Not Found</h1>
    <p style = {{textAlign: 'center'}}>You must have picked the wrong door because I haven't been able to lay my eye on the page you've been searching for.</p>
   <Link to = "/"><button className="btn">Back TO Home</button></Link> 

   </div>
  )
}

export {Error404}