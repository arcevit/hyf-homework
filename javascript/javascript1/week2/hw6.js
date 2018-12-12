

//hakki suman 


//****/Homework week 6********



// ***Step 3: Javascript warmup part two***


// 1)Create a function that returns an empty object.

function emptyObjectFunction()
{
    let emtyObject={};

//  3) Inside the function, add a key to the object called time with the value of the number 12

    emtyObject.time=12;
    return emtyObject;

}
// 2)Create a new variable called timeObject and assign it to the result of calling the previous function

let timeObject=emptyObjectFunction();

console.log(" -----------------------output 1------------");
console.log(timeObject);

//********************************************************************* */

// 1)  Create a function that returns an array with with 3 empty objects.

function threeObjectFunc()
{
    let myArray=[{},{},{}];
    //  3) Change the array so that all the objects have one key called color. Make every object have a different color
    for (let i = 0; i < myArray.length; i++) {
        colours=["red","blue","yellow"];
          myArray[i].color=colours[i];
        
    }
    return myArray;
}
//  2)Call the function and assign the return of the function to a variable called colorObjects
let colorObjects=threeObjectFunc();
console.log(" -----------------------output 2------------");
console.log(colorObjects);

// 5)   Give the function 3 parameters called color1, color2 and color3. The parameters should 
//         control the color of the 3 objects. color1 sets the color of the first object 

function threeObjectFunction(color1,color2,color3)
{
    let myArray=[{},{},{}];
    for (let i = 0; i < myArray.length; i++) {
        colours=[color1,color2,color3];
          myArray[i].color=colours[i];
        
    }   
    return myArray;
}
console.log(" -----------------------output 3------------");
console.log(threeObjectFunction("red","blue","yellow"));


//*****************************************************************************************************************'

function callDay(days)
{
    let meetingDay =days%7;
    return meetingDay;
}
var d = new Date();
var n = d.getDay();
weekdays=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

console.log(" -----------------------output 4------------");
console.log("today is : "+weekdays[n]);
console.log("How many days to meet :"+17);
console.log("We are meeting on : "+ weekdays[n+callDay(17)]);


//********************************************************************************************************************/

//create a function with two parameters assign empty array and push object into array with two keys which corresponds the function parameters.
function addNote(note,noteId)
{    
    let notes=[];
    let myObject={note:note,noteId:noteId};
   notes.push(myObject);
   return notes;
}
console.log(" -----------------------output 5------------");
console.log(addNote("hi everybody",1));


//****************************************************************************************************** */
// Create a function with id parameter and call the object note from array with id ,if id is not in list output shows ERROR

function getNoteFromId(id){
    let Hiarray=[];
    if (id>=5) {
        return "ERROR!!!";
        
    } else {
        for (let i = 0; i < 5; i++) {
        
            Hiarray.push({id:i,note:"no " +i});
            
        }
       return Hiarray[id];
        
    }
  
     
}



console.log(" -----------------------output 6------------");

console.log(getNoteFromId(6));

//***************************************************************************************' */

//Create a function showAllNotes

function showAllNotes(){
    allNotesArray=[];
    for (let i = 0; i < 7; i++) {
        
        allNotesArray.push({id:i,note:"no " +i});
        
    }
   return allNotesArray;
    

}

console.log(" -----------------------output 7------------");
console.log(showAllNotes());




//********************************************************************** */



//The function automatically figures out what the date is. 

var dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var newDate  = new Date();
let currentDay=newDate.toLocaleDateString("en-US", dateFormat);

//create a function that having three parameters makes list of your daily activity type, duration and date


let activities=[];

function addActivity(date,activity,duration)
{

    activities.push({date:date,activity:activity,duration:duration});
    return activities;

}


console.log(" -----------------------output 8------------");

 addActivity(currentDay,"youtube",30);
 addActivity(currentDay,"facebook",50);
 addActivity(currentDay,"instagram",150);


let dizin=0;
for (let i = 0; i < activities.length; i++) {
   
    dizin =activities[i].duration+dizin;
    
    
}

// showStatus Function specify current current day , total time spend 
function showStatus()

{   
    if (activities==0) {
        return "today is "+currentDay+"add some some activity";
    }
    if (dizin>100) {
        return "today is "+ currentDay+ " you have spend for "+ dizin +" minutes, in "+ activities.length +" activities ;"+"no more activity stop it!!";
    }
    if (dizin>70 &&  dizin<=100) {
        return "today is "+currentDay+"you have spend for "+ dizin +" minutes, in"+activities.length+" activities ;"+" you are about end of your activity";
    }
    if (dizin>0  && dizin<70) {
        return "today is "+currentDay+" you have spend for "+ dizin +" minutes, in"+activities.length+" activities  ;"+" still you can enjoy";
        
    }
  
}

console.log(showStatus());
    




































