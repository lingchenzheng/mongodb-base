const User = require('../model/user')
module.exports = {
    addUser(req, res) {
        User.create({
            name: '六只脚',
            age: 27,
            gender: '男'
        }).then(data => {
            res.json(data)
        })
    },
    login(req, res) {},
    editUser(req, res) {},
    deleteUser(req, res) {}
}
