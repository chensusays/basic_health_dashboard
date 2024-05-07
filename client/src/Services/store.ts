import patientReducer from '@Reducers/PatientReducer'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
      patients: patientReducer,
    }
  })
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store