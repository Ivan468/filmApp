import TV from "../src/images/TV.png";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import React, { Component } from "react";
import Calendar from "react-calendar";
// import AppSear from './component/searchfilter';
import "../src/component/tel.css";
import Information, { base } from "../src/component/info-json";


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

    const imageClick = () => {
      console.log(value);
    } 

    const styleInfo = {
      paddingRight: "10px",
      display: "flex",
    };
    const items = base.filter((data) => {
      if (this.state.value == null) return data;
      else if (
        data.airstamp.includes(this.state.value.toISOString().slice(0, -14)) 
        
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <div>
          <div className="film-block">
            {/* <p>{data.date}</p> */}
            <div style={styleInfo}>
              <div className="image-block-film">
                <img src={data.show.image.medium} className="image-film" onClick={() => imageClick()} />
              </div>
              <div>
                <h4 className="name_film"> {data.show.name}</h4>
                <p className="year-film"><b> Premiered: </b>{data.show.premiered} <br/> <b>language:</b> {data.show.language} </p>
                <div className="year-film" dangerouslySetInnerHTML={{__html:data.show.summary}}/>
                <p className="epyzode">{data.show.type}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    const { value } = this.state;
    // console.log("AppSear -> render -> value", value)
    const options = { year: "numeric", month: "long", day: "numeric" };
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={value}
          calendarType="Hebrew"
          
        />
        <p>{this.state.value.toLocaleDateString(undefined, options)}</p>
        {/* Undefined - set region automation  // viev DATE */}
        {items} {console.log(value.toISOString().slice(0, -14))} 
        {/* {console.log(this.state.value.toLocaleDateString("en-US"))} */}
      </div>
    );
  }
}
