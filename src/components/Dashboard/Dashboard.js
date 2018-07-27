import React, { Component } from 'react'
// import axios from 'axios'
import Product from '../Product/Product'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        let mappedInventory = this.props.inventory.map((e, i) => {
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



                <Link to='/form'><button>To Form</button></Link>
                <Link to='/'><button>Home</button></Link>
            </div>
        )
    }
}

//go back to step 2

export default Dashboard
