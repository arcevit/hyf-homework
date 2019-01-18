
 // selection the button for calling location 
  let mapButton=document.querySelector(".map_button");


  // assign variables to find current  latitude and longitude
  let currentLatitude;
  let currentLongitude;


  // having a text to display the current latitude longitude 
  let mapText =document.querySelector('.map_text');
   


  // calling and click event to get map and current coordinates
  mapButton.addEventListener("click",()=>{


    // checking geolocation is available
      if(navigator.geolocation){
          // getting current coordinates of longitude and latitude
          navigator.geolocation.getCurrentPosition((position)=>{
               currentLatitude=position.coords.latitude;
               currentLongitude=position.coords.longitude;
              console.log("current Latitude : "+currentLatitude+"   "+"current Longitude :"+currentLongitude);
              mapText.innerHTML="current Latitude : "+currentLatitude+"   "+" -current Longitude :"+currentLongitude;
              //calling google map when click event occured
              loadMap();

          });
      }else{
          console.log(" geolocation is not supported by your browser");
      }
  });
 
  
  let map;
  function loadMap() {
    let get_mapDiv=document.getElementById('map_div');
    let mapSetting={
        center: {lat:currentLatitude, lng: currentLongitude},
        zoom: 15
      };
    map = new google.maps.Map(get_mapDiv,mapSetting);
  }

  