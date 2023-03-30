var mysqlexperiment = mysqlexperiment || {};

(function (mysqlexperiment) {
    mysqlexperiment.config = {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mgl'
    };
})(mysqlexperiment);

module.exports = mysqlexperiment;

