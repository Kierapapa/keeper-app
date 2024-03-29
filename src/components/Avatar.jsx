import React from 'react'

const Avatar = (props) => {
    return (
        <img className="circle-img"
            src={props.img}
            alt={props.name}
          />
    )
}

export default Avatar
