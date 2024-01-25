import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "./userListSlice";
import postsReducer from "./postsSlice";
import apipostsReducer from "./apipostsSlice";

const store = configureStore({
    reducer: {
        // here we will be adding reducers
        user: userListReducer,
        posts: postsReducer,
        apiPosts: apipostsReducer,
    }
})

export default store;