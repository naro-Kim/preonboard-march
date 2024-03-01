// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices';


const rootReducer = combineReducers({ taskReducer });
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default store;