// crating two functions and one object
const audi= function(){
    console.log("Audi");

};
let opel=function(){
   console.log("Opel");
};
let ford ={key:function ford(){ console.log("Ford")}};

//make array with items that above functions and obje
let myCars=[audi,opel,ford];
// calling each items
myCars.forEach((element) => {
  if(typeof element==="function"){
    element();
  }else
  {
    element.key();
  }
   
    
});

setTimeout(audi,2000)

setTimeout(()=>{
  console.log("second time out which call after 3 minutes")
 outerFunction();
  
},3000)
//outer and inner function
function outerFunction(){
  let outerVariable="opel";
  function innerFunction(){
    let innerVariable="audi";
    console.log("I like  "+outerVariable +"  and  "+innerVariable);

  }
  return innerFunction();
}