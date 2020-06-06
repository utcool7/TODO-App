const mongoose = require('mongoose');

//setting up mongoose server with name todo_list_db
mongoose.connect('mongodb://localhost/todo_list_db');

//connecting mongoose
const db = mongoose.connection;

//if error occurs 
db.on('error',console.error.bind(console,'error connecting to db'));

//if no error occurs then opening the server once
db.once('open',function(){
    console.log('db successfully connected');
});