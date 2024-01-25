import React from 'react';
import Layout from '@/components/Layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateApiPost } from '@/redux/apipostsSlice';

export default function PostUpdate() {
    const locate = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(locate)

    const updatePosts = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        const post = {
            ...locate.state,
            title,
            desc
        }
        dispatch(updateApiPost(post))
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
