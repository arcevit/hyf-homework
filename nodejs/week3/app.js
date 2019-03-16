let express = require('express');
let app = express();
app.use(express.json())
let fs = require('fs');
let studentlist = JSON.parse(fs.readFileSync('student.json', 'utf8'));

app.get('/api/:name', (req, res) => {
    let thestudent = studentlist.find(eleman => eleman.name === req.params.name)
    if (!thestudent) {
        return res.status(404).send('the mention name is not avaiable');
    }
    res.send(thestudent);
    res.end();
});



app.post('/api', (req, res) => {
    let addStudent = {
        "name": req.body.name,
        "class": req.body.class,
        "email": req.body.email,
        "phone": req.body.phone
    }

    studentlist.push(addStudent);
    fs.writeFile('student.json', JSON.stringify(studentlist), function (e) {
        console.log("added")
    })


    res.send(addStudent)
    res.end();
});


app.put('/api/:name', (req, res) => {
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

    fs.writeFile('student.json', JSON.stringify(studentlist), function (e) {console.log('added')})
    res.send(JSON.stringify(thestudent))
    res.end();
});


app.delete('/api/:name', (req, res) => {
    let thestudent = studentlist.find(eleman => eleman.name === req.params.name);
    //if not exist return 404
    if (!thestudent) {
        return res.status(404).send('the mention name is not avaiable');
    }
    allNames=studentlist.map(eleman=>eleman.name);
    index=allNames.indexOf(thestudent.name);
    studentlist.splice(index,1);


    fs.writeFile('student.json', JSON.stringify(studentlist), function (e) {console.log('added')})
    res.send(JSON.stringify(thestudent))
    res.end();

});


app.listen(3003);