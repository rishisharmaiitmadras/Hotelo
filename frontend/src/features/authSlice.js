import {createSlice} from '@reduxjs/toolkit'


const saveToken=localStorage.getItem('token')
const getStoredUser = () => {
  try {
    const storedUser = localStorage.getItem('user');
    if (!storedUser || storedUser === 'undefined') return null;
    return JSON.parse(storedUser);
  } catch (error) {
    return null;
  }
};

const initialState={
    token:saveToken?saveToken:null,
    user:getStoredUser(),
    isLoggedIn:saveToken?true:false
    
}

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            
            const {token,user}=action.payload
            state.token=token
            state.user=user
            state.isLoggedIn=true;
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))

        },
        logout:(state)=>{
            state.token=null;
            state.user=null;
            state.isLoggedIn=false
            
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            
        }
    }


})

export const {login,logout}=authSlice.actions
export default authSlice.reducer;