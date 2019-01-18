

function threeFive(startIndex, stopIndex,threeCallback,fiveCallback) {
    //create an array 
    let myArray=[]; 
     // with the function starIndex parameter and stopIndex parameter number vill be generate in sequence and 
     //will be pushed into array

    for (let i = startIndex; i < stopIndex+1; i++){
        myArray.push(i);
    }
    //for each items of array callback function will check  divisibility
    myArray.forEach((e)=>{
        console.log(threeCallback(e),fiveCallback(e));
    })
       console.log(myArray);  
}

// function that check divisible by 3 or not
 function threeCallback(e){
      if(e%3===0){
         return "exactly divisible by 3"
        }else{
            return "not exactly divisible by 3"
        }
    }

    // function that check divisible by 5 or not

 function fiveCallback(e){
    if(e%5===0){
        return "exactly divisible by 5"
      }else{
          return "not exactly divisible by 5"
      }
  }
 
  threeFive(7,14,threeCallback,fiveCallback);




