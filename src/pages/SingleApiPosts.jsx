import React from 'react';
import Layout from '@/components/Layout';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteApiPost } from '../redux/apipostsSlice';
import timeAgo from '../utilis/timeAgo';


export default function SingleApiPosts() {
    const { id } = useParams();
    const loading = useSelector(state => state.apiPosts.loading);
    const Error = useSelector(state => state.apiPosts.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const locate = useLocation();
    // console.log(locate.state)

    const deletePost = async (id) => {
        if (confirm('Are you sure?')) {
            dispatch(deleteApiPost(id))
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
                    ) : Error ? (
                        <p>{Error}</p>
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
