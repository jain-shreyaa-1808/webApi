// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');
// Start up an instance of app
const app=express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser=require('body-Parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=3030;
const server=app.listen(port,listening);
function listening(){
    console.log(`runing on port ${port}`);
}
app.get('/all',sendingData);
function sendingData(req,res){
    res.send(projectData)
}
app.post('/add',addData);
function addData(request,response)
{
    newEntry={
        temperature:request.body.temperature,
        date:request.body.date,
        userResponse:request.body.userResponse
    }
    projectData.push(newEntry)
    response.send(projectData)
    console.log(newEntry)
    // projectData.push(request.body.temperature);
    // projectData.push(request.body.date);
    // projectData.push(request.body.response);
}