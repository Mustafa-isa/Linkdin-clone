// create actions  with data
import * as actions from  "./actionType"
const setUser =(payload)=>{
return {
  type:actions.SET_USER,
  user:payload
}
}
export {
  setUser
}