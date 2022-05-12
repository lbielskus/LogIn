const userDb = require('../schemas/userSchema')
const bcrypt = require('bcrypt')
const randomstring = require('randomstring')


module.exports = {
    register: async (req, res) => {
        const {userName, passOne, passTwo} = req.body

        const user = userDb
        {
            user.image = "https://th.bing.com/th/id/R.8eb5d4e5cfd8732869371646697ac180?rik=1UfTeaYNAebHVw&riu=http%3a%2f%2fpixelartmaker.com%2fart%2f370b7ca6a692905.png&ehk=VEz4Ny43oslnFJas%2btEZ15AnLme0PF%2f6iAhkDUjQnDk%3d&risl=&pid=ImgRaw&r=0"
            user.username = userName
            user.password = await bcrypt.hash(passOne, 10)
            user.health = 100
            user.gold = 100
            user.inventory = []
            user.secretKey = randomstring.generate()
        }
        await user.save()

        res.send({error: false, message: "User created"})
    },
    login: (req, res) => {
        console.log('AAAAAAAAAAAAAaAAAAAAAAAAA')
    },
}