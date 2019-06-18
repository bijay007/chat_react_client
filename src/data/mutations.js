import gql from 'graphql-tag';

const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessageMutation($senderId: ID!, $senderName: String!, $message: String!) {
    createMessage(
      senderId: $senderId,
      senderName: $senderName,
      message: $message
    ) {
      senderId,
      senderName,
      message
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($name: String!, $email: String!, $id: ID!) {
    createUser(
      name: $name,
      email: $email,
      id: $id
    ) {
      name,
      email,
      id
    }
  }
`;

export {
  CREATE_MESSAGE_MUTATION,
  CREATE_USER_MUTATION
}
