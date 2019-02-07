



//homework

//----  getUserMedia



 const webCamera=document.querySelector('#web-camera');
 webCamera.addEventListener("click",webcamera)
 function webcamera(){
    //add constraint object
    let constraints={
        video:true,
        audio:true
    }

    //call getUserMedia  then lets see

    navigator.mediaDevices.getUserMedia(constraints)
    .then(MediaStream=>{
        let video=document.querySelector('video')
        video.srcObject=MediaStream;
        video.play();
    })
    .catch("there is problem in connection")
}

//---------------------------------------------------------------------------------

// navigator.getBattery()

navigator.getBattery()
.then(battery=>{
   
     console.log("Battery charging: "+battery.charging);
      console.log("Remaining time to fully charge: "+battery.chargingTime);
      console.log("Remaining time to discharge: "+battery.dischargingTime);
      console.log("Battery level: "+battery.level*100+"%");
   
  });


  //????----Bluetooth.requestDevice(), serviceWorker or USB.requestDevice()--- ??????





//---------------------------------
//Promise that resolves after set time

let millisecond= new Promise((millisecondsToResolve,reject)=>{
  setTimeout(()=>{
    millisecondsToResolve(6000)
  },3000)
 

})
millisecond.then((answer)=>{
 console.log("I am called asynchronously",answer)
})
.catch((err)=>{
  console.log(err)

})
// //---------------------------------------
//Exercise 2


fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
.then(response=>response.json())
.then(data=> {
  newdata=data.filter(value=> value.running_times>7000)
  //movies that having running times above 7000
  console.log("movies that having running times above 7000",newdata)
  return newdata
})
.then(data=>{
  //movies title
  let  longMovieTitles=data.map(value=>value.title)
  console.log("long movies title",longMovieTitles)
  return data;
})
.then(data=>{
  //bad movies which rating less than 7
  badMovies=data.filter(value=>value.rating<7)
  console.log("bad movies which rating less than 7",badMovies);
  return badMovies;

})
.then(data=>{
  //Log out an array of bad movies since year 2000
  let badMoviesSince2000=data.filter(value=>value.year>=2000)
  console.log("an array of bad movies since year 2000",badMoviesSince2000)
  return badMoviesSince2000;
})
.then(data=>{
  let badMoviesTitleSince2000=data.map(value=>value.title)
  console.log("the titles of the bad movies since year 2000",badMoviesTitleSince2000)
})


// //--------------------------------------------------------------------

//Fetching and waiting

const deneme=new Promise((resolve)=>{
  fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
  .then(response=>{
    setTimeout(()=>{
      if(response.status===200){
        resolve(response.json())
      }

    },3000)
    
  })

})
deneme
.then(value=>console.log(value))








//-------------------------------------------------------------
// geo Rewrite time 

var getPosition = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

getPosition()
  .then((position) => {
    console.log(position);
  })
  .catch((err) => {
    console.error(err.message);
  });


//-------------------------------------------



