module.exports = (connection, Datatypes) => {
    const schema = {
        title: Datatypes.STRING,
        author: Datatypes.STRING,
        genre: Datatypes.STRING,
        ISBN: Datatypes.STRING
    };

    const BookModel = connection.define('Book', schema);
    return BookModel;
}