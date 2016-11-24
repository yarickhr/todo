import React from 'react'

const Header = ({ text, head }) => (
    <div>
        <span>{ head }</span>
        <div> { text } </div>
    </div>
    )

export default Header