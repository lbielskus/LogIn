
module.exports = {
    registration: (req, res, next) => {
        const {userName, passOne, passTwo} = req.body

        let numberIncluded = false
        {
            const passArr = passOne.split('')
            passArr.map(x => {
                if(Number(x)){
                    numberIncluded = true
                }
            })
        }

        if(!numberIncluded){
            return res.send({error: true, message: "password should include number"})
        }


        if(passOne.length < 4 || passOne.length > 20){
            return res.send({error: true, message: "password is too long or too short"})
        }

        if(userName.length < 4 || userName.length > 20){
            return res.send({error: true, message: "user name is too long or too short"})
        }


        if(passOne !== passTwo) {
            return res.send({error: true, message: "password does not match"})
        }

        next()
    },
    login: (req, res, next) => {
        const {userName, pass} = req.body


        next()

    }

}