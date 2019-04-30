const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:Vivek07$@cluster0-wemqu.mongodb.net/task-manager?retryWrites=true',{useNewUrlParser:true,useCreateIndex:true,useFindAndModify: false},() => {
    console.log('Connected to database successfully!');
});
