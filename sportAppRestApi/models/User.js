const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

UserSchema.pre('save', async function() {
const hash = await bcrypt.hash(this.password, 10);
     this.password = hash;
})

const User = mongoose.model("User", UserSchema);

module.exports = User;