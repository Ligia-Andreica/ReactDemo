import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const APP = express()
const PORT = 9000

APP.use(morgan('dev'))
APP.use(bodyParser.json())
APP.use(bodyParser.urlencoded({ extended: true }))
APP.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000') 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') 
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type') 
    res.setHeader('Access-Control-Allow-Credentials', true) 
    next() 
}) 

const skills = ['React', 'Redux']

APP.route('/skills')
    .get((req, res) => res.json(skills))
    .post((req, res) => {
        const { skill } = req.body
        skills.push(skill)
        res.json({
            success: 1,
            message:'Skill Successfully added!'
        })
    })

APP.listen(PORT)
console.log(`Server is running at http://localhost:${PORT}`)