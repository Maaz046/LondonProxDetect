import React, { Component } from "react";
import axios from "axios";

var userData3 = "ABC";

class forUser3 extends Component {
  async componentDidMount() {
    const res = axios.get("user/3");
    userData3 = await res.data;
    console.log(userData3);
  }

  render() {
    return <div>{userData3}</div>;
  }
}

export default forUser3;
