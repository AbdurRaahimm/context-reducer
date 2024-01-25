import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApiPosts = createAsyncThunk("fetchApiPosts", async () => {
    const response = await fetch("http://localhost:5000/posts");
    return await response.json();
}
);


export const addApiPost = createAsyncThunk("addApiPost", async (data) => {
    const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}
);

export const deleteApiPost = createAsyncThunk("deleteApiPost", async (id) => {
    const response = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
    });
    return await response.json();
}
);

export const updateApiPost = createAsyncThunk("updateApiPost", async (data) => {
    const response = await fetch(`http://localhost:5000/posts/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}
);

const apipostsSlice = createSlice({
    name: "apiPosts",
    initialState: {
        posts: [],
        loading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiPosts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchApiPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchApiPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addApiPost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts.push(action.payload);
            })

            .addCase(deleteApiPost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = state.posts.filter((post) => post.id !== action.payload);
            })
            .addCase(updateApiPost.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.posts.findIndex((post) => post.id === action.payload.id);
                state.posts[index] = action.payload;
            })
    },
});

export default apipostsSlice.reducer;