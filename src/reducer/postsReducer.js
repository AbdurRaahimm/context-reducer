export const postsReducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                ...state,  
                loading: false,            
                posts: action.payload
            }
        case 'ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}