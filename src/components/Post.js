import React from 'react';
import "./PostStyle.css"

export default function Post({title, body, userId}) {
  return (
    <div>
      <h3 className="title-container">{title}</h3>
      <div className="body-container">{body}</div>
      <div className="id-style">{userId}</div>
    </div>
  )

}