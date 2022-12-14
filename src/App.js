import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import { useEffect, useState } from 'react';

function App() {

  // // GET call
  // // state
  // // This is a way to “preserve” some values between the function calls. 
  // // Normally, variables “disappear” when the function exits but state variables are preserved by React.
  // // The only argument to the useState() Hook is the initial state.
  // // It returns a pair of values: the current state and a function that updates it. 
  // // This is why we write const [count, setCount] = useState().
  // // Also, whenever the value of state changes the component will be re rendered and thus we can show new data will shown in the JSX. 

  // const[quote, setQuote] = useState('Initial'); 
  // //Normal variable. 
  // //When normal variable changes nothing happens ie the component doesn't get re rendered
  // let test = 'Initial'; 

  // useEffect(()=> {
  //   getQuote(); 
  // }, []); 

  
  // const getQuote = () => {



  //   //Fetch api 
  //   // fetch('https://api.quotable.io/random')
  //   //    .then((res) => res.json())
  //   //    .then((data) => setQuote(data.content))
      


  //   //axios.get returns a promise. 
  //   //Hope you guys are familiar with promise 
  //   //A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.
  //   //Here the producer code is the api call and we write the consumer code inside the then. 
  //   //Think of it like this: singer and fans. Singer is the producer and fans are the consumers. 
  //   //promise is the mailing list. 
  //   axios.get('https://api.quotable.io/random')
  //       .then( res => {
  //         console.log(res.data.content); 
  //         setQuote(res.data.content); 
  //         test = res.data.content; 
  //       })
  //       .catch(err => console.log(err)); 

  // }


  // return (
  //   <div className='App'>
  //     <h6>Quote App</h6>
  //     <p>"{quote}"</p>
  //     {/* <p>{test}</p> */}
  //     <button className='button-quote' onClick={getQuote}>Another Quote</button>
     
  //   </div>
  // );

  const [name, setName] = useState(''); 
  const [age, setAge] = useState(0); 


  //GET Method with a parameter
  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`)
         .then(res => setAge(res.data.age)); 
  }


  return (
    <div className='App'>
      <input placeholder='Enter your name' onChange={event => setName(event.target.value)}/>
      <button className='button-age' onClick={fetchData}>Predict your age</button>
      <p> Your predicted age is: {age}</p>
    </div>
  ); 

}

export default App;
