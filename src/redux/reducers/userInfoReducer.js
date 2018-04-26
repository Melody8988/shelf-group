const userInfoReducer = (state = [], action)=>{
    if(action.type === 'GET_USERINFO'){
        console.log('GET_USERINFO', action.payload);
        return action.payload
    } return state;
}

export default userInfoReducer;