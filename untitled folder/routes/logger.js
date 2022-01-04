const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
// const cors = require('cors');
// const { v4: uuidv4 } = require('uuid');
const { getAllLogs,
    postCreateLog,
    putUpdateLog,
    deleteLog,
    getOneLog
} = require('../controller/logger');




router.get('/', getAllLogs);
router.get('/:id', getOneLog);

router.post('/', postCreateLog);

router.put('/:id', putUpdateLog);

router.delete('/:id', deleteLog);

module.exports = router;
