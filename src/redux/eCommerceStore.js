import{configureStore, createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "Shop",  
  initalState:[],
  reducers: {
    addToCart:(state,action)=>{
        state.push(action.payload);
    },
    removeFromCart:(state,action) =>{
        state.splice(action.payload)
    },
    updateCart: (state,action)=>{
        state[action.payload.index] = action.payload.value;
    },
    clearCart :(state,action) =>{
        state.length=0;
    }
  }
})

export const cartActions = cartSlice.actions;
const commerceStore = configureStore({
    reducer:{
        shop:cartSlice.reducer
    }
})
export default commerceStore;