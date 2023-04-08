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


const counterSlice = createSlice({
  name: 'Counter',
  initialState: {
    count: 1
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload || 1
    },
    decrement: (state, action) => {
      state.count -= 1
    },
  }
})

export const counterActions = counterSlice.actions;

export const cartActions = cartSlice.actions;
export const wishListActions = wishList.actions;

const commerceStore = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        counter: counterSlice.reducer,
        wishList:wishList.reducer
    }
})
export default commerceStore;