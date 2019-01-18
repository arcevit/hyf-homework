

 function threeCallback(e){
      if(e%3===0){
        document.body.style.backgroundColor="rgb(129, 216, 232)";

         return "exactly divisible by 3"

        }else{
            return "not exactly divisible by 3"
        }
    }
 function fiveCallback(e){
    if(e%5===0){
        document.body.style.backgroundColor="rgb(247, 239, 96)";

        return "exactly divisible by 5"
      }else{
          return "not exactly divisible by 5"
      }
  }
 


  let btnDivider=document.querySelector('.btn_divider');

  btnDivider.addEventListener("click",()=>{
        let y=document.querySelector('.number_input').value;
        console.log("you clicked me!!!");
      if(y===""){
          alert("enter a number")
      }else if(y%3===0 && y%5===0)
      {
           document.body.style.backgroundColor="white";
           console.log("can be divisible by both")
      }else
      {
        console.log("the number is "+y);
        console.log(threeCallback(y),fiveCallback(y));
       

      }
      
  })


 