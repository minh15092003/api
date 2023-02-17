

    const express = require('express')
    const app = express()
    const bodyParser = require('body-parser')
    const port = process.env.PORT || 3000
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    let routes = require('./routes') //importing route
    routes(app)
    app.use(function(req, res) {
        res.status(404).send({url: req.originalUrl + ' not found'})
    })
    app.listen(port)
    console.log('RESTful API server started on: ' + port)
























// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const port = process.env.PORT || 3000

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
//     // res.status(404).send({ url: req.originalUrl + ' not found' })
// })
// let routes = require('./routes') //importing route
// routes(app)



// app.listen(port)

// console.log('RESTful API server started on: ' + port)
