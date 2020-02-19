const express = require('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const routes = require ('./routes');

const app = express();

mongoose.connect('mongodb+srv://vinicius:32616144@cluster0-nyja9.mongodb.net/week10?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes); 

//Métodos HTTP: GET, POST, PUT, DELETE 

//Tipos de parãmetros:

//Query Params: request.query (filtros, ordenação, paginação, ....etc)
//Route Params: request.params (identificar um recurso na alteração ou remoção)
//Body: request.body(dados para criação ou alteração de registro)



app.listen(3333);