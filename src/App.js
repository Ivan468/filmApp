import logo from '../src/images/TV.png';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Super Film</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день.
        </p>
        <div> {MyApp()}</div>
      </header>
    </div>
  );
}

 
function MyApp() {
  const [value, onChange] = useState(new Date());
 
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      /> {console.log(value)}
    </div>
  );
}

export default App;
