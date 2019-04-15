const jwt = require('jsonwebtoken')
const { jwtConf } = require('../config')

module.exports = {
    //生成token
    sign(data) {
        return jwt.sign(data, jwtConf.secretKey, {
            expiresIn: jwtConf.expiresIn
        })
    },
    //验证token
    vertify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, jwtConf.secretKey, (err, decode) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(decode)
                }
            })
        })
    }
}
