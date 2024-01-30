import { createContext, useContext, useEffect, useReducer } from "react";
import { postsReducer } from "../reducer/postsReducer";


export const DataFetchContext = createContext();

const initialState = {
    loading: true,
    error: '',
    posts: []
}

const fetchPosts = async () => {
    try {
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await response.json();
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

export default function DataFetchProvider({ children }) {
    const [state, dispatch] = useReducer(postsReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const posts = await fetchPosts();
                dispatch({ type: 'SUCCESS', payload: posts })
            } catch (error) {
                dispatch({ type: 'ERROR', payload: error.message })
            }
        }
        fetchData();
    }, []);

    return (
        <DataFetchContext.Provider value={state} >
            {children}
        </DataFetchContext.Provider>
    )
}


// custom hook
export const useDataFetch = () => {
    return useContext(DataFetchContext);
};

