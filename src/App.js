import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inventory: []
    }

  }

  componentDidMount() {
    axios.get('/api/inventory').then(results => {
      this.setState({
        inventory: results.data
      })
    })
  }

  updateInventory=(inventory)=>{
    this.setState({inventory})
  }


  render() {

    return (
      <div className="App">
        <Header />
        <Form get={this.componentDidMount}
        updateInventory={this.state.updateInventory}
        />
        <Dashboard inventory={this.state.inventory} 
        get={this.componentDidMount} 
        />

      </div>
    );
  }
}

export default App;
