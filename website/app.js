/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let baseURL='http://api.openweathermap.org/data/2.5/weather?q=';
let apiKey='&APPID=1071563b9edeb59f74273a0c5acf4626';
const getWeatherData=async (url)=>{
    const response= await fetch(url);
    try{
        const data=await response.json();
        console.log(data)
        return data;
    }
    catch(error){
        console.log("error",error);
    }   
}


document.getElementById("generate").addEventListener("click",action);
function action(e){
    const zipCode=document.getElementById('zip').value;
    weatherDemo(baseURL,zipCode,apiKey)
    .then(function(data){
        const userContent=document.querySelector('.myInput').value;
        makePost('/addWeather',{temp:data.main.temp, newDate:newDate, userContent:userContent});
        updateUI();
    })
}

const weatherDemo=async(baseURL,zipCode,apiKey)=>{
    const res= await fetch(baseURL+zipCode+apiKey);
    try{
        const data=res.json();
        return(data);
    } catch(error){
        console.log("error",error);
    }
}
const makePost= async(url='',data={})=>{
    const response= await fetch(url,
        {
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify(data),
        });
        try{
            const newData=await response.json();
            return newData;
        }
        catch(error){
            console.log(error);
        }
}


const updateUI= async()=>{
    const request=await fetch('/all');
        try{
            const allData=await request.json();
            console.log(allData);
            document.getElementById("temp").innerHTML=allData.temp;
            document.getElementById("date").innerHTML=allData.newDate;
            document.getElementById("content").innerHTML=allData.userContent;
        }
        catch(error){
            console.log("error",error);
        }
}


                   