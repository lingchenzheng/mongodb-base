module.exports = {
    //数据库配置
    dbConf: {
        host: 'localhost',
        port: 27017,
        db: 'test'
    },
    //token相关配置
    jwtConf: {
        secretKey: 'sdqjkhdqjhwkdhq', //加密秘钥
        expiresIn: 60 * 60 * 24 * 7 //过期时间
    }
}
