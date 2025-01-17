const showAllUser =  (req, res)=>{
    res.send('All user')
}

const createUser = (req, res)=>{
    res.send('Creating a new user')
}

const updateUser =  (req, res)=>{
    res.send(req.params.id)
}

const deleteUser = (req, res)=>{
    res.send(req.params.id)
}

module.exports = {showAllUser, createUser, updateUser,deleteUser};