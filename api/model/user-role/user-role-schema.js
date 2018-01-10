const mongoose = require('mongoose');

const userRoleSchema = mongoose.Schema({
  role: String,
  status: String,
  user: String
});


userRoleSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

userRoleSchema.set('toJSON', {
  virtuals: true
});

module.exports= mongoose.model('Role', userRoleSchema);