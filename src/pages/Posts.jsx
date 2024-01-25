import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '@/redux/postsSlice';
import { Link } from 'react-router-dom';

export default function Posts() {
    const posts = useSelector(state => state.posts.posts);
    const loading = useSelector(state => state.posts.loading);
    const error = useSelector(state => state.posts.error);
    const dispatch = useDispatch();
    // console.log(posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <Layout>
            <h1>Posts</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul className='d-flex flex-wrap justify-content-center align-content-center  '>
                    {posts.map(post => (
                        <div key={post.id} className='card p-2 m-2 w-25 h-50' >
                            <h3>{post.title.slice(0,15)}...</h3>
                            <p>{post.body.slice(0, 50)}...</p>
                            <Link to={`${post.id}`} state={post} className="btn btn-link text-capitalize ">more</Link>
                        </div>
                    ))}
                </ul>
            )}
            {/* {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {posts && posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))} */}
        </Layout>
    )
}
