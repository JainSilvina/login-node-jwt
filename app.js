const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

//SETEAMOS EL MOTOR DE PANTILLAS
app.set('view engine', 'ejs')

//SETEAMOS LA CARPETA PUBLIC PARA ARCHIVOS ESTATICOS
app.use(express.static('public'))

//PARA PROCESAR DATOS ENVIADOS DESDE FORMS
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//SETEAMOS LAS VARIABLES DE ENTORNO
dotenv.config({path: './env/.env'})

//PARA PODER TRABAJAR CON LAS COOKIES
app.use(cookieParser())

//LLAMAR AL ROUTER
app.use('/', require('./routes/router'))



app.listen(3000, ()=>{
    console.log('SERVER UP runnung in http://localhost:3000')
})
