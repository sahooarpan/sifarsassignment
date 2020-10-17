import React from 'react'

const Button = ({reset,children,handleClick}) => {
    return (
        <button className={`btn ${reset?'btn-primary':'btn-danger mr-2'}`} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button
