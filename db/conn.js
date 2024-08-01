const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('rel_1_n', 'root', 'senai',{
    host: 'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('Conexão realizada com sucesso')
}).catch((err)=>{
    console.error('Erro de conexao com o banco de dados',err)
})

module.exports = sequelize