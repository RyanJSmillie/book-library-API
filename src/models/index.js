const Sequelize = require('sequelize');
const ReaderModel = require('./reader');
const BookModel = require ('./book')

const { DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_USER } = process.env;

const setUpDatabase = () => {
    const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        port: DB_PORT,
        dialect: "mysql",
        logging: false,
    });

    const Book = BookModel(connection, Sequelize)
    const Reader = ReaderModel(connection, Sequelize)

    connection.sync({alter: true});

    return {
        Reader, 
        Book
    };
};

module.exports = setUpDatabase();