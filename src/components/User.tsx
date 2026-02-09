import React, { useState } from 'react'

export default function User({name}) {
    const [count,setCount] = useState(0);
  return (
    <div>
        <div>Name: {name}</div>
        <div>count:{count}</div>
        <div>Location:Roorkee</div>
        <div>Age: 22</div>
    </div>
  )
}
