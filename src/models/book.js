module.exports = (connection, Datatypes) => {
    const schema = {
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        author: {
            type: Datatypes.STRING,
            allowNull: false
        },
        genre: Datatypes.STRING,
        ISBN: Datatypes.STRING
    };

    const BookModel = connection.define('Book', schema);
    return BookModel;
}