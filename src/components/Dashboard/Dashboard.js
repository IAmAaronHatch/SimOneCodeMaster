import React, { Component } from 'react'
// import axios from 'axios'
import Product from '../Product/Product'

class Dashboard extends Component {
    render() {
        let mappedInventory = this.props.inventory.map( (e, i) => {
            return (
                <div key={i}>
                    <Product 
                        id={e.id}
                        name={e.name}
                        price={e.price}
                        image={e.image}
                        />
                </div>
            )
        })
        return (
            <div>
                <p>Dashboard!</p>
                {mappedInventory}
            </div>
        )
    }
}

//go back to step 2

export default Dashboard
