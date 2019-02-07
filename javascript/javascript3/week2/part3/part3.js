function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.classList.add(`gradient-${getRandomInt(1,4)}`);



const accept=document.querySelector('.accept');
const reject=document.querySelector('.reject');

//ul container need to contain to div s that having to some generated tags
const ulContainer=document.querySelector('.ul-container')



reject.addEventListener("click",animateLiOut)
accept.addEventListener("click",animateLiOut)

//fetching json file to send it to the generateHtml function which is dynamic tag generator function

fetch('part3.json')
.then(response=>response.json())
.then(data=>{
    console.log(data)
    data.forEach(element => {
        generateHtml(element)
        
    });
   
})


// creates dynamic tags

function generateHtml(element){
// creating div s as a container for each li element and children of li element
   let div_container=document.createElement('div');
    div_container.className="hyf";
    ulContainer.appendChild(div_container)  
    
    let li_content=`
    <li>
    <h2>${element.title}</h2>
    <span>year:${element.year}</span><br>
    <span>IDM:${element.rating}</span><br>
    <img src="${element.source}" alt="">  
    </li>
    
    `;

    div_container.innerHTML=li_content;  
     
    }


// it functions as part2 homework need to have ulcontainer

let n=0;
function animateLiOut(e){
   
     return new Promise((resolve,reject)=>{
         // by using target  while clicking button it help us to use condition
         // !!!! using e.target seems to redundant but i coud not find other way by google!!!!

        if(e.target.className==="accept" || e.target.innerHTML==="Thumbs up" || e.target.innerHTML==="👍"){
            resolve(ulContainer.children[n].style.transform="translateX(1000px) scale(2)");
        }
         else if(e.target.className==="reject"  ||e.target.innerHTML==="Thumbs down"  || e.target.innerHTML==="👎"){
            resolve(ulContainer.children[n].style.transform="translateX(-1000px) scale(2)");
        }else{
            reject("the promise is  rejected")

        }
    
    })
    .then(()=>{
        ulContainer.children[n+1].style.transform="scale(1)";
        ulContainer.children[n+1].style.opacity="1";  
        
        n++;
    })
   
}


