import './App.css';
import React,{useState} from 'react';

function App() {

  const [height,setHeight] = useState('');
  const [weight,setWeight] = useState('');
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('');

  let calcBmi = (e) => {

    e.preventDefault();
    if (height === 0 || weight === 0)
    {
      alert('please enter height and weight')
    }
    else{
      let bmi = (weight/(height*height)*10000)
      setBmi(bmi.toFixed(1))


      if(bmi<20){
        setMessage('You are underweight')
      }

      else if(bmi >= 20 && bmi <30) {
        setMessage('You are in a healthy weight range')
      }

      else{
        setMessage('You are overweight')
      }
    }
  }





  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Enter your height in cm:</label>
            <input type="text" value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div>
            <label>Enter your weight in kg:</label>
            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
          </div>

          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;