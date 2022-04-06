const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
  {
    taskText: {
      type: String,
      required: 'You need to leave a task!',
      minlength: 1,
      maxlength: 30
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdDateTime) => moment(createdDateTime).format('MM DD YY [at] hh:mm a')
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Task = model('Task', taskSchema);

module.exports = Task;
