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

const skills = [{id: 0, skill: 'React'}, {id: 1, skill: 'Redux'}]

APP.route('/skills')
    .get((req, res) => {setTimeout(() => { res.json(skills)}, 1000) })
    .post((req, res) => {
        const { skill } = req.body
        const id = skills.length + 1
        skills.push({
            id,
            skill
        })
        res.json({
            status: 201,
            id,
            message: 'Skill successfully added!'
        })
    })

APP.listen(PORT)
console.log(`Server is running at http://localhost:${PORT}`)