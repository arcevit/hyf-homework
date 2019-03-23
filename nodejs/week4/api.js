/* eslint-disable no-undef */
let express = require('express');
let app=express();
let router=express.Router();
let bodyParser=require('body-parser');

let expressValidator=require('express-validator');
let fs = require('fs');
let studentlist = JSON.parse(fs.readFileSync('student.json', 'utf8'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

router.route('/:name')
.get((req,res)=>{
    let thestudent = studentlist.find(eleman => eleman.name === req.params.name);
    if (!thestudent) {
        return res.status(404).send('the mention name is not avaiable');
    }
    res.send(thestudent);
  

})
.put((req,res)=>{
    req.checkBody('class','should not be empty bro!!!').notEmpty();
    req.checkBody('class','class is only a single character').len(1,1);
    req.checkBody('email','email shoul not empty bro').notEmpty();
    req.checkBody('email','this is email').isEmail();
    req.checkBody('email','email contains min 4 character and max 15').len(4,45);
    req.checkBody('phone','not empty').notEmpty();
    req.checkBody('phone','phone contain 8 character').len(8,8);

    let errors = req.validationErrors();
    if(errors){
        console.log(`errors:${JSON.stringify(errors)}`);
       res.end('something wrong brooo!!!');
       throw errors;
    }
    //look up the json file

    let thestudent = studentlist.find(eleman => eleman.name === req.params.name);
    //if not exist return 404
    if (!thestudent) {
        return res.status(404).send('the mention name is not avaiable');
    }
    //upadate the data
    //returned updated data

    thestudent.class = req.body.class;
    thestudent.email = req.body.email;
    thestudent.phone = req.body.phone;

    fs.writeFile('student.json', JSON.stringify(studentlist), function () {console.log('added');});
    res.send(JSON.stringify(thestudent));
   

})
.delete((req,res)=>{
    let thestudent = studentlist.find(eleman => eleman.name === req.params.name);
    //if not exist return 404
    if (!thestudent) {
        return res.status(404).send('the mention name is not avaiable');
    }
    let allNames=studentlist.map(eleman=>eleman.name);
    let index=allNames.indexOf(thestudent.name);
    studentlist.splice(index,1);


    fs.writeFile('student.json', JSON.stringify(studentlist), function () {console.log('added');});
    res.send(JSON.stringify(thestudent));
    

});

router.post('',(req, res) => {  
    req.checkBody('name','hey.').notEmpty();
    req.checkBody('name','name contains min 3 character and max 15').len(3,15);
    req.checkBody('class','should not be empty bro!!!').notEmpty();
    req.checkBody('class','class is only one character').len(1,1);
    req.checkBody('email','email shoul not empty bro').notEmpty();
    req.checkBody('email','this is email').isEmail();
    req.checkBody('email','email contains min 4 character and max 15').len(4,45);
    req.checkBody('phone','not empty').notEmpty();
    req.checkBody('phone','phone contain 8 character').len(8,8);

    let errors = req.validationErrors();
    if(errors){
        console.log(`errors:${JSON.stringify(errors)}`);
       res.end('something wrong brooo!!!');
       throw errors;
    }
 
    const addStudent = {
        "name": req.body.name,
        "class": req.body.class,
        "email": req.body.email,
        "phone": req.body.phone
    };
    const mentionstudent = studentlist.find(eleman => eleman.name === req.body.name);

    if(mentionstudent){
        return res.status(422).send('the mention name is already exist!!!');
    }

    studentlist.push(addStudent);
    fs.writeFile('student.json', JSON.stringify(studentlist),function(){console.log('added');});


res.send(addStudent);


});






module.exports=router;
