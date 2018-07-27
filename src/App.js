import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [
        {
          image: "yes",
          name: "fake",
          price: 3,
        }
      ]
    }
  }

  componentDidMount() {
    axios.get('/api/inventory').then(results => {
      this.setState({
        inventory: results.data
      })
    })
  }

  // updateInventory = (inventory) => {
  //   this.setState({ inventory })
  // }


  render() {
    // let inventoryMap = this.state.inventory.map(inv => {
    //   return <Dashboard updateInventory={this.updateInventory} inv={inv} />
    // })
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />

      </div>
    );
  }
}

export default App;
