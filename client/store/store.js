import { configureStore } from '@reduxjs/toolkit';
import userSlice from './rootReducer'

export const store = configureStore({
  reducer: {
      user: userSlice
  },
});

  /*
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
     ReturnType,
     RootState,
     unknown,
     Action<string>
   >;*/