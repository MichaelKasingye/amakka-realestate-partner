import {createSlice} from "@reduxjs/toolkit";
import { login, register } from "../../../services/gooleAuth";
// import UpdateData, { getData } from "../../../services/fetchData";

const initialState = {
    User: '',
    loading: false,
    hasErrors: false,
};

export const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
      fetchUser: (state) => {
        state.loading = true;
      },
      fetchUserSuccess: (state, { payload }) => {
        state.User = payload;
        state.loading = false;
        state.hasErrors = false;
      },
      fetchUserFailure: (state) => {
        state.loading = false;
        state.hasErrors = true;
      },
      filterUser: (state, { payload }) => {
        state.User = payload;
      },
    },
  });

  export const { fetchUser, fetchUserSuccess, fetchUserFailure } =
  UserSlice.actions;

// a selector
export const UserSelector = (state) => state?.User;
// the reducer
export default UserSlice.reducer;

// Asynchronous thunk action
export const fetchUserAsync = (user) => {
    return async (dispatch) => {
      dispatch(fetchUser());
      try {
        dispatch(fetchUserSuccess(user));
      } catch (error) {
        dispatch(fetchUserFailure(error));
      }
    };
  };
  
  export const fetchUserDataAsync = (user) => {
    return async (dispatch) => {
      dispatch(fetchUser());
      try {
        login(user).then((userData) =>  dispatch(fetchUserSuccess(userData)));
      } catch (error) {
        dispatch(fetchUserFailure(error));
      }
    };
  };

  export const fetchRegisteredUserDataAsync = (user) => {
    return async (dispatch) => {
      dispatch(fetchUser());
      try {
        register(user).then((userData) =>  dispatch(fetchUserSuccess(userData)));
      } catch (error) {
        dispatch(fetchUserFailure(error));
      }
    };
  };

  // export const updateUserAsync = (id, data) => {
  //   return async (dispatch) => {
  //       UpdateData(id, "interested_clients", data)
  //       .then(() => {
  //           // getSpecificData("interested_clients", id).then((User) => dispatch(fetchUserSuccess(User)));
  //           getData("interested_clients").then((User) =>  dispatch(fetchUserSuccess(User)));
  //       })
  //       .catch((error) => {
  //         dispatch(fetchUserFailure(error));
  //       });
  //   };
  // };