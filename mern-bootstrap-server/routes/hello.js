const express = require('express');
const router = express.Router();
const cors = require('cors');

// need this to connect to localhost
router.use(cors());

/* GET greeting. */
router.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

module.exports = router;