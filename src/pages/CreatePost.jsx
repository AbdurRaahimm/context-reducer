import React from 'react';
import Layout from '@/components/Layout';
import { useApiReq } from '../store/ApiReqProvider';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
    const { dispatch } = useApiReq();
    const navigate = useNavigate();

    const addPosts = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        const post = {
            id: Date.now().toString(),
            title,
            desc,
        }
        const response = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        const data = await response.json();
        dispatch({ type: 'CREATE_POST', payload: data });
        navigate('/api')

        // createPost(post).then(data => {
        //     dispatch({ type: 'CREATE_POST', payload: data });
        //     navigate('/api')
        // })

    }
    return (
        <Layout>
            <div className="container py-4">
                <h1>Create Post</h1>
                <form onSubmit={addPosts}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" name='title' className="form-control" id="title" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <textarea className="form-control" name='desc' id="desc" rows="3" required></textarea>
                    </div>
                    <div className="mb-3">
                        {/* <label htmlFor="desc" className="form-label">Image</label> */}
                        {/* <input type="file" className="form-control" name='image' id="image" required /> */}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Layout>
    )
}
