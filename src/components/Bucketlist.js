import React, {useState} from 'react';
import List from './Listeitem';



export default function Bucket(){

    const bucketlist = [{
        list: "hello",
        importance: 1
    },
    {
        list:"hello2",
        importance:1
    }]


    const  [input, setInput] = useState('');
    const  [todo, setTodo] = useState('');

    const handleInputChange = (e) => {
    // const {target} = e;
    // const inputType = target.name;
    // const inputValue = target.value;


    // if (inputType === 'todo') {
    //     setInput(inputValue);
    //   } else if (inputType === 'userName') {
    //     setUserName(inputValue);
    //   } else if (inputType ==='password'){
    //     setPassword(inputValue)
    //   }
        setInput(e.target.value)

    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({input})
      };

  return (
    <div>
        <p>Test</p>
        <form className="form">
        <input
          value={input}
          name="input"
          onChange={handleInputChange}
          type="todo"
          placeholder="Enter to do"
        />
        <select name="drop" id="priority">
        <option value="volvo">1</option>
        <option value="saab">2</option>
        <option value="mercedes">3</option>
        <option value="audi">4</option>
        </select>
         <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
        </form>
        <List bucketlist={bucketlist}/>
    </div>
  );
}



