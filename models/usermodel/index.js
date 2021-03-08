const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema= new Schema ({
    username: {
        type: String,
        unique: true,
        trim: true,
        minlength: 4
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    weight: {
        type: Number,
        trim: true,
        minlength: 2,
        maxlenght: 3
    },
    desiredWeight: {
        type: Number,
        trim: true,
        minlength: 2,
        maxlenght: 3
    },
    dailyCals: {
        type: Number,
        required: false,
        minlength: 3, 
        maxlength: 4
    },
    JournalInfo: [{ type: Schema.Types.ObjectId, refpath: '../journalmodel' }],
    MealPlan: [{type: Schema.Types.ObjectId, refpath: '../mealplanmodel'}]
    }, {
        timestaps: true,
        
    });

    const Users = mongoose.model('User', usersSchema);
    module.exports = Users;
