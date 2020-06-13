const mongoose = require('mongoose');

// Creating Schema of TODO App 
const todoSchema = new mongoose.Schema({
    //description of the task 
    description :{
        type :String,
        required : true
    },
    // type of work
    workType:
    {
        type :String,
        required :true

    },
    // deadline of the work 
    deadline :{
        type :Date,
        required : true
    }
    

});

//creating model of the todo
const Todo = mongoose.model('Todo',todoSchema);

//Exporting todo model
module.exports = Todo;