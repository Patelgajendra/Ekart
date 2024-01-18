import React from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

export default function AdminHome() {
  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header carousel-image py-5">
        <h1 className="text-center text-white display-6">Admin</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>

          <li className="breadcrumb-item active text-white">Admin Section</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}
      <div className="container-fluid my-3" >
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>

          <div className="col-md-9">
            <div className="row">
              <h5 className='bg-primary text-center text-light p-2 '>Admin Section</h5>
              <div className="col-md-6">
                <img src="/img2/noImg.png" alt="" className='img-fluid mb-2' />
              </div>

              <div className="col-md-6">
                <table className='table table-hover table-bordered '>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>Gajendra Patel</td>
                    </tr>
                    <tr>
                      <th>UserName</th>
                      <td>@patel61052</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>patel.61052@gmail.com</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>6306618391</td>
                    </tr>
                    <tr>
                      <td colSpan={2}><Link to="/update-profile" className='btn btn-primary text-light w-100'>Update Profilie</Link></td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
