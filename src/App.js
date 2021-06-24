import React, { Component } from 'react'
import MainFrame from './Components/MainFrame';
import './App.css';
import axios from 'axios'
class App extends Component {
  state= {
    ownData: []
  }

  handlefetchData(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) =>{
        // handle success
        this.setState({ownData : response.data})
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  componentDidMount(){
    this.handlefetchData();
  }

  render() {
    return (
      <>
        <MainFrame
          key='m'
          fetchDate= {this.state.ownData}  
        />
      </>
    )
  }
}

export default App;
