// this file serves the responses

// graphql error handling
const { AuthenticationError } = require('apollo-server-express');
const { User, Task } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // me method checks if context.user exists...if not, user isn't authenticated & throw auth error
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('tasks')
                return userData
            }
            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('tasks');
        },
        //parent = placeholder parameter so can access username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('tasks')
        },
        tasks: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Task.find(params).sort({ createdAt: -1 });
        },
        // tasks: async () => {
        //     return Task.find({}).populate('taskText');
        // },
    },
    Mutation: {
        
        addUser: async (parent, args) => {
            const user = User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
            if(!user){
                throw new AuthenticationError('Incorrect credentials');
            }
            
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            
            const token = signToken(user);
            return { token, user };
        },
        addTask: async (parent, args, context) => {
            //check if user is logged on by checking for existence of context.user
            if (context.user) {
                const task = await Task.create({ ...args, username: context.user.username });
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { tasks: task._id }},
                    { new: true } //without true flag Mongo return orginal doc instead of updated document
                );
                return task;
            }
            throw new AuthenticationError('You need to login first')
        },
        removeTask: async( parent, { task }, context) => {
            if(context.user) {
                // deleteBook fx from user-controllers.js
                const updatedTasks = await User.findOneAndUpdate(
                    { _id: context.user._id},
                    //pulling deleted book from savedBooks array
                    { $pull: { tasks: task._id }},
                    { new: true }
                );
                // Book is part of User model
                return updatedTasks;
            }
        }
    }
};

module.exports = resolvers;