import {createSlice} from "@reduxjs/toolkit";
// import UpdateData, { getData } from "../../../services/fetchData";

const initialState = {
    UserCode: '',
    loading: false,
    hasErrors: false,
};

export const UserCodeSlice = createSlice({
    name: "UserCode",
    initialState,
    reducers: {
      fetchUserCode: (state) => {
        state.loading = true;
      },
      fetchUserCodeSuccess: (state, { payload }) => {
        state.UserCode = payload;
        state.loading = false;
        state.hasErrors = false;
      },
      fetchUserCodeFailure: (state) => {
        state.loading = false;
        state.hasErrors = true;
      },
      filterUserCode: (state, { payload }) => {
        state.UserCode = payload;
      },
    },
  });

  export const { fetchUserCode, fetchUserCodeSuccess, fetchUserCodeFailure } =
  UserCodeSlice.actions;

// a selector
export const UserCodeSelector = (state) => state?.UserCode;
// the reducer
export default UserCodeSlice.reducer;

// Asynchronous thunk action
export const fetchUserCodeAsync = (UserCode) => {
    return async (dispatch) => {
      dispatch(fetchUserCode());
      try {
       dispatch(fetchUserCodeSuccess(UserCode));
      } catch (error) {
        dispatch(fetchUserCodeFailure(error));
      }
    };
  };
  
  