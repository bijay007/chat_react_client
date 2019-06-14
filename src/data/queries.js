import gql from 'graphql-tag';

const ChatFragment = gql`
	fragment Chat on Chat {
		id
    senderId
    senderName
    message
    created
	}
`

const UserFragment = gql`
  fragment User on User {
    id,
    name,
    email,
    chats
  }
`

const GET_MOCK_CHAT_QUERY = gql`
  query GetMockChatQuery {
    getMockChat {
      ...Chat
    }
  }
  ${ChatFragment}
`

const GET_CHATS_QUERY = gql`
  query GetChatsQuery {
    getChats {
      ...Chat
    }
  }
  ${ChatFragment}
`
const GET_USER_QUERY = gql`
  query GetUserQuery {
    getUser {
      ...User
    }
  }
  ${UserFragment}
`

export {
  GET_MOCK_CHAT_QUERY,
  GET_CHATS_QUERY,
  GET_USER_QUERY,
  ChatFragment,
  UserFragment
}
