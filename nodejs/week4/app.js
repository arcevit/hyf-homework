
let express = require('express');
let app = express();
let bodyParser=require('body-parser');
let expressValidator=require('express-validator');

let routes=require('./api');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());


let logger = function (req, res, next){
    console.info(`GOT REQUEST! ${req.method} ${req.originalUrl}`);
    next(); // Passing the request to the next handler in the stack.
};

app.use(logger);
app.use('/api', routes);

app.listen(3003);


