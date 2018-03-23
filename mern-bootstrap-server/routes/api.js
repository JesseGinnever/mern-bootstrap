
// Import dependencies
const express = require('express');
const router = express.Router();
const hello =  require('./hello');

router.use('/hello', hello);

router.use(function(req, res, next) {
    // log each request to the console
    console.log(req.method, req.url);
    // continue doing what we were doing and go to the route
    next(); 
});

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('Welcome to the Node.js server!');
});

module.exports = router;