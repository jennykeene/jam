// this file stores all the GraphQL query requests 

import { gql } from '@apollo/client';

export const QUERY_TASKS = gql`
    query getTasks {
        tasks {
            _id
            taskText
            completed
        }
    }
`;
export const QUERY_TASK = gql`
    query getTask {
        _id
    }
`
export const QUERY_USER = gql`
    query user ($username: String!) {
        user(username: $username) {
            _id
            username
            email
            myKasts {
                _id
                kastText
            }
        }
    }
`
//query to retrieve all data related to logged-in user 
export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            myKasts {
                _id
                kastText
            }
        }
    }
`