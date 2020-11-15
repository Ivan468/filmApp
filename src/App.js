import TV from '../src/images/TV.png';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import AppSear from './component/searchfilter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Super Film</h1>
        <img src={TV} className="App-logo" alt="logo" />
        <p>
        Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день.
        </p>
        <div> {CalendarComponent()}</div>
      </header>
      <div>
        <AppSear/>
      </div>
    </div>
  );
}


function CalendarComponent() {
  const [value, onChange] = useState(new Date());
 
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType ="Hebrew"
        // formatLongDate = {(locale, date) => formatDate(date, 'dd MMM YYYY')}
      /> {console.log(value.toLocaleDateString("en-US"))}
    </div>
  );
}

export default App;
