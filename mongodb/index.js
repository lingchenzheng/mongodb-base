const mongoose = require('mongoose')
const chalk = require('chalk')
const { dbConf } = require('../config')
const url = `mongodb://${dbConf.host}:${dbConf.port}/${dbConf.db}`

mongoose.connect(url, { useNewUrlParser: true })

mongoose.connection
    .once('open', function() {
        console.log(chalk.blue('数据库连接成功......'))
    })
    .once('close', function() {
        console.log(chalk.red('数据库断开连接......'))
    })

module.exports = mongoose
