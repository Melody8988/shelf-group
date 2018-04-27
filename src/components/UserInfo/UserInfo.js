import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { fetchUser } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

const mapStateToProps = state => ({
  user: state.user,
  userInfo: state.userInfo
});

class UserInfo extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUser());
        this.props.dispatch({ type: 'GET_TOTALS'})
        
      }
    
      componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }
    
      logout = () => {
        this.props.dispatch(triggerLogout());
        // this.props.history.push('home');
      }
    
      render() {

        let userInfo = this.props.userInfo.map((item) => {
          return (
            <div>{item.username} {item.count}</div>
          )
        });

        let content = null;
        //map over join table data
    
        if (this.props.user.userName) {
          content = (
            <div>
            {userInfo}
            </div>
          );
        }
    
        return (
          <div>
            <Nav />
            { content }
            <pre>{JSON.stringify(this.props.userInfo)}</pre>
            
          </div>
        );
      }
}
export default connect(mapStateToProps)(UserInfo);