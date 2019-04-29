const {MongoClient,ObjectID} =require('mongodb')
const connectionURL = 'mongodb://localhost:27017';
const dbname = 'task-manager';

const id =  new ObjectID();

 //Connection with MongoClient
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client) =>{
    if(error){
        console.log('Could not connect to database.');
    }
    console.log('DB Connected Successfully!');
    const db = client.db(dbname);

        db.collection('users').insertOne({
            name:'Aman',
            email : 'aman@gmail.com',
            age : 28
        },(err,response)=> {
            if(err){
                console.log('error occured');
            }
            console.log(response.ops)
        })

    //Mongo DB command to InsertMany Document at once.
        db.collection('users').insertMany([
            {
                name  : 'Ranjeet',
                email : 'ran@gmail.com',
                age   :  28
            },
            {
                name  : 'Sunny',
                email : 'sunny@gmail.com',
                age   :  24
            },
            {
                name  : 'Rajeev',
                email : 'rajeev@gmail.com',
                age   :  21
            },
        ],(err,response) => {
            if(err){
                console.log('Error Occured while inserting!');
            }
            console.log(response.ops);
        })


    //MongoDB Command to fetch all the document
            db.collection("users",  (err, response) => {
                response.find().toArray((err, res) => {
                    console.log(res);
                })
           })

    //Mongo DB command to update Document Field

        db.collection('users').updateOne({
            name:'Ganesh Behra'
            },{
                $set :{
                    name:'Gaurav Bajaj',
                    age: 41
                }
        }).then((result)=>{
            console.log(result.modifiedCount)
        }).catch(err => console.log(err))

    //Mongo DB command to delete Document
         db.collection('users').remove({
            name:'Sunny'
        }).then((result)=>{
            console.log(result);
        }).catch(err => console.log(err))

})