import gql from 'graphql-tag';

export const GET_MESSAGE_SUBSCRIPTION = gql`
  subscription GetMessageSubscription {
    getMessage {
      id
      sender
      message
      created
    }
  }
`
