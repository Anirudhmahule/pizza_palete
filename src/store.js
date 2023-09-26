// Import your reducers first
import userReducer from '/src/features/user/userSlice.js?t=1695665120522';
import cartReducer from '/src/features/cart/cartSlice.js?t=1695628988477';

// Then configure the store with the imported reducers
import { configureStore } from '/node_modules/.vite/deps/@reduxjs_toolkit.js?v=273bbce8';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
