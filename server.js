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
const port=8000;
const server=app.listen(port,listening);
function listening(){
    console.log(`runing on port ${port}`);
}

app.get('/all',sendData);
function sendData(request,response){
    response.send(projectData);
};
app.post('/addWeather',addWeatherData);
function addWeatherData(req,res)
{
    projectData={
        temp:req.body.temp,
        newDate:req.body.newDate,
        userContent:req.body.userContent  
    }
    // projectData.push(newEntry)
    res.send(projectData)
    console.log(projectData)
}