export const arrReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case 'UPDATE':
            return {
                ...state,
                data: state.data.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    }
                    return item;
                })
            };
        case 'REMOVE':
            return {
                ...state,
                data: state.data.filter((item) => item.id !== action.payload)
            };
        default:
            return state;

    };
}