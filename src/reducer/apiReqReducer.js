export const apiReqReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                posts: action.payload,
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'CREATE_POST':
            return {
                ...state,
                loading: false,
                posts: [...state.posts, action.payload],
            };
        case 'DELETE_POST':
            return {
                ...state,
                loading: false,
                posts: state.posts.filter((post) => post.id !== action.payload),
            };
        case 'UPDATE_POST':
            return {
                ...state,
                loading: false,
                posts: state.posts.map((post) => {
                    if (post.id === action.payload.id) {
                        return action.payload;
                    }
                    return post;
                }),
            };
        default:
            return state;
    }
}