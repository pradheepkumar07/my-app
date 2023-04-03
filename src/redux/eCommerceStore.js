import{configureStore, createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  
  name:"cart",
  initialState:[],
  reducers:{
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

const wishList = createSlice({
    name:"wishList",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload);
        }
    }
})
export const cartActions = cartSlice.actions;
export const wishListActions = wishList.actions;

const commerceStore = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        wishList:wishList.reducer
    }
})
export default commerceStore;