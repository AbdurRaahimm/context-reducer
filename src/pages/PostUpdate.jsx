import React from 'react';
import Layout from '@/components/Layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApiReq } from '../store/ApiReqProvider';


export default function PostUpdate() {
    const {dispatch } = useApiReq();
    const locate = useLocation();
    const navigate = useNavigate();

    const updateApiPost = async (id, data) => {
        const response = await fetch(`http://localhost:5000/posts/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }
    
    const updatePosts = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        const post = {
            id: Date.now().toString(),
            title,
            desc,
        }
        const data = await updateApiPost(locate.state.id, post);
        dispatch({ type: 'UPDATE_POST', payload: data });
        navigate('/api')
    }

    return (
        <Layout>
            <div className="container py-4">
                <h1>Update Post</h1>
                <form onSubmit={updatePosts}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" name='title' defaultValue={locate.state.title} className="form-control" id="title" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <textarea className="form-control" name='desc' defaultValue={locate.state.desc} id="desc" rows="3" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary text-capitalize ">update</button>
                </form>
            </div>
        </Layout>
    )
}
