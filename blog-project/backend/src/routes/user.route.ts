import express, { Router } from 'express'
import { Signin, Signup } from '../controllers/user.controller.js'
import { BlogCreation } from '../controllers/blog.controller.js'
import auth from '../middleware/auth.js'
const router:Router = express.Router()

router.post('/signup',Signup)
router.post('/signin',Signin)
router.post('/create-blog',auth,BlogCreation)

export default router