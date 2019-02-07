function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.classList.add(`gradient-${getRandomInt(1,4)}`);

//select Thumb up and Thumb down buttons

const accept=document.querySelector('.accept');
const reject=document.querySelector('.reject');
//select all Li s in the ul 
let allLi=document.querySelectorAll('li')
 // using eventListeners
accept.addEventListener("click",animateLiOut)
reject.addEventListener("click",animateLiOut)


let n=0;
function animateLiOut(e){
   
     return new Promise((resolve,reject)=>{
         console.log(e.target.innerHTML)

         //while clicking Thumb up button resolves with move the li to right
        if(e.target.className==="accept" || e.target.innerHTML==="Thumbs up" || e.target.innerHTML==="👍"){
            resolve(allLi[n].style.transform="translateX(1000px) scale(2)");
        }
         //while clicking Thumb up button resolves with move the li to left
         else if(e.target.className==="reject"  ||e.target.innerHTML==="Thumbs down"  || e.target.innerHTML==="👎"){
            resolve(allLi[n].style.transform="translateX(-1000px) scale(2)");
        }else{
            reject("the promise is  rejected")

        }
    
    })
    .then(()=>{
        //call next sibling to visible and enlarge it
        allLi[n+1].style.transform="scale(1)";
        allLi[n+1].style.opacity="1";  
        
        n++;
    })
   
}






























