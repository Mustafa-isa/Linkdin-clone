import   {SET_USER} from '../acrions/actionType'

const inialState ={
  user:null
}
const UserReducer =(state=inialState,action)=>{
  switch(action.type){
    case SET_USER:
      return{
        ...state,
        user:action.user
      }
      default:
        return state
  }
}
export default UserReducer