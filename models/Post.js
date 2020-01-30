const db = require('./db');

const Post = db.sequelize.define("postagens",{
  titulo:
  {
    type:db.Sequelize.STRING
  },
  conteudo:
  {
      type:db.Sequelize.TEXT
  }

})

//Comando para criar a tabela no mysql
//Post.sync({force:true});

module.exports = Post;
