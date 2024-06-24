const express = require('express')
const router = express.Router()

/*const conexion = require('../database/db')*/
const authController = require('../controllers/authController')

//ROUTER PARA LAS VISTAS
router.get('/', (req, res)=>{
    res.render('index')
})
router.get('/login', (req, res)=>{
    res.render('login')
})
router.get('/register', (req, res)=>{
    res.render('register')
})
//ROUTER PARA LOS METODOS DEL CONTROLLER
router.post('/register', authController.register)
router.post('/login', authController.login)
module.exports = router
