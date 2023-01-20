
require('marko/node-require');
var markoExpress = require("marko/express");
const express = require('express');

//EXPORTANDO DAO DO DADOS AVALIADOR
const AvaliadorDao = require('./dao/avaliador-dao');
const dao = new AvaliadorDao();

/*EXPORTANDO DAO DADOS GERIAS
const DadosGeraisDao = require('./dao/dadosgerais-dao');
const daodadosgerais = new DadosGeraisDao();*/


//EXPORTANDO DAO DO QUESTIONARIO
const QuestionarioDao = require('./dao/questionario-dao');
const daoquestionario = new QuestionarioDao();

const bodyParser = require('body-parser');


const app = express()

app.use(markoExpress());
app.use(bodyParser.urlencoded());




//CONFIGURANDOA MENSAGEMS FLASH
const session = require('express-session');
const flash = require('connect-flash');

app.use(session({
    secret: 'geeksforgeeks',
    seveUninitialized: true,
    resave: true
}));
app.use(flash());




//TELA DE INICIO

app.get('/', function (req, res) {

    let response = {
        error_messages: req.flash('error'),
        success_messages: req.flash('success'),
        results: []

    }

    dao.list().then((results) => {

        response.results = results;
        res.marko(require('./templates/inicio.marko'), response);

    }).catch((err) => {
        console.log('ocorreu um erro');
        console.log(err);
        response.error_messages.push('Ocorreu algum erro no servidor');
        res.marko(require('./templates/inicio.marko'), response);
        /* response.error_messages.push('Ocorreu algum erro no servidor');
         res.marko(require('./templates/inicio.marko'), results);*/

    })


});


// rota para puxar o modelo de formulario avalidor/dados gerias


app.get('/form', function (req, res) {
    res.marko(require('./templates/form.marko'));
});


app.get('/formGeral', function (req, res) {
    res.marko(require('./templates/formGeral.marko'));

});



// CADASTRO DO NOVO AVALIADOR E DADOS GERAIS (enviar ao BD)

app.post('/form', function (req, res) {
    //console.log(req.body);

    // dao.save(req.body);
    //res.redirect('/formGeral')
    dao.save(req.body).then((results) => {
        console.log('success');
        res.redirect('/formGeral')

    }).catch((err) => {
        console.log(err);
        console.log('erro',);
        res.redirect('/');
    });


});


app.post('/formGeral', function (req, res) {
    // console.log(req.body);
    //dao.saveDgeral(req.body).then(res);
    // res.redirect('/')



    dao.saveDgeral(req.body).then((results) => {
        console.log('success');
        res.redirect('/')

    }).catch((err) => {
        console.log(err);
        console.log('erro',);
        res.redirect('/');
    });






});


/*if (req.body.id) {
    daoquestionario.update(req.body).then((result) => {
        req.flash('success')
        res.redirect('/')
    }).catch((err) => {
        console.log(err)
        req.flash('error')
        res.redirect('/')
    })


}*/

/*app.get('/form/salvar/:id', function (req, res) {
    daoquestionario.update(req.params.id).then((result) => {

        req.flash('sucess');
        res.redirect('/');

    }).catch((err) => {

        console.log(err);
        req.flash('error');
        res.redirect('/');
    });


});*/

/*app.get('/salvar/:id', function (req, res) {

    daoquestionario.update(req.params.id);
    res.redirect('/');



});*/




// TELA DE FORM (CADASTRO AVALIADOR/DADOSGERAIS)
//puxar dados por ID

app.get('/form/:id', function (req, res) {
    let avaliador = dao.findById(req.params.id);

    res.marko(require('./templates/form.marko'), avaliador);
});



//ROTA PARA TELA DE QUESTIONARIO

app.get('/questionario1', function (req, res) {
    res.marko(require('./templates/questionario1.marko'));
});

app.get('/questionario2', function (req, res) {
    res.marko(require('./templates/questionario2.marko'));
});
app.get('/questionario3', function (req, res) {
    res.marko(require('./templates/questionario3.marko'));
});


//ROTA SALVAR TELA DE QUESTIONARIO



app.post('/questionario1', function (req, res) {
    //console.log(req.body);
    daoquestionario.saveD1(req.body).then((results) => {
        console.log('success');
        res.redirect('/questionario2')

    })

});




app.post('/questionario2', function (req, res) {
    //console.log(req.body);

    daoquestionario.saveD2(req.body).then((results) => {
        console.log('success');
        res.redirect('/questionario3')

    })


});



app.post('/questionario3', function (req, res) {
    //console.log(req.body);
    daoquestionario.saveD3(req.body).then((results) => {
        console.log('success');
        res.redirect('/')

    }).catch((err) => {
        console.log(err);
        console.log('erro',);
        res.redirect('/');
    });

});






//ROTA PARA TELA DE RESULTADO DO QUESTIONARIO






app.get('/resultado/:id', function (req, res) {

    daoquestionario.update(req.params.id);

    daoquestionario.findById1(req.params.id).then((result) => {


        if (result.length > 0) {
            avaliadorgeral = result[0]
            res.marko(require('./templates/resultado.marko'), avaliadorgeral);

        } else {
            req.flash('error', 'Formulario do avaliado ' + req.params.id + ' não preechido');
            res.redirect('/');
        }

    }).catch((err) => {
        console.log(err);
        // req.flash('error', 'Ocorreu um erro  ID ' + req.params.id);
        req.flash('error', 'Formulario não respondido ' + req.params.id);
        res.redirect('/');

    });




});








//ROTA PARA PUXAR DADOS DO RESULTADO DO QUESTIONARIO






app.listen(3000, '0.0.0.0', function () {
    console.log(`Servidor Iniciado ...`);
});
