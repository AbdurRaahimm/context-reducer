import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '@/components/Modal'

import Layout from '@/components/Layout';
import { useArrCRUD } from '../store/ArrCRUDProvider';



export default function UserList() {
  const { state, dispatch } = useArrCRUD();
  const { data } = state;
  // console.log(data);

  const removeItem = (itemId) => {
    dispatch({ type: 'REMOVE', payload: itemId })
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

              {
                data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.age}</td>
                      <td>
                        <Link to={`/update/${item.id}`} state={item} className="btn btn-primary me-2">Update</Link>
                        <button onClick={()=> removeItem(item.id) } className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  )
                })
              }



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
