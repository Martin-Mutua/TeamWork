const express = require('express');
const queryCtrl = require('../controller/query');

const router = express.Router();

router.get('/', queryCtrl.getFeed);

router.post('/create-user', queryCtrl.createUser)

module.exports = router;