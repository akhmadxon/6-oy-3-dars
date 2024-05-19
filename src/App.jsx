import { useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      name: event.target[0].value,
      age: event.target[1].value,
      phone: event.target[2].value,
      address: event.target[3].value
    }
    setUsers([...users, user])
    event.target[0].value = ""
    event.target[1].value = ""
    event.target[2].value = ""
    event.target[3].value = ""
  }
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <td>T/R</td>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Phone</td>
                  <td>Address</td>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h1>Add User</h1>
              </div>
              <div className="card-body">
                <form id='form' onSubmit={handleSubmit}>
                  <input type="text" placeholder='Enter name' className='form-control my-2' />
                  <input type="number" placeholder='Enter age' className='form-control my-2' />
                  <input type="tel" placeholder='Enter phone' className='form-control my-2' />
                  <input type="text" placeholder='Enter address' className='form-control my-2' />
                </form>
              </div>
              <div className="card-footer">
                <button type='submit' className='btn btn-success' form='form'>Add user</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App