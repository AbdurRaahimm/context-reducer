import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiPosts } from '../redux/apipostsSlice';
import { Link } from 'react-router-dom';
import timeAgo from '../utilis/timeAgo';

export default function ApiCall() {
  const apiPosts = useSelector(state => state.apiPosts.posts);
  const loading = useSelector(state => state.apiPosts.loading);
  const Error = useSelector(state => state.apiPosts.error);
  const dispatch = useDispatch();
  // console.log(apiPosts)
  useEffect(() => {
    dispatch(fetchApiPosts())
  }, [])
  return (
    <Layout>
      <div className="container">
        <h1>API Posts</h1>
        <Link to={`create`} className='btn btn-primary text-capitalize  '>create post+</Link>
        {loading ? (
          <p>Loading...</p>
        ) : Error ? (
          <p>{Error}</p>
        ) : (
          <ul className='d-flex flex-wrap justify-content-center align-content-center  '>
            {
              apiPosts.length > 0 ? (
                apiPosts.map(post => (
                  <li key={post.id} className='card m-2' style={{ width: '18rem' }}>
                    {/* <img src={post.image} className="card-img-top h-50" alt={post.title} /> */}
                    <div className='card-body'>
                      <h5 className='card-title'>{post.title}</h5>
                      <p className='card-text text-justify'>{post.desc.slice(0,35)}</p>
                      <p className="card-text"><small className="text-muted">Last updated {timeAgo(post.id)} ago</small></p>
                    </div>
                    <div className="card-footer">
                      <Link to={`${post.id}`} state={post} className="btn btn-primary text-capitalize m-2">more</Link>
                    </div>
                  </li>
                ))
              ) : (
                <p>No Posts</p>
              )
            }
          </ul>
        )}
      </div>
    </Layout>
  )
}
