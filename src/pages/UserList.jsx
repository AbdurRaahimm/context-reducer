import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '@/components/Modal'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteUser } from '@/redux/userListSlice';
import Layout from '@/components/Layout';



export default function UserList() {
  const users = useSelector(state => state.user)
  const dispatch = useDispatch();
  // console.log(users)
  
  const deleteHandler = (id) => {
   if(window.confirm('Are you sure?')){
    dispatch(deleteUser(id))
   }

  } 
  return (
   <Layout>
     <div className="d-flex justify-content-center align-items-center bg-primary " style={{ height: `100vh` }}>
      <div className="bg-white p-5 rounded-2 w-50 ">
        <h1 className="text-center">User List</h1>

        <button className='btn btn-primary ' data-bs-toggle="modal" data-bs-target="#openModal">Add +</button>
        <Modal targetId={`openModal`} />
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email address</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>


            {users.userList && users.userList.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/update/${user.id}`} className="btn btn-primary me-2">Update</Link>
                  <button onClick={()=>deleteHandler(user.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}

            {/* <tr>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>Admin</td>
              <td>
                <Link to={`/update`} className="btn btn-primary me-2">Update</Link>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>

      </div>
    </div>
   </Layout>
  )
}
