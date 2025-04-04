import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './slices/cartSlice'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer ,persistStore } from 'redux-persist'

const persistConfig={
  key:'root',
  storage
}

const reducers=combineReducers({
  cart:cartSlice
})

const persistedReducer= persistReducer(persistConfig,reducers);
export const store = configureStore({
  reducer:persistedReducer,
  },
)

export const persistor= persistStore(store);

export default store;