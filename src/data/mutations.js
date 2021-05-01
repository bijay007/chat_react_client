import gql from 'graphql-tag';

const CREATE_PRIVATE_CHAT_MUTATION = gql`
  mutation CreatePrivateChatMutation($senderId: ID!, $senderName: String!, $receiverId: ID!, $receiverName: String!, $message: String!) {
    createPrivateChat(
      senderId: $senderId,
      senderName: $senderName,
      receiverId: $receiverId,
      receiverName: $receiverName,
      message: $message
    ) {
      senderId,
      senderName,
      receiverId,
      receiverName,
      message
    }
  }
`;

const CREATE_PUBLIC_CHAT_MUTATION = gql`
  mutation CreatePublicChatMutation($senderId: ID!, $senderName: String!, $message: String!) {
    createPublicChat(
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
  mutation CreateUserMutation($name: String!, $email: String!, $password: String!, $id: ID!) {
    createUser(
      name: $name,
      email: $email,
      password: $password,
      id: $id
    ) {
      name,
      email,
      id
    }
  }
`;

export {
  CREATE_PRIVATE_CHAT_MUTATION,
  CREATE_PUBLIC_CHAT_MUTATION,
  CREATE_USER_MUTATION
}
