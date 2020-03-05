const router = require('express').Router();
const fsPromises = require('fs').promises;


router.get('/', (req, res) => {
  fsPromises.readFile('./data/cards.json')
    .then((data) => {
      res.status(200).send(JSON.parse(data));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
