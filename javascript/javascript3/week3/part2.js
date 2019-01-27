console.log('Script loaded');



let valueProduct=document.querySelector('.product-row');
let sortClass=document.getElementById('sort-class');
let searchFilter=document.getElementById('search-filter');




function addItemToLi(name,price,rating,shipsTo){
    let liRow=document.createElement('div');
    liRow.className="li-div";

    valueProduct.append(liRow);
    let liRowContents=`
    <li>
    <div class="name">${name}</div>
    <div class="price">${price}</div>
    <div class="rating">${rating}</div>
    <div class="ships-to">${shipsTo}</div>
    <button class="add-to-cart">Add to cart</button>
</li>`

liRow.innerHTML=liRowContents;

}

    
function EventListenerFunctions(){
    sortClass.addEventListener("change",sortPriceOrName)
    valueProduct.addEventListener("click",addToCart)
    searchFilter.addEventListener("keyup",filterItems)

};
    
EventListenerFunctions();

function addToCart(e){
    let parent;
    let child;
    

    if(e.target.className==="add-to-cart")
    parent=e.target.parentElement;
    child=parent.querySelectorAll('div')[1].textContent;
    // console.log(parent)
    console.log(child);
    
    console.log("soon it will add")
}

function filterItems(e){
    let filterValue=e.target.value.toLowerCase();
    let allListItems=document.querySelectorAll(".li-div");
    allListItems.forEach(value=>{
        const text=value.textContent.toLocaleLowerCase();
        text.indexOf(filterValue)===-1 ? value.setAttribute("style","display:none ! important") :value.setAttribute("style","display:block")
    })
}



function sortPriceOrName(){


getAvailableProducts();
let productArray=getAvailableProducts();


let sortValue=sortClass.value;
let newProductArray;

if (sortValue==='cheap'){

            valueProduct.innerHTML="";
            newProductArray=productArray.map((value)=>value);
            newProductArray.sort((a,b)=>a.price-b.price);
            console.log(newProductArray)
            
        } 
        else if(sortValue==='expensive')

        {

            valueProduct.innerHTML="";
             newProductArray=productArray.map((value)=>value);
            newProductArray.sort((a,b)=>b.price-a.price);
            console.log(newProductArray)
        
        }
       else  if(sortValue==='name')
        {
            valueProduct.innerHTML="";
            newProductArray=productArray.map((value)=>value);
            newProductArray.sort((a,b)=>{
                let A=a.name.toUpperCase();
                let B=b.name.toUpperCase();
                if (A<B){
                return -1;
            } 
            if(A>B){
                return 1;
            }
                return 0;
                
        });
            console.log(newProductArray)
                
        }else
        {
           return;
        }
      
    newProductArray.forEach(value=>{addItemToLi(value.name,value.price,value.rating,value.shipsTo)})

}