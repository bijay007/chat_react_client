import gql from 'graphql-tag';

export const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessageMutation($sender: String!, $message: String!) {
    createMessage(
      sender: $sender,
      message: $message
    ) {
      sender
      message
    }
  }
`;
