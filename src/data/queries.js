import gql from 'graphql-tag';

const ChatFragment = gql`
	fragment Chat on Chat {
		id
    sender
    message
    created
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

export {
  GET_MOCK_CHAT_QUERY,
  GET_CHATS_QUERY,
  ChatFragment
}
