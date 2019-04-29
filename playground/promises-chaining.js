require('../src/db/mongoose')
const User = require('../src/models/user');
const bcrypt = require('bcryptjs')

// User.findByIdAndUpdate('5cbffc8aaf598413106f5aa8',{age:51}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age: 23})
// }).then((result)=>{
//     console.log(result);
// }).catch(err=>console.log(err))

//Same Functionality by using async await

const userUpdate = async (id,age) => {
   const user = await User.findByIdAndUpdate(id,{age})
   const count = await User.countDocuments({age});

   return count;
}

// userUpdate('5cbffc8aaf598413106f5aa8',23).then((result)=>{
//     console.log('result',result);
// }).catch(err => console.log('error',err)

const myFunction =   async () => {
    const hashedPwd = await bcrypt.hash('Vivek07$',8)
    console.log(hashedPwd);
    const isValid = await bcrypt.compare('Vivek07$',hashedPwd);
    console.log(isValid);
}

myFunction()








