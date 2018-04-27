import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { fetchUser } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

// const mapDispatchToProps = {
//   fetchUser,
// };

class InfoPage extends Component {
  state = {
    description: '',
    image_url: '',
  }
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleImgChange = (inputText) => {
    return (event) => {
      console.log(inputText)
      this.setState({
        [inputText]: event.target.value
      });
    }
  }

  handleClick = () => {
    console.log('clicked!')
    this.props.dispatch({
      type: 'ADD_IMAGE',
      payload: this.state
    });

  }



  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>
            Info Page
          </p>
          <input type='text'
            placeholder='description'
            onChange={this.handleImgChange('description')}></input>
          <input type='text'
            placeholder='absolute url'
            onChange={this.handleImgChange('image_url')}></input>

          <button onClick={this.handleClick}>Add!</button>

        </div>
      );
    }

    return (
      <div>
        <Nav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
