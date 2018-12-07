let name="Hakki Suman";
let dateOfB="september,29,1984";
let mobile="+45 71615131";
let hashtag1="   ######";
let hashtag2=" ##       ##";
let hashtag3="#";




console.log('Name:'+ name);
console.log('DOB:'+ dateOfB);
console.log('mobile:' + mobile);

console.log(hashtag1);
console.log(hashtag2);
for(var i=1;i<6;i++){
    console.log(hashtag3);
}
console.log(hashtag2);
console.log(hashtag1);

//Step 3: Javascript warm up part two
//1.)

//Indonesian

console.log('hello dunia!');

//Italian
console.log('Ciao, mondo');

//Spanish
console.log('Hola, mundo!');


//2.)

var a=Math.round(7.25);
console.log(a);


//3.)

var myArray=["calf","dogy","babypigs"];
console.log(myArray[2]);

//4.)
let myString="this is a test";
let s=myString.length;
console.log(s);


//5.)

let bir="hi";
let iki=34;
let uc=true;
let dort=["Saab", "Volvo", "BMW"];

console.log(bir);
console.log(iki);
console.log(uc);
console.log(dort[1]);

//6.)

console.log(typeof bir);
console.log(typeof iki);
console.log(typeof uc);
console.log(typeof dort);

//Age-ify (A future age calculator)

let yearOfBirth=1987;
let yearFuture=2027;
let ageFuture=yearFuture-yearOfBirth;
console.log('You will be '+ageFuture+ ' years old in '+ yearFuture);

//Housey pricey (A house price estimator)
let wideforP=8;
let heightforP=10;
let deepforP=10;
let volumeInMetersforP=wideforP*heightforP*deepforP;
let gardenSizeInM2forP=100;
let housePriceforP = volumeInMetersforP * 2.5 * 1000 + gardenSizeInM2forP * 300;
console.log('The house costs for Peter '+housePriceforP);


let wideforJ=5;
let heightforJ=11;
let deepforJ=8;
let volumeInMetersforJ=wideforJ*heightforJ*deepforJ;
let gardenSizeInM2forJ=70;
let housePriceforJ = volumeInMetersforJ * 2.5 * 1000 + gardenSizeInM2forJ * 300;
console.log('The house costs for Julia '+housePriceforJ);


//Ez Namey (Startup name generator) (Optional)
let startupName;

let firstWords=["respectfully","hope","good","awesome","super","nice","polite","cute","easy","good"];

let secondWords=["panctual","kind","best","lovely","happy","goodness","soft","Corporate","sweat","vice"];
const randomNumber = Math.floor(Math.random()*10)+0;

console.log(secondWords[randomNumber],firstWords[randomNumber]);

//////////////////


































