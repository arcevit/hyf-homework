//all html value assign to as a variable

const form=document.querySelector('#todo-form');
const listUl=document.querySelector('.list-group');
const forecastBtn=document.getElementById('forecast');
const lat=document.querySelector('.lat');
const log=document.querySelector('.log');
const get_mapDiv=document.getElementById('map-div');
const mhumidity=document.querySelector('.humidity');
const mtemp=document.querySelector('.temp');
const tempMax=document.querySelector('.temp-max');
const tempMin=document.querySelector('.temp-min');
const windSpeed=document.querySelector('.wind-speed');
const mcountry=document.querySelector('.country');
const mdescription=document.querySelector('.description');
const ndescription=document.querySelector('.description-n');
const weatherImg=document.querySelector('#weather-img');
const cityButton=document.querySelector('#city-button')
const cityInput=document.querySelector('#city-input')



//assign  the current location of lat. and long.

let currentLatitude;
let currentLongitude;

// all event listener are collected and runs under  the function
allEventListeners();


function allEventListeners(){
    cityButton.addEventListener("click",callCityWeather)
    forecastBtn.addEventListener("click",forecast)
    form.addEventListener("submit",addToDo);
    document.addEventListener("DOMContentLoaded",domContentLoad);
    listUl.addEventListener("click",callDataLocalStorage)




}
// send the data to interface to the page

function interface(value){
    mhumidity.textContent="Humidity : "+value.main.humidity;
    mtemp.textContent="temperature : "+value.main.temp+"°C";
    tempMax.textContent="Max_Temp : "+value.main.temp_max+"°C";
    tempMin.textContent="Min_Temp : "+value.main.temp_min+"°C";
    windSpeed.textContent="Wind Speed : "+value.wind.speed;
    mcountry.textContent="Country : "+value.sys.country;
    mdescription.textContent="Daily Description : "+value.weather[0].description;
    weatherImg.src=`http://openweathermap.org/img/w/${value.weather[0].icon}.png`


}




// while entering the input value to search a city weather by fetching weather map link and collect the Json file

function callCityWeather(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&APPID=ac8f79be5739681e6945f1cb2f30ace2&units=metric`)
    .then((response)=> response.json())
    .then(data=>{
        console.log(data)
        interface(data)
        sendDataStorage(data)
        addToDo(el);
      

    })
}



navigation()



// this function runs to find the current location and getting the Json object for the current location of the user
function forecast(){

    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&APPID=ac8f79be5739681e6945f1cb2f30ace2&units=metric`)                   
    .then(response=> response.json())
    .then(data=>{

        console.log(data)
        interface(data)
      
    })
    .catch(err=>console.log(err))  
}


// to show current location of map to the interface of the page

let mapp;
 function loadMap() {
   let mapSetting={
       center: {lat:Number(currentLatitude), lng:  Number(currentLongitude) },
       zoom: 9
     };
   mapp = new google.maps.Map(get_mapDiv,mapSetting);
 }
 // the function finds current latitude and longitude
  function navigation(){
    if(navigator.geolocation){
        // getting current coordinates of longitude and latitude
        navigator.geolocation.getCurrentPosition((position)=>{
             let a=position.coords.latitude;
             let b=position.coords.longitude;
             currentLatitude=a.toFixed(2);
             currentLongitude=b.toFixed(2);
             console.log("Current Latitude : "+currentLatitude+" Current Longitude :"+currentLongitude);
             lat.textContent="Current Latitude : "+currentLatitude;
             log.textContent="Current Longitude : "+currentLongitude;
            
            //calling google map when click event occured
            loadMap();
    
        });
    }else{
        console.log(" Geolocation is not supported by your browser");
    }
  }


 //to get the Json file from any api 
function getItemFunction(){
    let weatherData;
    if(localStorage.getItem("keydata")===null){
        weatherData=[];
    }else{
        weatherData=JSON.parse(localStorage.getItem("keydata"));
    }
    return weatherData;
}
// while getting JSON FILE  TO SAVE THE DATA TO THE localStorage

function sendDataStorage(newdata){
    let weatherData=getItemFunction();
    weatherData.push(newdata);
    localStorage.setItem("keydata",JSON.stringify(weatherData));


}
// while entering the city names need to create dynamic li tags to list the city names

function addToInterface(cityname){
    

    let listItem=document.createElement('li');
    listItem.className="list-city";
    listItem.appendChild(document.createTextNode(cityname))
    listUl.appendChild(listItem);

}
//load the interface to data submit form tag
function addToDo(el){
    let cityname=cityInput.value;
    addToInterface(cityname);
    el.preventDefault();
}
//load dom contents

function domContentLoad(){

    let getData=getItemFunction()
    getData.forEach(value=>{
        // console.log(value.name)
        addToInterface(value.name)

    })
}

// get the JSON object from localStorage

function callDataLocalStorage(element){
    let mytextContent=element.target.textContent;  

    let getData=getItemFunction()
    getData.forEach(value=>{
        if(mytextContent===value.name){

              interface(value);
        
         }
    })
}

