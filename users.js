let UserModel = require('./usersdatabase')

let msg = new UserModel ({
    name: 'Roman Gifford'
})

msg.save()
    .then(doc => {
        console.log(doc)
    })


    .catch(err => {
        console.error(err)
    })    
