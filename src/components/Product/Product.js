import React from 'react'

function Product(props) {
    return (
        <div>
            <p>Product</p>
            <p>imageUrl: {props.image}</p>
            <p>name: {props.name}</p>
            <p>price: {props.price}</p>
            <button>delete</button>
            <button>edit</button>
        </div>
    )
}

export default Product