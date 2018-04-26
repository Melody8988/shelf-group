import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { fetchUser } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

const mapStateToProps = state => ({
  user: state.user,
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
        let content = null;
        //map over join table data
    
        if (this.props.user.userName) {
          content = (
            <div>
              
            </div>
          );
        }
    
        return (
          <div>
            <Nav />
            { content }
          </div>
        );
      }
}
export default connect(mapStateToProps)(UserInfo);