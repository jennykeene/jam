// this file serves the responses

// graphql error handling
const { AuthenticationError } = require('apollo-server-express');
const { User, Task, Kast } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('myKasts')
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('myKasts');
        },
        //parent = placeholder parameter so can access username
        user: async (parent, { username }) => {
            const findUser = User.findOne({ username })
            .select('-__v -password')
            .populate('myKasts')
            return findUser;
        },
        tasks: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Task.find(params).sort({ createdAt: -1 });
        },
        myKasts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Kast.find(params).sort({ createdAt: -1 });
        }
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
            if (context.user) {
                const task = await Task.create({ ...args }); //spread operator: shorthand for listing out all array elements(arguments) one by one
                await Task.findByIdAndUpdate(
                    { _id: task._id },
                    { $addToSet: { tasks: task._id }},
                    { new: true }
                );
                return task;
            }
            throw new AuthenticationError('You need to login first')
        },
        removeTask: async(_, { _id }) => {
            return await Task.findOneAndRemove({_id: _id})
        },
        addKast: async( parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { myKasts: args } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError("You need to login in first!");
        },
        removeKast: async( parent, args, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id},
                    { $pull: { myKasts: args }},
                    { new: true }
                );
                return updatedUser;
            }
        }
    }
};

module.exports = resolvers;