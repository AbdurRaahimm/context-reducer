import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data/user";

const userListSlice = createSlice({
    name: "userList",
    initialState: {
        userList: userList,
    },
    reducers: {
        addUser: (state, action) => {
            state.userList.push(action.payload);
        }, 
        deleteUser: (state, action) => {
            state.userList = state.userList.filter((user) => user.id !== action.payload);
        },
        updateUser: (state, action) => { 
            // update user 
            const index = state.userList.findIndex((user) => user.id === action.payload.id);

            if (index !== -1) {
                state.userList[index] = action.payload;
            }

            
        },
    },
});

export const {
    addUser,
    deleteUser,
    updateUser,
} = userListSlice.actions;

export default userListSlice.reducer;