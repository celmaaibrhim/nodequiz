const express = require('express');
const app = express();
const port = 5000;


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.get('/', (req,res)=>{
    res.render('index')
})



app.listen(port, console.log('app is up and running on port ' + port))



