import React, {useState} from "react";


function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    const {value} = e.target;
    setInputText(value);
  }

  return (
    <div className="form">
    <input type={props.type} onChange={handleChange} value={inputText} />
    <button>
      <span onClick={() => {props.onAdd(inputText); setInputText("");}}>Add</span>
    </button>
  </div>
  )
}

export default InputArea;