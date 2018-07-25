import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    hello_world: {type: String, required: true, unique: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

export const User = mongoose.model('HelloWorld', Schema)
