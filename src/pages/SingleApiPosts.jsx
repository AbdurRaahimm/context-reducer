import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import timeAgo from '../utilis/timeAgo';
import { useApiReq } from '../store/ApiReqProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


export default function SingleApiPosts() {
    const { state, dispatch } = useApiReq();
    const { loading, error } = state;
    const locate = useLocation();
    // console.log(locate.state);
    const navigate = useNavigate();

    const deleteApiPost = async (id) => {
        const response = await fetch(`http://localhost:5000/posts/${id}`, {
            method: "DELETE",
        });
        return await response.json();
    }
    const deletePost = async (id) => {
        if (confirm('Are you sure?')) {
            const data = await deleteApiPost(id);
            dispatch({ type: 'DELETE_POST', payload: data });
            navigate('/api')
        } else {
            return;
        }
    }
    return (
        <Layout>
            <div className="container py-4">
                {/* <h1>Single Api Posts</h1> */}
                {
                    loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <div className='' >
                            <div key={locate.state.id} >
                                {/* <img src={post.image} className="card-img-top h-25" alt={post.title} /> */}
                                <h3>{locate.state.title}</h3>
                                <p>{locate.state.desc}</p>
                                <p><small className="text-muted">Last updated {timeAgo(locate.state.id)} ago</small></p>
                                <div className="">
                                    <Link to={`/api/update/${locate.state.id}`} state={locate.state} className="btn btn-primary text-capitalize m-2">Update</Link>
                                    <button onClick={() => deletePost(locate.state.id)} className="btn btn-danger text-capitalize ">delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </Layout>
    )
}
