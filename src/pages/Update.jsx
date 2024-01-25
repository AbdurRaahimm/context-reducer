import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '@/redux/userListSlice';

export default function Update() {
  const { id } = useParams();
  const { userList } = useSelector(state => state.user)
  const user = userList.find(user => user.id == id)
  // console.log(user)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const updateHandler = (e) => {
    e.preventDefault();
    // console.log(user.id)
    const id = user.id
    const name = e.target.name.value;
    const email = e.target.email.value;
    const age = e.target.age.value;
    const data = { id, name, email, age }
    dispatch(updateUser(data))
    navigate('/')

  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary " style={{ height: `100vh` }}>
      <div className="bg-white p-5 rounded-2 w-50 ">
        <h1 className="text-center">Update</h1>
        <form onSubmit={updateHandler} >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" defaultValue={user.name} name="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" defaultValue={user.email} name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="number" className="form-control" id="age" defaultValue={user.age} name="age" required />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  )
}
