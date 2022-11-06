const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./NewOrder');

const NewOrder = mongoose.model('newOrder');

const password = 'aviram2020';
const mongoUrl = `mongodb+srv://koralsabbah:${password}@cluster0.pqxntwx.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected',()=>{ 
    console.log('connected to mongo');
});
mongoose.connection.on('error',(err)=>{ 
    console.log('error',err);
});



app.get('/', (req, res) => {
    res.send("welcome");
})

app.listen(3000, () => {
    console.log("server running");
})