import React from 'react';
import Layout from '@/components/Layout';
import { useLocation } from 'react-router-dom';

export default function SinglePosts() {
  const locate = useLocation();
  // console.log(locate.state)
  return (
    <Layout>
      {/* <h1>SinglePosts</h1> */}
      <div className='p-4' >
        <h3>{locate.state.title}</h3>
        <p>{locate.state.body}</p>
      </div>
    </Layout>
  )
}
