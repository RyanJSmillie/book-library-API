module.exports = (connection, Datatypes) => {
    const schema = {
        name: Datatypes.STRING,
        email: Datatypes.STRING,
    };

    const ReaderModel = connection.define('Reader', schema);
    return ReaderModel;
}