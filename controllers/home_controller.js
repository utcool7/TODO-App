var moment = require('moment');
const Todo = require('../models/todo');
var todoList = require('../index.js')
module.exports.home = function(req,res){
    Todo.find({},function(err,todo){
        if(err){
            console.log("error in fetching todo from db");
            return ;
        }
    
    return res.render('home',{
        title : "HOME",
        todo_task : todo,
        moment: moment
    });
});
}