var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config={
    userName: process.env.dbUserName,
    password: process.env.dbPsw,
    server: process.env.dbServer,
    options:{
        database: process.env.dbName,
        encrypt: true
    }
}
var connection = new Connection(config);
connection.on('connect', function(err){
    if(err){
        console.log(err)
    }
    else{
        queryDatabase()
    }
});

var sqlQuery = ""

function queryDatabase(sqlQuery){
    console.log('Reading rows form the Table...');

    request = new Request(
        sqlQuery,
        function(err, rowCount, rows){
            console.log(rowCount + 'row(s) returned');
            process.exit();
        }
    );

    request.on('row', function(columns) {
        columns.forEach(function(column){
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });
    connection.execSql(request);
}