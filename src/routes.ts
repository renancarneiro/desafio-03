import { Router } from 'express'
import Employees from './controllers/Employees'
import Products from './controllers/Products'

const router = Router()

router.use((req, res, next) => {
    console.log(req.method, req.url, res.statusCode)
    next()
})

router.get('/employee', Employees.index)
router.get('/employee/:id', Employees.findById)
router.post('/employee', Employees.create)
router.put('/employee/:id', Employees.update)
router.delete('/employee/:id', Employees.delete)


router.get('/product', Products.index)
router.get('/product/:id', Products.findById)
router.post('/product', Products.create)
router.put('/product/:id', Products.update)
router.delete('/product/:id', Products.delete)
export default router