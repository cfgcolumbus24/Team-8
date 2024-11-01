const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// ============================================================================
const commentSchema = new Schema({
    pid: { type: Schema.Types.ObjectId, ref: 'Post' },
    cid: { type: Schema.Types.ObjectId, ref: 'Comment' },
    uid: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    dtTime: { type: Date, default: Date.now },
    text: String,
    resource: String,
});
// ============================================================================
commentSchema.virtual('user', {
    ref: 'User',
    localField: 'uid',
    foreignField: '_id',
});

commentSchema.virtual('post', {
    ref: 'Post',
    localField: 'pid',
    foreignField: '_id',
});
// ============================================================================
module.exports = mongoose.model('Comment', commentSchema);
