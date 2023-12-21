const connection = require('./dbConfig');

function connectionToDatabase(){
    connection.connect((err) => {
        if (err){
            console.log('Erro ao conectar ao banco de dados')
            console.log(err)
        }else{
            console.log('Conectado ao banco de dados')
        }
    })
}

function disconnectFromDatabase(){
    connection.end((err) => {
        if (err){
            console.log('Erro ao desconectar do banco de dados');
            console.log(err);
        }else{
            console.log('Desconectado do banco de dados');
        }
    })
}

process.on('SIGINT', () => {
    disconnectFromDatabase();
    process.exit();
})

module.exports = {
    connectionToDatabase,
    disconnectFromDatabase,
    connection
};