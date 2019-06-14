import gql from 'graphql-tag';

export const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessageMutation($senderId: ID!, $message: String!) {
    createMessage(
      senderId: $senderId,
      message: $message
    ) {
      senderId
      message
    }
  }
`;
