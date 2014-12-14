var mongoose = require('mongoose');

var policySchema = new mongoose.Schema({
    policyText: String,
    policyUrl: String,
    isActive: Boolean,
    createdAt: Date,
    group: { type : mongoose.Schema.ObjectId, ref : 'Group' },
    coach: { type : mongoose.Schema.ObjectId, ref : 'User' },
    gender: { type : mongoose.Schema.ObjectId, ref : 'Gender' },
    keywords: [{ type : mongoose.Schema.ObjectId, ref : 'Keyword' }],
    members: [{ type : mongoose.Schema.ObjectId, ref : 'PolicyEmail' }]
});

module.exports = mongoose.model('Policy', policySchema);
