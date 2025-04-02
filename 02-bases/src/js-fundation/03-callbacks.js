const users = [
    {
        id:1,
        name:'Jane '
    },
    {
        id:2,
        name:'Jane Doe'
    }
]

function getUserById(id, callbacks) {
    const user = users.find(function (user){
        return user.id === id
    })

    if(!user){
        return callbacks(`user not found with id ${id}`)
    }

    return callbacks(null,user)
}

module.exports = {
    getUserById
}