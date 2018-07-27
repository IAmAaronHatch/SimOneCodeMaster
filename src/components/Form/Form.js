import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: '',
            name: '',
            price: 0,
            userInput: ''
        }
    }

    addInventory = () => {
        axios.post('/api/inventory').then(results=> {
            this.setState({

            })
        })
    }

    handleImage = (e) => {
        this.setState({
            image: e.target.value
        })
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handlePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    addProduct = () => {
        const { image, name, price } = this.state
        const newProduct = { image, name, price }
        axios.post('/api/inventory', newProduct).then(results => {
            this.props.updateInventory(results.data)
        })
    }

    handleCancel = (e) => {
        this.setState({
            userInput: ''
        })
    }


    render() {
        return (
            <div>
                FORM!!!
                <input type="text"
                    value={this.state.image}
                    onChange={this.handleImage}
                    placeholder="Image URL" />
                <input type="text"
                    value={this.state.name}
                    onChange={this.handleName}
                    placeholder="Product Name" />
                <input type="number"
                    value={this.state.price}
                    onChange={this.handlePrice}
                    placeholder="Price" />

                <button
                    onClick={this.handleCancel}
                >Cancel</button>

                <button onClick={this.addProduct}>Add to Inventory</button>
            </div>
        )
    }
}

//create
//get cancel button working

export default Form
