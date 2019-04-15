const userRoute = require('./userRoute')

module.exports = app => {
    app.use('/user', userRoute)
}
