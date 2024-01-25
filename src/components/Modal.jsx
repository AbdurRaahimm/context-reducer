import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser } from '@/redux/userListSlice';

export default function Modal({ targetId }) {
    const users = useSelector(state => state.user)
    console.log(users)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddUser = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const age = e.target.age.value;
        const data = {
            id: users.userList[users.userList.length - 1].id + 1,
            name,
            email,
            age
        }
        await dispatch(addUser(data))
        navigate('/')


    }
    return (
        <>
            <div className="modal fade" id={targetId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add New User</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleAddUser}>
                                <div className="mb-3">
                                    <label htmlFor="user-name" className="col-form-label text-capitalize ">user name:</label>
                                    <input type="text" className="form-control" id="user-name" name="name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="user-email" className="col-form-label text-capitalize ">user email:</label>
                                    <input type="email" className="form-control" id="user-email" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age" className="col-form-label text-capitalize ">age:</label>
                                    <input type="number" className="form-control" id="age" name="age" required />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary text-capitalize">add user</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
