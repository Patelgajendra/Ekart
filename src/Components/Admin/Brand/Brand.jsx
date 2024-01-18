
import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../AdminSidebar'
import { useDispatch, useSelector } from 'react-redux'

import { deleteBrand, getBrand } from "../../../Store/ActionCreators/BrandActionCreators"
export default function Brand() {
    let [data, setData] = useState([])
    let dispatch = useDispatch()
    let BrandStateData = useSelector((state) => state.BrandStateData)
    function deleteItem(id) {
        dispatch(deleteBrand({ id: id }))
        getAPIData()
    }

 
    
    function getAPIData() {
        dispatch(getBrand())
        if (BrandStateData.length)
            setData(BrandStateData.slice(1).reverse())
    }
    useEffect(() => {
        getAPIData()
    }, [BrandStateData.length])
  return (
    <>

      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header carousel-image py-5">
        <h1 className="text-center text-white display-6">Admin</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>

          <li className="breadcrumb-item active text-white">Brand</li>
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
              <h5 className='bg-primary text-center text-light p-2 '>Brand<Link to="/Admin/Brand/Create"><i className='fas fa-plus text-white float-end pe-2'></i></Link></h5>
              <table className='table table-bordered table-hover'>
                <thead>
                  <tr>
                    <th >ID</th>
                    <th >Name</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((item, index) => {
                      return <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><Link to={`/admin/brand/update/${item.id}`}><i className='fas fa-edit ' style={{ color: "#0577fa" }} ></i></Link></td>
                        <td><button className='btn text-danger'><i className='fas fa-trash-alt' onClick={() => deleteItem(item.id)}></i></button></td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
