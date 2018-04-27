const userInfoReducer = (state = [], action)=>{

    if(action.type === 'GET_USERINFO'){
        console.log('this is it!!!', action.payload);
        return action.payload;
    } return state;
}

export default userInfoReducer;