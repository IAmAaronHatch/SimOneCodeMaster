import React, { Component } from 'react'
import axios from 'axios'

import Product from '../Product/Product'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
         // let inventoryMap = this.state.inventory.map(inv => {
    //   return <Dashboard updateInventory={this.updateInventory} inv={inv} />
    // })
        return (
            <div>
                Dashboard!!
                {/* <p>imageUrl: {inv.image}</p>
                <p>name: {inv.name}</p>
                <p>price: {inv.price}</p> */}
            </div>
        )
    }
}

//go back to step 2

export default Dashboard
