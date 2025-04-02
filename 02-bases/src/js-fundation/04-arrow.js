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
    const user = users.find((user)=> user.id === id)

    if(!user){
        return callbacks(`user not found with id ${id}`)
    }

    return callbacks(null,user)
}


getUserById(1, (error, user)=>{
    if(error){
        throw new Error(error)
    }
    console.log(user)
}

)
