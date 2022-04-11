import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($taskText: String!) {
    addTask(taskText: $taskText) {
      taskText
      completed
      createdAt
    }
  }
`

export const REMOVE_TASK = gql`
    mutation removeTask($_id: ID!) {
      removeTask(_id: $_id) {
        taskText
        _id
      }    
    }
`;

export const SAVE_KAST= gql`
    mutation saveKast($kastId: String!, $kastText: String) {
        saveBook(kastId: $kastId, kastText: $kastText) {
            username
            savedKasts {
                kastId
                kastText
            }
        }
    }
`;

export const REMOVE_KAST = gql`
    mutation removeKast($kastId: String!) {
        removeKast(kastId: $kastId) {
            username
            savedKasts {
                kastId
                kastText
            }
        }    
    }
`;
