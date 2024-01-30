import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import timeAgo from '../utilis/timeAgo';
import { useApiReq } from '../store/ApiReqProvider';

export default function ApiCall() {
  const { state } = useApiReq();
  const { posts, loading, error } = state;
  // console.log(state);
  return (
    <Layout>
      <div className="container">
        <h1>API Posts</h1>
        <Link to={`create`} className='btn btn-primary text-capitalize  '>create post+</Link>

        {
          loading ? <h2>Loading...</h2> : (
            error ? <h2>{error}</h2> : (
              posts.map(post => (
                <div key={post.id} className="card my-3">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{post.author}</h6>
                    <p className="card-text">{post.desc}</p>
                    <p className="card-text">{timeAgo(post.id)}</p>
                    <Link to={`${post.id}`} state={post} className='btn btn-primary text-capitalize  '>view post</Link>
                  </div>
                </div>
              ))
            )
          )
        }

      </div>
    </Layout>
  )
}
