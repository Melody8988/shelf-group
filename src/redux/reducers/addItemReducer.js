 

function addItemReducer(state = [], action) {
    // Change state with a return
    switch (action.type) {
      case 'POST_IMAGE':
        return action.payload;
      default:
        return state;
    }
  }

export default addItemReducer;