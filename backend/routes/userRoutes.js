const express = require('express')
const { getData, postData, updateData, deleteData } = require('../controllers/dataController')

const router = express.Router()

router.route('/').get(getData).post(postData)
router.route('/:id').put(updateData).delete(deleteData)


module.exports = router