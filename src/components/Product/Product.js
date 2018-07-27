import React from 'react'

function Product(props) {
    return (
        <div>
            <img src={props.image} />
            <div>
                <p>name: {props.name}</p>
                <p>${props.price}</p>
            </div>

            <button>delete</button>
            <button>edit</button>
        </div>
    )
}

export default Product