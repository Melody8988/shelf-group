import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from '../../components/Nav/Nav';

import { fetchUser } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import ShelfItemsList from '../ShelfItemsList/ShelfItemsList';

const mapStateToProps = state => ({
  user: state.user,
  getShelf: state.getShelf
});

class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchUser());
    this.getShelf();
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  getShelf = () => {
    axios.get('/api/shelf').then((response) => {
      this.props.dispatch({
        type: 'GET_SHELF',
        payload: response.data
      })
    }).catch((error) => {
        console.log('Error in get', error);
    })
    
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    
    let content = null;
    let shelfItemsList = this.props.getShelf.map((item) => {
      return(<ShelfItemsList key={item.id} item={item} getShelf={this.getShelf}/>)
    })
    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          {shelfItemsList}
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
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

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

