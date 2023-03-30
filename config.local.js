var mysqlexperiment = mysqlexperiment || {};

(function (mysqlexperiment) {
    mysqlexperiment.config = {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'Admin@123',
        database: 'MGL'
    };
})(mysqlexperiment);

module.exports = mysqlexperiment;