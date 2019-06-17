import React from 'react';
import { withApollo, Query } from 'react-apollo';
import { GET_USER_QUERY } from '../../data/queries';

const UserRedirect = (props) => {
  const { userName } = props;
  let foundUser;
  return (
  <Query
    query={GET_USER_QUERY}
    variables={{ userName }}
    fetchPolicy= 'network-only'
  >
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      try {
        foundUser = <div>{data.getUser.name}</div>
      } catch {
        return null;
      }
      return foundUser;
    }}
  </Query>
)}

const EnhancedUserRedirect = withApollo(UserRedirect);

export default EnhancedUserRedirect;
