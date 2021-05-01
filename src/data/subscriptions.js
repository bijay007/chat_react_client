import gql from 'graphql-tag';

const GET_PUBLIC_CHATS_SUBSCRIPTION = gql`
  subscription GetPublicChatsSubscription {
    getPublicChats {
      id
      senderId
      senderName
      message
      created
    }
  }
`

const GET_PRIVATE_CHATS_SUBSCRIPTION = gql`
  subscription GetPrivateChatsSubscription {
    getPrivateChats {
      id
      senderId
      senderName
      receiverId
      receiverName
      message
      created
    }
  }
`

export {
  GET_PUBLIC_CHATS_SUBSCRIPTION,
  GET_PRIVATE_CHATS_SUBSCRIPTION
}
