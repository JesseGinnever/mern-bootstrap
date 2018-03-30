const express = require('express');
const router = express.Router();
const cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// need this to connect to localhost
router.use(cors());
router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true }));

//Set up default mongoose connection
var dbHost = 'mongodb://127.0.0.1/my_database';

const options = {
};
// Connect to mongodb
mongoose.connect(dbHost, options);

// create mongoose schema
const greetingSchema = new mongoose.Schema({
  text: String
});

// create mongoose model
const Greeting = mongoose.model('Greetings', greetingSchema);

//remove all greetings
Greeting.remove({}, function (err) {
  if (err) return handleError(err);
});

/* GET greeting. */
router.get('/', (req, res) => {
  Greeting.find({}, (err, greeting) => {
    if (err) res.status(500).send(error)

    res.status(200).json(greeting);
  });
});

router.post('/create', (req, res) => {
  let greeting = new Greeting({
    text: req.body.text
  })

  greeting.save(error => {
      if (error) res.status(500).send(error);
      res.status(201).json({
          message: 'greeting created successfully'
      });
  });
});

router.delete('/', (req, res) => {
  Greeting.remove({}, function (err) {
    if (err) return handleError(err);
    res.status(201).json({
      message: 'all greetings removed!'
  });
  });
});

router.delete('/:greetingId', (req, res) => {
  Greeting.remove({_id: req.params.greetingId}, function (err) {
    if (err) return handleError(err);
    res.status(201).json({
      message: 'greeting removed!'
    });
  });
});

module.exports = router;