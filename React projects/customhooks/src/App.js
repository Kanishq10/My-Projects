import {useState} from 'react'
import './App.css';

function App() {
  function useForminputs(initialState){ //custom hook 
    const [value,setValue]=useState(initialState);
    function handlechange(e){
      setValue(e.target.value);
    }
    return{ //returning a javascript object
      value,
      onChange:handlechange
    };
  }
  const email=useForminputs("example@gmail.com");
  const password=useForminputs('');
  return (
    <div>
       {/* <label>Email </label>
       <input type="email" value={email.value} onChange={email.onChange} /><br/><br/>
       <label>Password </label>
       <input type="password"value={password.value} onChange={password.onChange} />  this is somw way long method short is below*/}
       <div>Email: </div>
       <div><input type="email" {...email} /></div><br/>
       <div>Password: </div>
      <div> <input type="password" {...password}/></div>
      <div><h1>Email: {email.value}</h1></div>
      <div><h2>Password: {password.value}</h2></div>
    </div>
  );
}

export default App;
