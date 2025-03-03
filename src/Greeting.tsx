import React from 'react'

interface GretProps{
    name : string;
}

const Greeting: React.FC<GretProps> = ({ name }) =>
{
  return (
    <div>
        <h1>Hello, {name}</h1>
        <p>A simple greeting</p>
    </div>
  )
}

export default Greeting