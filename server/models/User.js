const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const kastSchema = require('./Kast');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must be a valid email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    savedKast: [kastSchema]
    // tasks: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Task'
    //   }
    // ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
);


userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('taskCount').get(function() {
  return this.savedKast.length;
});

const User = model('User', userSchema);

module.exports = User;
