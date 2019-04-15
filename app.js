const express = require('express')
const bodyParser = require('body-parser')
const chalk = require('chalk')

const app = express()
const router = require('./routes')

app.use('/', express.static('./public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router(app)

app.listen(3000, () => {
    console.log(chalk.red('the server is running at 3000'))
})
