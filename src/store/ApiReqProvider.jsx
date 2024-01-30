import { createContext, useContext, useEffect , useReducer} from "react";
import { apiReqReducer } from "../reducer/apiReqReducer";

export const ApiReqContext = createContext();

const initialState = {
    posts: [],
    loading: true,
    error: null,
};

const fetchPosts = async() => {
    try {
        const response = await fetch('http://localhost:5000/posts');
        return await response.json();
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
};

export default function ApiReqProvider({ children }) {
    const [state, dispatch] = useReducer(apiReqReducer, initialState);
    const contextValue = {
        state,
        dispatch,
    };

    useEffect(() => {
        const fetchData = async() => {
            try {
                const posts = await fetchPosts();
                dispatch({ type: 'FETCH_SUCCESS', payload: posts });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        };
        fetchData();
    }, []);

    return (
        <ApiReqContext.Provider value={contextValue}>
            {children}
        </ApiReqContext.Provider>
    )
}

// custom hook
export const useApiReq = () => {
    return useContext(ApiReqContext);
};
