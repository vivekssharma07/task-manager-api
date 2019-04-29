const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/users',userRouter);
app.use(taskRouter)


const multer = require('multer')
const upload = multer({
                dest:'image'
})

app.post('/uploads',upload.single('uploads',(req,res) =>{
    return res.send()
}))


// const Task= require('../src/models/task')
// const User = require('../src/models/user')

// const main = async () => {
//     const users = await User.findById('5cc6a96012623034ed28ec2f')
//     const user = await users.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()

app.listen(port, () => {
    console.log('Server is up on port' + port)
})
