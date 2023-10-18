const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
    }, {
    timestamps: true,
    })

module.exports = mongoose.model('Collection', collectionSchema);

