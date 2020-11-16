import TV from "../src/images/TV.png";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import React, { Component } from "react";
import Calendar from "react-calendar";
// import AppSear from './component/searchfilter';
import "../src/component/tel.css";
import Information from "../src/component/info-json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Super Film</h1>
        <img src={TV} className="App-logo" alt="logo" />
        <p>
          Для получения списка сериалов, пожалуйста, выберите необходимый месяц
          и день.
        </p>
      </header>
      <div className="calendar-wrapper">
        <AppSear />
      </div>
    </div>
  );
}
export default App;
// {console.log(state)}

class AppSear extends Component {
  constructor() {
    super();

    this.state = {
      value: new Date(),
    };
  }

  onChange = (value) => this.setState({ value });
  render() {
    const styleInfo = {
      paddingRight: "10px",
      display: "flex",
    };
    const items = Information.filter((data) => {
      if (this.state.value == null) return data;
      else if (
        data.firstName
          .toLowerCase()
          .includes(this.state.value.toLocaleDateString("en-US")) ||
        data.lastName
          .toLowerCase()
          .includes(this.state.value.toLocaleDateString("en-US")) ||
        data.date
          .toLowerCase()
          .includes(this.state.value.toLocaleDateString("en-US"))
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <div>
          <div className="film-block">
            <p>{data.date}</p>
            <div style={styleInfo}>
              <div className="image-block-film">
                <img src={data.lastName} className="image-film" />
              </div>
              <div>
                <h3 className="name_contact"> {data.firstName}</h3>
                <p className="epyzode">{data.gender}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    const { value } = this.state;
    // console.log("AppSear -> render -> value", value)
    const options = {  year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={value}
          calendarType="Hebrew"
          /* {console.log(value.toLocaleDateString("en-US"))} */
        />
        
         <p>{this.state.value.toLocaleDateString(undefined, options)}</p> 
         {/* Undefined - set region automation */}
        {items}
        {/* {console.log(this.state.value.toLocaleDateString("en-US"))} */}
      </div>
    );
  }
}
