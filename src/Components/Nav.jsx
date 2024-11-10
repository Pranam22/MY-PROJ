import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/about"><li>ABOUT</li></Link>
        <Link to="/career"><li>CAREER</li></Link>
        <Link to="/help"><li>HELP</li></Link>
    </div>
  )
}

export default Nav