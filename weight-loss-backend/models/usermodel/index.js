const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema= new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4
    },
    weight: {
        type: Number,
        required: true,
        trim: true,
        minlength: 2,
        maxlenght: 3
    },
    desiredWeight: {
        type: Number,
        required: true,
        trim: true,
        minlength: 2,
        maxlenght: 3
    },
    password: {
        type: String,
        required: true,
        minlenght: 6,
        maxlength: 12,
        trim: true
    },
    dailyCals: {
        type: Number,
        required: false,
        minlength: 3, 
        maxlength: 4
    },
    JournalInfo: [{ type: Schema.Types.ObjectId, ref: 'Journal' }],
    }, {
        timestaps: true,
        
    });

    const User = mongoose.model('User', userSchema);
    module.exports = User;
