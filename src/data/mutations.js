import gql from 'graphql-tag';

export const CREATE_MESSAGE_MUTATION = gql`
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
