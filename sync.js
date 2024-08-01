const { Fabricante, Produto} = require('./model/associacao')
const conn = require('./db/conn')

async function syncDataBase(){
try{
    await conn.sync({force:true})
    console.log('Tabelas criadas e banco de dados sincronizado')
}catch(err){
    console.error('Erro ao fazer o sincronizado')
}finally{
    conn.close()
    console.log('Fechando conexão do banco de dados')
}
}

syncDataBase()