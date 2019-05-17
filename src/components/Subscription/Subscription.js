import { Component } from 'react';
import { GET_CHATS_QUERY } from 'data/queries';
import { GET_MESSAGE_SUBSCRIPTION } from 'data/subscriptions';
import debounce from 'lodash.debounce';
import { graphql, compose, withApollo } from 'react-apollo';

const subscriptionOptions = {
  name: 'chatStream',
  options: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all"
  }
}
const withChatSubscriptionHOC = graphql(GET_CHATS_QUERY, subscriptionOptions);

// Simple UIless component that refreshes apollo cache on new subscription data arrival periodically
class Subscription extends Component {

  componentDidMount() {
    debounce(() => {this.subscribeToMoreChats()}, 500)()
  }
  subscribeToMoreChats = () => {
    this.props.chatStream.subscribeToMore({
      document: GET_MESSAGE_SUBSCRIPTION,
      updateQuery: (previousData, { subscriptionData }) => {
        return {
          getChats: [...previousData.getChats, subscriptionData.data.getMessage]
        }
      }
    });
  };
  render() {
    return null;
  }
}

const EnhancedSubscription = compose(withApollo, withChatSubscriptionHOC)(Subscription);

export default EnhancedSubscription;
