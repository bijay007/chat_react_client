import gql from 'graphql-tag';

const PublicChatFragment = gql`
  fragment PublicChat on PublicChat {
    id
    senderId
    senderName
    message
    created
  }
`

const PrivateChatFragment = gql`
  fragment PrivateChat on PrivateChat {
    id
    senderId
    senderName
    receiverId
    receiverName
    message
    created
  }
`

const UserFragment = gql`
  fragment User on User {
    id,
    name,
    email,
    publicChats {
      ...PublicChat
    }
    privateChats {
      ...PrivateChat
    }
  }
  ${PublicChatFragment}
  ${PrivateChatFragment}
`

const GET_PUBLIC_MOCK_CHAT_QUERY = gql`
  query GetPublicMockChatQuery {
    getMockChat {
      ...PublicChat
    }
  }
  ${PublicChatFragment}
`

const GET_PUBLIC_CHATS_QUERY = gql`
  query GetPublicChatsQuery {
    getPublicChats {
      ...PublicChat
    }
  }
  ${PublicChatFragment}
`

const GET_PRIVATE_CHATS_QUERY = gql`
  query GetPrivateChatsQuery {
    getPrivateChats {
      ...PrivateChat
    }
  }
  ${PrivateChatFragment}
`

const GET_USER_QUERY = gql`
  query GetUserQuery($userName: String!, $password: String!) {
    getUser(userName: $userName, password: $password) {
      ...User
    }
  }
  ${UserFragment}
`

export {
  GET_PUBLIC_MOCK_CHAT_QUERY,
  GET_PUBLIC_CHATS_QUERY,
  GET_PRIVATE_CHATS_QUERY,
  GET_USER_QUERY,
  PublicChatFragment,
  PrivateChatFragment,
  UserFragment
}
