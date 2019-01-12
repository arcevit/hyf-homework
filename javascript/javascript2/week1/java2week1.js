//Array of Sprit Animals
const SpritAnimal=["Briggan The Wolf","Uraza The Leopard","Jhi The Giant Panda","Essix The Falcon","Sleipnir",
"Ogopogo","Dragon","Pegasus","Unicorn","Mermaid"];




//Create a span for displaying names and sprit animals
const aSpan=document.createElement('span');
aSpan.className="spanClass";

//select div element
const Cont=document.querySelector('.container1');
Cont.appendChild(aSpan);
    
// catching select element before calling addEventListener

const callSelect=document.querySelector('#select');
//this function help us to select a random sprit animal from above array
function ChFnc(){

    let x=Math.floor(Math.random()*10);
    const txt=document.querySelector('.txt').value;
     aSpan.innerHTML="Name : "+txt+'-'+SpritAnimal[x];
    
}
     
//call  the event for selecting option

callSelect.addEventListener("change",()=>{
  
//try to get for each option's value from select tag
const selectIN=document.querySelector('#select').selectedIndex;
const selectOP=document.querySelector('#select').options;

//console.log(selectOP[selectIN].value);
//to make condition for selected option value and call the click event
if (selectOP[selectIN].value==='click') {
    document.querySelector('.buttonClass').addEventListener("click",ChFnc);
    document.querySelector('.buttonClass').removeEventListener("mouseover",ChFnc);
    
} else {
    document.querySelector('.buttonClass').addEventListener("mouseover",ChFnc);
    document.querySelector('.buttonClass').removeEventListener("click",ChFnc);
    
}

})






