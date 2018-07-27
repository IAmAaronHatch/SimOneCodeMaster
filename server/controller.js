

module.exports = {
    getProducts: (req, res) => {
        let db = req.app.get('db')
        db.get_inventory().then(response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Oh no! Something Broke!'})
            console.log(err);
        })
    },

    addProducts: (req, res) => {
        let db = req.app.get('db')
        let { name, price, image } = req.body 
        db.create_product([name, price, image]).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send({ errorMessage: 'Oh no! Something Broke!' })
            console.log(err);
        })
    }

}

