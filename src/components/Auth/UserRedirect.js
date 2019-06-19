import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { GET_USER_QUERY } from 'data/queries';
import { Redirect } from 'react-router-dom';
import RegisterUser from './RegisterUser';

class UserRedirect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUser: {}
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async() => {
    try {
      const { userName, password, client } = this.props;
      const user = await client.query({
        query: GET_USER_QUERY,
        fetchPolicy: 'network-only',
        variables: { userName }
      });
      if (user.data.getUser) {
        this.setState({ getUser: user.data.getUser })
      }
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  render() {
    const { name, id } = this.state.getUser;
    if (name) {
      return (<Redirect
        to={{
          pathname:'/chat',
          userName: name,
          userId: id
        }}
      />)
    }
    return <RegisterUser name={this.props.userName}/>
  }
}

const EnhancedUserRedirect = withApollo(UserRedirect);

export default EnhancedUserRedirect;
