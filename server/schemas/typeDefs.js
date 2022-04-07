//file for defining every piece of data that client can expect to work with throught a query or mutation
// think of this file as defining the API endpoint + the exact data and parameters tied to that endpoint

// import gql tagged template fx
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        tasks: [Task]
    }
    # instructing tasks query so that each task returns this info
    type Task {
        _id: ID
        taskText: String
        createdAt: String
        username: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(username: String): User
        tasks: [Task]!
        task(_id: ID!): Task
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addTask(taskText: String!): Task
        removeTask(taskText: String!): User
    }
`;

module.exports = typeDefs;
