const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Post = require('./models/Post.js');
//Config
//Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set("view engine", "handlebars")



//body-bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas

app.get("/deletar/:id", function (req, res) {
  Post.destroy({ where: { "id": req.params.id } }).then(function () {
    res.send("Postagem deletada com sucesso!");
  }).catch(function (erro) {
    res.send("Erro ao deletar postagem " + erro);
  })
})

app.get("/", function (req, res) {
  Post.findAll({ order: [['id', 'DESC']] }).then(function (posts) {
    res.render("home", { posts: posts });
  })
});

app.get("/cad", function (req, res) {
  res.render('formulario');

  app.post('/add', function (req, res) {

    Post.create({
      titulo: req.body.titulo,
      conteudo: req.body.texto
    }).then(function () {
      res.redirect('/');
    }).catch(function (erro) {
      res.send("Erro ao criar post " + erro);
    })

  });


})

app.listen(8080, function () {
  console.log("Servidor rodando na URL localhost:8080");
});
