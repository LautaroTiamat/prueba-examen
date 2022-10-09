const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    versionKey: false,
    timestamps: true
});

UserSchema.methods.toJSON = () => {
    const { password, _id, ...user } = UserSchema.methods.toObject();
    user.uid = _id;

    return user;
}

module.exports = model('Users', UserSchema);