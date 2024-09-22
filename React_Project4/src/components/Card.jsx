import React from 'react'

function Card(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
// function Card({name}) {
//     return (
//       <div>
//         {name}
//       </div>
//     )
//   }

export default Card
