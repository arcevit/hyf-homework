
let express=require('express');
let app=express();
let fs=require('fs');
let obj = JSON.parse(fs.readFileSync('index.json', 'utf8'));


// list all students
app.get('/list',(request,response)=>{

    response.end(JSON.stringify(obj))
})

//add new students
app.get('/add',(request,response)=>{
    let newStudent=
        {
            "name": request.query.name,
            "class": request.query.class,
            "email": request.query.email,
            "phone": request.query.phone
        }
        obj.push(newStudent);
      fs.writeFile('index.json',JSON.stringify(obj),function(err){console.log('added')})

    response.end(JSON.stringify(obj))
})


//find name of a student of HYF
app.get('/search',(request,response)=>{
    let findName=obj.find(element=>element.name===request.query.name)
    response.end(JSON.stringify(findName))
})



//filter students according to their class  
app.get('/filter',(request,response)=>{
    let filterByClass=obj.filter(element=>element.class===request.query.class)
    response.end(JSON.stringify(filterByClass))
})



// edit a student by name
app.get('/edit',(request,response)=>{
    let allStudentNames=obj.map(element=>element.name)
    let indexOfStudent=allStudentNames.indexOf(request.query.name)
    
   if(indexOfStudent !== -1){
       obj[indexOfStudent]={
        "name": request.query.name,
        "class": request.query.class,
        "email": request.query.email,
        "phone": request.query.phone
                        }  
   };
    fs.writeFile('index.json',JSON.stringify(obj),function(err){console.log('editted')})
    response.end(JSON.stringify(obj))
})


//delete a student by searching  the name
app.get('/delete',(request,response)=>{
    let names=obj.map(element=>element.name)
    let indexStudent=names.indexOf(request.query.name)
    console.log(indexStudent)
    obj.splice(indexStudent,1);

    fs.writeFile('index.json',JSON.stringify(obj),function(err){console.log('deleted')})
    response.end(JSON.stringify(obj))
})




app.listen(8000)



// READ ME

// 1)express module has been used  so that
// it is recommended to install express module to your file or globally

// 2)due to lack of User Interface we will be use browser url to make required steps

// ------------------------------
// for add new student

// we have to browse  http://localhost:8000/add
// for adding new student

// http://localhost:8000/add?name=Kerry&class=4&email=kerry@hotmail.com&phone=02343434
//  name,class,email and phone values should change for adding  a new student

// -----------------------------------

// for search a student by name
// http://localhost:8000/search?name=Kerry

// ---------------------------------------
// for filter required class 

// http://localhost:8000/filter?class=4


// --------------------------
// for edit a student by selecting student`s name

// use browser 
// http://localhost:8000/edit?name=Kerry&class=4&email=kerry@hotmail.com&phone=02343434

// name,class,email and phone values should be changed for editing  a selected student

// ------------------------------------------------------------
// for delete a student by selecting student`s name

// use browser 
// http://localhost:8000/delete?name=Kerry

// can be deleted by selecting student name

// all result will be displayed UI as a json mode
