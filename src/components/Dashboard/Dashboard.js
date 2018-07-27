import React, { Component } from 'react'
// import axios from 'axios'

import Product from '../Product/Product'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log("state",this.props)
        return (
            <div>
                Dashboard!!
                {this.props.inventory.map((e, i) => {
                    return <Product name={e.name} price={e.price} image={e.image} />
                })}
            </div>
        )
    }
}

//go back to step 2

export default Dashboard
