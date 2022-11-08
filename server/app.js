const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./NewOrder');

app.use(bodyParser.json());




const NewOrder = mongoose.model('newOrder');

const password = 'aviram2020';
const mongoUrl = `mongodb+srv://koralsabbah:${password}@cluster0.pqxntwx.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
    console.log('connected to mongo');
});
mongoose.connection.on('error', (err) => {
    console.log('error', err);
});



app.get('/', (req, res) => {
    res.send("welcome");
})


app.post('/send-data', (req, res) => {

    const order = new NewOrder({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        plants: req.body.plants
    })

    order.save()
        .then(data => {
            console.log(data);
            res.send("success");
        }).catch(err => {
            res.send(err);
        })

})

app.listen(3000, () => {
    console.log("server running");
})