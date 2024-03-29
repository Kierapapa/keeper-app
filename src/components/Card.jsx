import React from 'react'
import Avatar from './Avatar'
import Detail from './Detail'

const Card = (props) => {
    return (
        <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar name={props.name} img={props.img}/>
        </div>
        <div className="bottom">
          <Detail detailInfo={props.phonenum} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    )
}

export default Card
