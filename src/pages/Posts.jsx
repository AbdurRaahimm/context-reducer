import React, { useContext, useEffect } from 'react'
import Layout from '@/components/Layout'
import { useDataFetch } from '@/store/DataFetchProvider';
import { Link } from 'react-router-dom';


export default function Posts() {
    const { loading, error, posts } = useDataFetch();
    // console.log(loading, error, posts);
    return (
        <Layout>
            <h1>Posts  </h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul className='d-flex flex-wrap justify-content-center align-content-center  '>
                    {posts.map(post => (
                        <div key={post.id} className='card p-2 m-2 w-25 h-50' >
                            <h3>{post.title.slice(0, 15)}...</h3>
                            <p>{post.body.slice(0, 50)}...</p>
                            <Link to={`${post.id}`} state={post} className="btn btn-link text-capitalize ">more</Link>
                        </div>
                    ))}
                </ul>
            )}

        </Layout>
    )
}
