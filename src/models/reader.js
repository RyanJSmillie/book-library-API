module.exports = (connection, Datatypes) => {
    const schema = {
        name: {
            type: Datatypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Required"
                }
            }
        },
        email: {
            type: Datatypes.STRING,
            unique: true,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Required"
                },
                isEmail: {
                    args: true,
                    msg: "Please enter a valid email address"
                },
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Required"
                },
                len: {
                    args: [8, 100],
                    msg: "Password must be longer than 8 characters"
                }
            }
        }
    };

    const ReaderModel = connection.define('Reader', schema);
    return ReaderModel;
}