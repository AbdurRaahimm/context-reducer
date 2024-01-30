import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useArrCRUD } from '../store/ArrCRUDProvider';


export default function Update() {
  const locate = useLocation();
  const { name, email, age } = locate.state;
  const { dispatch } = useArrCRUD();
  const navigate  = useNavigate();
  // console.log(locate.state);
  const updateHandler = (e) => {
    e.preventDefault();
    const { name, email, age } = e.target;
    const newItem = {
      id: locate.state.id,
      name: name.value,
      email: email.value,
      age: age.value
    }
    dispatch({ type: 'UPDATE', payload: newItem })
    navigate('/');
  }
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary " style={{ height: `100vh` }}>
      <div className="bg-white p-5 rounded-2 w-50 ">
        <h1 className="text-center">Update</h1>
        <form onSubmit={updateHandler} >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" defaultValue={name} name="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" defaultValue={email} name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="number" className="form-control" id="age" defaultValue={age} name="age" required />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  )
}
