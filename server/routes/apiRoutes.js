import express from 'express'
import * as controller from '../controllers/controller.js'

//creating router
const router = express.Router()

router.get('/boardgames', controller.bg_get)
router.get('/boardgames/:id', controller.bg_get_one) 
router.post('/boardgames', controller.bg_post) 
router.put('/boardgames/:id', controller.bg_put) 
router.delete('/boardgames/:id', controller.bg_delete) 

export default router