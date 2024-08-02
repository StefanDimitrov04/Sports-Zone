const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (userData) =>  {
   const user = await User.create(userData);

   const result = getAuthResult(user);
   return result;
}

exports.login = async (email, password) => {

    try {
        const user = await User.findOne({email: email});
        if(!user) {
            throw new Error('Invalid user data!');
        }
            const isValid = await bcrypt.compare(password, user.password);
            if(!isValid) {
             throw new Error("Invalid email or password");
            };
         
            return getAuthResult(user);
        
    } catch (error) {
        throw error;
    }


}


function getAuthResult(user) {
   const payload = {
    _id: user._id,
    email:user.email,
   };

   const token = jwt.sign(payload, "SECRET123", {expiresIn: '2h'});
 
   
   const result = {
    username: user.username,
    _id: user._id,
    email:user.email,
    accessToken: token,
   };

   return result;
}