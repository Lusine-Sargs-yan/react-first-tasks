import React from 'react'

export const Errors = ({errorMessage}) => {
  return (
    <div>
      {Object.keys(errorMessage).map((name, index) => {
        if(errorMessage[name].length > 0) {
          return (
            <div key={index}>{errorMessage[name]}</div>
          )
        } else {
          return '';
        }
      })}
    </div>
  )
}