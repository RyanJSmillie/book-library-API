module.exports = (connection, Datatypes) => {
    const schema = {
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            // isEmail: true,
        },
        password: {
            type: Datatypes.STRING},
            allowNull: false,
            // len: [8]
    };

    const ReaderModel = connection.define('Reader', schema);
    return ReaderModel;
}