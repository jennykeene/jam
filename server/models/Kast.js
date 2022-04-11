const { Schema, model } = require('mongoose');
const moment = require('moment');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const kastSchema = new Schema(
	{
		kastText: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (createdDateTime) => moment(createdDateTime).format('MM DD YY [at] hh:mm a')
		},
		completed: {
			type: Boolean,
			default: false
		}
	}
);

//const Kast = model('Kast', kastSchema);

module.exports = kastSchema

