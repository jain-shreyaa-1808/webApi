/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let baseURL='http://api.openweathermap.org/data/2.5/weather?q=';
let apiKey='&APPID=1071563b9edeb59f74273a0c5acf4626';
const getWeather=async (url)=>{
    const res= await fetch(url)
    try{
        const data=await res.json();
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
        console.log(data)
        makePost('/add',{temperature:30, date:21, userResponse:'great'})
    //     updateUI()
    })
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
            console.log(newData);
            return newData;
        }
        catch(error){
            console.log(error)
        }
};

const weatherDemo=async(baseURL,zipCode,apiKey)=>{
    const res= await fetch(baseURL+zipCode+apiKey)
    try{
        const data=res.json()
        return(data)
    } catch(error){
        console.log("error",error)
    }
};

const updateUI= async()=>{
    const request=await fetch('/all')
        try{
            const allData=await request.json();
            console.log(allData);
            document.getElementById("temp").innerHTML=allData[0].temperature;
            document.getElementById("date").innerHTML=allData[0].date;
            document.getElementById("content").innerHTML=allData[0].userResponse;
        }
        catch(error){
            console.log("error",error);
        }
}


                   