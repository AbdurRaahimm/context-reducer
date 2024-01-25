import React from 'react';
import Layout from '@/components/Layout';
import { useDispatch } from 'react-redux';
import { addApiPost } from '@/redux/apipostsSlice';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
    const dispatch = useDispatch();
const navigate = useNavigate();
const addPosts = async(e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value; 
    // const image = e.target.image.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(image);
    // reader.onload = () => {};
    const post = {
        id: Date.now(),
        title,
        desc,
        // image: reader.result,
    }
    dispatch(addApiPost(post))
    navigate('/api')

};
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
