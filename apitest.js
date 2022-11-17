import { Component } from "react";

class Api extends Component {
  componentDidMount() {
    this.apifunc();
  }

  apifunc = async () => {
    let url = "https://jsonplaceholder.typicode.com/todos";
    let options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);

    // fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    // .then(json => console.log(json))
    // };
  };
  render() {
    return <div>hi</div>;
  }
}

export default Api;
