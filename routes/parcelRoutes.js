const express = require('express')
const router = express.Router()
const parcelController = require('../controllers/parcelController')

router.get('/',parcelController.getParcels)
router.get('/:id',parcelController.getParcel)
router.post('/',parcelController.createParcel)
router.put('/:id',parcelController.updateParcel)
router.delete('/:id',parcelController.deleteParcel)

module.exports = router