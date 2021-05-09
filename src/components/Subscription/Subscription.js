import { Component } from 'react';
import { GET_PUBLIC_CHATS_QUERY } from 'data/queries';
import { GET_PUBLIC_CHATS_SUBSCRIPTION } from 'data/subscriptions';
import debounce from 'lodash.debounce';
import { flowRight as compose } from 'lodash';
import { graphql, withApollo } from '@apollo/client/react/hoc';

const subscriptionOptions = {
  name: 'publicChatStream',
  options: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all"
  }
}
const withChatSubscriptionHOC = graphql(GET_PUBLIC_CHATS_QUERY, subscriptionOptions);

// Simple UIless component that refreshes apollo cache on new subscription data arrival periodically
class Subscription extends Component {

  componentDidMount() {
    debounce(() => {
      this.subscribeToPublicChats()
    }, 500)()
  }
  subscribeToPublicChats = () => {
    this.props.publicChatStream.subscribeToMore({
      document: GET_PUBLIC_CHATS_SUBSCRIPTION,
      updateQuery: (previousData, { subscriptionData }) => {
        return {
          getPublicChats: [...previousData.getPublicChats, subscriptionData.data.getPublicChats]
        }
      }
    });
  };
  render() {
    return null;
  }
}

const EnhancedSubscription = compose(withApollo, withChatSubscriptionHOC)(Subscription); //TODO: for private chat msg, HOC gonna be too much overload as people might not chat frequently or at all. So, looking for another lighter on-the-fly approach currently ...

export default EnhancedSubscription;
