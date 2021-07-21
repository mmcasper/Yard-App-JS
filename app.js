const users = require('./users');
const fs = require('fs');
const { stringify } = require('querystring');
const fetch = require('node-fetch');
console.log(users);

//fetch JSON file
fetch('users.JSON')
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        appendData(data);
    })
    .catch(function (err){
        console.log(err);
    });

//call up JSON object using username
var user = document.getElementById('username');
for(var i = 0; i<data.length; i++){
    //check if login matches any username from a Json object...
    if(user===username) {
        var div = document.createElement('div');
        div.innerHTML = 'Name: ' + user.firstName +' '+user.lastName <br>
                        'Area 1: ' + user.area1<br>
                        'Ares 2: ' + user.area2;
    }
}

//create new user object to send to JSON
let newuUser = {
    username :document.getElementById(username),
    firstName:newUser.firstName,
    lastName:newUser.lastName,
    area3:newUser.area3
}

users.push(newUser);
fs.writeFile('users.json', JSON.stringify(users), err=>{
    if (err) throw err;

    console.log("Done Writing");
});




//use input to find user in Json
//create new user form and connect to button
//use validation to prevent creation of duplicate user name
//link 'manage current area' button to user and display areas
//each area should have a view current area, add to area and wish list fields
//find api with pictures of plants/flowers