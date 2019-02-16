
const form=document.getElementById('cart-form');
const nameElement=document.querySelector('#name')
const priceElement=document.querySelector('#price')
const cardBodyElement=document.querySelectorAll('.card-body')[1]
const totalElement=document.querySelector('#total')

//
//exchange convert input and button
let outputInput=document.getElementById('dkk');
let changeButton=document.getElementById('change');

// it functions for converting total price Euro to DKK currency


function convert(){
    // let amount= amountInput.value;
    let amount=totalElement.textContent;
    const product=new Product(name,amount);
    product.getPrice()


}








//rendering Shopping cart to user interface
class UI{
    constructor(){

    }
    addItemToUi(newItem){
     const itemList=document.querySelector('#carts');

     itemList.innerHTML+=`
                                            <tr>
                                            
                                            <td>${newItem.name}</td>
                                            <td>${newItem.price}€</td>
                                            <td><a href="#" id = "delete-item" class = "btn btn-danger">Delete Item</a></td>
                                            </tr> `
    }
    removeItemFromUI(element){
        element.parentElement.parentElement.remove();

    }

    clearInput(element1,element2){
  element1.value="";
  element2.value="";
    }
}

//_______________________________________________________





class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
                             }
                             getPrice(){


                                console.log(this.price)

                                fetch('https://api.exchangeratesapi.io/latest')
                                .then((response)=>{ 
                                    return response.json()})
                                .then((data)=>{
                                    let rate=data.rates.DKK;                               
                                    outputInput.value =this.price*rate;
                                  
                                })


                             }
             }



class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        // Implement functionality here
     
        this.products.push(product)
        
    }

    removeProduct(product) {
        // Implement functionality here

        let priceArray=  this.products.map(element=>element.price)
        let index=  priceArray.indexOf(product)
        this.products.splice(index,1)
    }

    getTotal() {

     
        // Implement functionality here
        let priceArray=  this.products.map(element=>element.price)
        let totalPrice=0;
        for (let i = 0; i < priceArray.length; i++) {
            const element = priceArray[i];
            totalPrice=Number(totalPrice)+Number(element);
            
        }
        console.log("Total Price : ",totalPrice)  
        totalElement.textContent=totalPrice;


}

    renderProducts() {
        // Implement functionality here

    }

    getUser() {
        // Implement functionality here
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response=>response.json())
        .then(data=>{ data.forEach(element => {
            console.log(element.username)
            
        });})
            
    }
}





//to start UI

const ui=new UI();
const newItem=new Product(name,price);
const shoppingCart=new ShoppingCart([]);






//all eventListeners

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addItem)
    cardBodyElement.addEventListener("click",removeItemFromCart)
    changeButton.addEventListener("click",convert)

}

//remove Items from carts this function removes items from UI and shoppingCart Class

function removeItemFromCart(event){

    if(event.target.id==='delete-item'){
        

        shoppingCart.removeProduct(event.target.parentElement.previousSibling.previousSibling.textContent)

        ui.removeItemFromUI(event.target);
        console.log("after deleting remaining Item in Cart is...",shoppingCart)
        shoppingCart.getTotal();


    }

}





function addItem(event){
 
    const name=nameElement.value;
    const price=priceElement.value;

    if(name==="" || price==="" )
    {
        //give error
    }else{
    
        const newItem=new Product(name,price);
       
        shoppingCart.addProduct(newItem)
        shoppingCart.getTotal()
        console.log(shoppingCart)
        


        ui.addItemToUi(newItem)  //add item to UI
    }


    ui.clearInput(nameElement,priceElement)




    event.preventDefault();

}


//print out all users from above api
shoppingCart.getUser();



//_________________________________________

