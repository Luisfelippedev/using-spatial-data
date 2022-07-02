const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models/db');
const { createTable } = require('./models/db');


// Create table in DataBase
    (async()=>{
        await createTable();
    })()

// Config

    // Template Engine 
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // body-parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());    

// Rotas
    app.get('/', (req, res)=>{
        res.render('maps.handlebars');
    })

    app.get('/searchMarker', db.searchMarker);

    app.post('/addMarker', db.saveMarker);


// Definindo Porta
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.. Ctrl + C para derrubar...');
})


