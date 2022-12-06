import { useState } from "react";

export function Form2(props) {
  const [name, setName] = useState('Irina Sergeevna')

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <h4>{props.title}</h4>
      <h5>Name: {name}</h5>
      <input type="text" onChange={handleChange} />
      <hr/>
    </>
  ) 
}