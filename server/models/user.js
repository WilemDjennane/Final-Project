const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Define user Schema
const userSchema = new mongoose.Schema({
    img: {
        type: String
    }
})

// Generate user Token
userSchema.methods.generateAuthToken = async function() {
    const generateUserToken = jwt.sign({ _id: this._id.toString() }, 'leBoss')

    this.tokens = this.tokens.concat({ generateUserToken })
    await this.save()
    return generateUserToken
}


userSchema.statics.findByCredentials = async(email, password) => {
    const findEmail = await User.findOne({ email })

    if (!findEmail) {
        throw new Error('Unable to login!')
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)

    if (!isPasswordMatch) {
        throw new Error('Unable to login!')
    }

    return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function(next) {

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

// Export User model
module.exports = User