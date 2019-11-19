const queryModels = require('../models/tablesQuerys')
const express = require('express');

const router = express.Router();

router.get('/admin/createTables',
    queryModels.createTables
);

router.use('/admin/deleteTables',
    queryModels.deleteTables
);

module.exports = router;