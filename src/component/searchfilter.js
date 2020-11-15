import React, { Component } from "react";
// import logo from './logo.svg';
import "./tel.css";
import Information from "./info-json";

class AppSear extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const styleInfo = {
      paddingRight: "10px",
      
    };
    const elementStyle = {
      border: "solid",
      borderRadius: "10px",
      position: "relative",
      left: "10vh",
      height: "3vh",
      width: "200px",
      marginTop: "5vh",
      marginBottom: "10vh",
      padding: "15px"
    };
    const items = Information.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.firstName
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        data.lastName.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.phone.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <div>
            <div className="tel_block">
            {/* <li style={{ position: "relative", left: "10vh" }}> */}
              <span className="name_contact" style={styleInfo}>{data.firstName}</span>
              <span className="name_contact" style={styleInfo}>{data.lastName}</span>
              <span  style={styleInfo}>
                 <a href={"tel:"+data.phone}>{data.phone}</a>
              </span>
              <span style={styleInfo}>{data.gender}</span>
            {/* </li> */}
            </div>
        </div>
      );
    });

    return (
      <div>
        <input
          type="text"
          placeholder="Введіть пошуковий запит"
          style={elementStyle}
          onChange={(e) => this.searchSpace(e)}
        />
        {items}
      </div>
    );
  }
}

export default AppSear;
