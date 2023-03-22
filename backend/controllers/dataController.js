const asyncHandler = require('express-async-handler')
const Users = require('../models/userModels')

//@desc Get users
//@route GET /api/users
//@access Private
const getData = asyncHandler(async (req, res) => {
    const userData = await Users.find()

    res.status(200).json(userData)
})

//@desc post user
//@route POST /api/users
//@access Private
const postData = asyncHandler(async (req, res) => {
    const userInfo = req.body

    if(!userInfo){
        res.status(400).json({message: 'please enter you name and email'})
    }
    const newUser = await Users.create(userInfo)
    res.status(200).json(newUser)
})


//@desc update user
//@route PUT /api/users/:id
//@access Private
const updateData = asyncHandler(async (req, res) => {
    const userID = req.params.id
    const newData = req.body

    if(!newData){
        res.status(400).json({message: 'please enter data'})
    }

    const updatedUser = await Users.findByIdAndUpdate(userID, newData)

    res.status(200).json(updatedUser)
})


//@desc Delete user
//@route Delete /api/users:id
//@access Private
const deleteData = asyncHandler(async (req, res) => {
    const userID = req.params.id

    const deleteUser = await Users.findByIdAndDelete(userID)
    res.status(200).json(deleteUser.id)
})


module.exports = {
    getData,
    postData,
    updateData,
    deleteData
}